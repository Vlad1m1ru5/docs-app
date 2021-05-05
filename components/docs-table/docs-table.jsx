export default function DocsTable({ rows, cols }) {
  return (
    <table className="w-full table-fixed">
      <tr>
        {cols.map((key, index) => (
          <th key={index}>{key}</th>
        ))}
      </tr>
      {rows.map((doc, index) => (
        <tr key={index}>
          {cols.map((key, index) => (
            <td key={index} className="text-center">
              {doc[key] || ""}
            </td>
          ))}
        </tr>
      ))}
    </table>
  );
}
