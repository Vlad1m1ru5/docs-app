CREATE EXTENSION IF NOT EXISTS "zombodb";

CREATE TABLE DocumentName (
  Id    serial,
  Value varchar(255) NOT NULL UNIQUE
);

ALTER TABLE DocumentName ADD CONSTRAINT pkDocumentName PRIMARY KEY (Id);

CREATE TABLE DistributionGroup (
  Id    serial,
  Value varchar(255) NOT NULL UNIQUE
);

ALTER TABLE DistributionGroup ADD CONSTRAINT pkDistributionGroup PRIMARY KEY (Id);

CREATE TABLE DistributionArtifact (
  Id    serial,
  Value varchar(64) NOT NULL UNIQUE
);

ALTER TABLE DistributionArtifact ADD CONSTRAINT pkDistributionArtifact PRIMARY KEY (Id);

CREATE TABLE DistributionVersion (
  Id    serial,
  Value varchar(64) NOT NULL UNIQUE
);

ALTER TABLE DistributionVersion ADD CONSTRAINT pkDistributionVersion PRIMARY KEY (Id);

CREATE TABLE Distribution (
  Id                      serial,
  DistributionGroupId     integer NOT NULL,
  DistributionArtifactId  integer NOT NULL,
  DistributionVersionId   integer NOT NULL
);

ALTER TABLE Distribution ADD CONSTRAINT pkDistribution PRIMARY KEY (Id);
ALTER TABLE Distribution ADD CONSTRAINT fkDistributionDistributionGroupId FOREIGN KEY (DistributionGroupId) REFERENCES DistributionGroup (Id) ON DELETE CASCADE;
ALTER TABLE Distribution ADD CONSTRAINT fkDistributionDistributionArtifactId FOREIGN KEY (DistributionArtifactId) REFERENCES DistributionArtifact (Id) ON DELETE CASCADE;
ALTER TABLE Distribution ADD CONSTRAINT fkDistributionDistributionVersionId FOREIGN KEY (DistributionVersionId) REFERENCES DistributionVersion (Id) ON DELETE CASCADE;

CREATE TABLE Document (
  Id              serial,
  DocumentNameId  integer NOT NULL,
  DistributionId  integer NOT NULL,
  content         zdb.fulltext
);

ALTER TABLE Document ADD CONSTRAINT pkDocument PRIMARY KEY (Id);
ALTER TABLE Document ADD CONSTRAINT fkDocumentDocumentNameId FOREIGN KEY (DocumentNameId) REFERENCES DocumentName (Id) ON DELETE CASCADE;
ALTER TABLE Document ADD CONSTRAINT fkDocumentDistributionId FOREIGN KEY (DistributionId) REFERENCES Distribution (Id) ON DELETE CASCADE;

CREATE INDEX IdxDocument ON Document USING zombodb ((Document.*)) WITH (url='http://127.0.0.1:9200/');
