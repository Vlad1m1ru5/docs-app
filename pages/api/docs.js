import pool from "@database/pool";
import SQL from "@database/sql";

export default async function handle(req, res) {
  pool.query(SQL.SELECT_DOCUMENT, [req.body.search], (err, result) => {
    if (err) {
      console.log("Error in query", err.stack);
      return res.status(500).json({ docs: [], message: err.message });
    }

    return res.status(200).json({ docs: result.rows, message: "" });
  });
}
