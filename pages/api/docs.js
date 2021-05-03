import pool, { selectDocument } from "@database/pool";

export default (req, res) => {
  pool.query(selectDocument, [req.body.search], (err, result) => {
    if (err) {
      console.log("Error in query", err.stack);
      return res.status(500).json({ docs: [], message: err.message });
    }

    return res.status(200).json({ docs: result.rows, message: "" });
  });
};
