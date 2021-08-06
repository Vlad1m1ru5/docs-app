import pool, { selectFirstDocumentContent } from "@database/pool";

export default (req, res) => {
  const { groupId, artifactId, version, name } = JSON.parse(req.body);
  pool.query(
    selectFirstDocumentContent,
    [groupId, artifactId, version, name],
    (err, result) => {
      if (err) {
        console.log("Error in query", err.stack);
        return res.status(500).json({ content: "", message: err.message });
      }

      const content = result.rows.length ? result.rows[0].content : "";
      return res.status(200).json({ content, message: "" });
    }
  );
};
