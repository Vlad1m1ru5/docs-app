import pool from "@database/pool";
import SQL from "@database/sql";
import { IncomingForm } from "formidable";
import fs from "fs";
import matter from "gray-matter";

export default async function (req, res) {
  new IncomingForm().parse(req, (err, fields, files) => {
    if (err) {
      const { message } = err;
      return res.status(500).json({ message });
    }

    const { file } = files;
    if (file === null) {
      return res.status(500).json({ message: "Error parsing file form field" });
    }

    const { name, path } = file;
    const fileContents = fs.readFileSync(path).toString();
    const { data, content } = matter(fileContents);
    const { groupId, artifactId, version } = data;

    if (groupId === null || artifactId === null || version === null) {
      return res.status(500).json({ message: "Error parsing front matter" });
    }

    pool.connect((err, client, done) => {
      const shouldAbort = (err) => {
        if (err) {
          console.log("ERROR in transaction", err.stack);
          client.query("ROLLBACK", (err) => {
            err && console.log("Error rolling back", err.stack);
            done();
          });
        }
        return !!err;
      };

      if (shouldAbort(err)) {
        return res.status(500).json({ message: err.message });
      }

      client.query(SQL.BEGIN, (err) => {
        if (shouldAbort(err)) {
          return res.status(500).json({ message: err.message });
        }

        client.query(
          SQL.INSERT_DISTRIBUTION,
          [groupId, artifactId, version],
          (err) => {
            if (shouldAbort(err)) {
              return res.status(500).json({ message: err.message });
            }

            client.query(
              SQL.INSERT_DOCUMENTATION,
              [name, groupId, artifactId, version, content],
              (err) => {
                if (shouldAbort(err)) {
                  return res.status(500).json({ message: err.message });
                }

                client.query(SQL.COMMIT, (err) => {
                  if (err) {
                    console.log("Error commiting transaction", err.stack);
                    res.status(500).json({ message: err.message });
                  }

                  done();
                  return res.status(200).json({ message: "Uploaded" });
                });
              }
            );
          }
        );
      });
    });
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
