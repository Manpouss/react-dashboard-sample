export default function DataTable({ rows }) {
  return (
    <div className="table-wrap">
      <table className="table">
        <thead>
          <tr>
            <th className="th">ID</th>
            <th className="th">Name</th>
            <th className="th">Status</th>
            <th className="th">Amount (€)</th>
            <th className="th">Date</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="td">{row.id}</td>
              <td className="td">{row.name}</td>
              <td className="td">{row.status}</td>
              <td className="td">{row.amount}</td>
              <td className="td">{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
