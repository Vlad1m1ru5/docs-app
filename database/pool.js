import { Pool } from "pg";

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

export default pool;

export const insertDistribution = `
WITH DistributionGroupEntry AS
      (INSERT INTO DistributionGroup AS dg (Value) VALUES ($1)
        ON CONFLICT (Value) DO UPDATE SET Value = dg.Value
        RETURNING Id),
     DistributionArtifactEntry AS
      (INSERT INTO DistributionArtifact AS da (Value) VALUES ($2)
        ON CONFLICT (Value) DO UPDATE SET Value = da.Value
        RETURNING Id),
     DistributionVersionEntry AS
      (INSERT INTO DistributionVersion AS dv (Value) VALUES ($3) 
        ON CONFLICT (Value) Do UPDATE SET Value = dv.Value
        RETURNING Id)
INSERT INTO Distribution (DistributionGroupId, DistributionArtifactId, DistributionVersionId)
SELECT DistributionGroupEntry.Id, DistributionArtifactEntry.Id, DistributionVersionEntry.Id
FROM DistributionGroupEntry, DistributionArtifactEntry, DistributionVersionEntry
WHERE NOT EXISTS
  (SELECT DistributionGroupId, DistributionArtifactId, DistributionVersionId
   FROM Distribution
   WHERE DistributionGroupId = DistributionGroupEntry.Id
   AND DistributionArtifactId = DistributionArtifactEntry.Id
   AND DistributionVersionId = DistributionVersionEntry.Id);
`;

export const insertDocument = `
WITH DocumentNameEntry AS
      (INSERT INTO DocumentName as dn (Value) VALUES ($1)
       ON CONFLICT (Value) DO UPDATE SET Value = dn.Value
       RETURNING Id),
     DistributionEntry AS
      (SELECT Distribution.Id, Distribution.DistributionGroupId, Distribution.DistributionArtifactId, Distribution.DistributionVersionId
       FROM Distribution
       INNER JOIN DistributionGroup ON DistributionGroup.Id = Distribution.DistributionGroupId
       INNER JOIN DistributionArtifact ON DistributionArtifact.Id = Distribution.DistributionArtifactId
       INNER JOIN DistributionVersion ON DistributionVersion.Id = Distribution.DistributionVersionId
       WHERE DistributionGroup.Value = $2
       AND DistributionArtifact.Value = $3
       AND DistributionVersion.Value = $4
       LIMIT 1)
INSERT INTO Document (DocumentNameId, DistributionId, Content)
SELECT DocumentNameEntry.Id, DistributionEntry.Id, $5
FROM DocumentNameEntry, DistributionEntry;
`;

export const selectDocument = `
SELECT DocumentName.Value AS "Name", DistributionGroup.Value AS "Group", DistributionArtifact.Value AS "Artifact", DistributionVersion.Value AS "Version"
FROM Document
INNER JOIN DocumentName ON DocumentName.Id = Document.DocumentNameId
INNER JOIN Distribution ON Distribution.Id = Document.DistributionId
INNER JOIN DistributionGroup ON DistributionGroup.Id = Distribution.DistributionGroupId
INNER JOIN DistributionArtifact ON DistributionArtifact.Id = Distribution.DistributionArtifactId
INNER JOIN DistributionVersion ON DistributionVersion.Id = Distribution.DistributionVersionId
WHERE Document ==> $1;
`;

export const selectFirstDocumentContent = `
SELECT Document.Content
FROM Document
INNER JOIN DocumentName ON DocumentName.Id = Document.DocumentNameId
INNER JOIN Distribution ON Distribution.Id = Document.DistributionId
INNER JOIN DistributionGroup ON DistributionGroup.Id = Distribution.DistributionGroupId
INNER JOIN DistributionArtifact ON DistributionArtifact.Id = Distribution.DistributionArtifactId
INNER JOIN DistributionVersion ON DistributionVersion.Id = Distribution.DistributionVersionId
WHERE DistributionGroup.Value = $1
AND DistributionArtifact.Value = $2
AND DistributionVersion.Value = $3
AND DocumentName.Value = $4
LIMIT 1;
`;
