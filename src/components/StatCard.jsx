export default function StatCard({ label, value }) {
  return (
    <div style={{
      padding: "20px",
      background: "#f4f4f4",
      borderRadius: "8px",
      textAlign: "center",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>
      <h3>{label}</h3>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>{value}</p>
    </div>
  );
}
