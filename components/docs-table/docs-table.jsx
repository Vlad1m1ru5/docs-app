import AppLink from "@components/app-link";

export default function DocsTable({ rows, cols }) {
  return (
    <table className="w-full table-fixed">
      <thead>
        <tr>
          {cols.map((key, index) => (
            <th key={index}>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody className="text-center">
        {rows.map((row) => (
          <tr key={row.uri} className="odd:bg-gray-100 hover:shadow">
            {cols.map((key, index) => (
              <td key={index} className="p-0">
                <AppLink href={row.uri} className="block py-2">
                  {row.value[key] || ""}
                </AppLink>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
