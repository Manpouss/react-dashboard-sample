import StatCard from "../components/StatCard";
import { stats } from "../data/stats";
import DataTable from "../components/DataTable";
import { items } from "../data/items";
import { useState } from "react";


export default function Dashboard() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div style={{ padding: "20px" }}>
      {/* KPI Cards */}
      <div style={{
        display: "grid",
        gap: "20px",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        padding: "20px"
      }}>

        {stats.map((item) => (
          <StatCard key={item.label} label={item.label} value={item.value} />
        ))}
      </div>

      {/* Filters */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          marginBottom: "12px",
        }}
      >
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "8px", flex: 1 }}
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          style={{ padding: "8px" }}
        >
          <option value="All">All</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </div>

      {/* Table */}
      <h2 style={{ margin: "0 0 12px 0" }}>Latest items</h2>
      <DataTable rows={filteredItems} />
    </div>
  );
}
