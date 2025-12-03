import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div style={{
      display: "grid",
      gap: "20px",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      padding: "20px"
    }}>
      <StatCard label="Users" value="150" />
      <StatCard label="Sales" value="320" />
      <StatCard label="Visits" value="1.2K" />
    </div>
  );
}
