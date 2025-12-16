export default function DataTable({ rows }) {
  return (
    <div style={{ overflowX: "auto" }}>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Status</th>
            <th style={thStyle}>Amount (€)</th>
            <th style={thStyle}>Date</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td style={tdStyle}>{row.id}</td>
              <td style={tdStyle}>{row.name}</td>
              <td style={tdStyle}>{row.status}</td>
              <td style={tdStyle}>{row.amount}</td>
              <td style={tdStyle}>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  textAlign: "left",
  padding: "12px",
  background: "#f0f2f5",
  fontWeight: "600",
  borderBottom: "1px solid #e5e7eb",
};

const tdStyle = {
  padding: "12px",
  borderBottom: "1px solid #e5e7eb",
};
