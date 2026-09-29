import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";
import RecentProjects from "../components/RecentProjects";

export default function Dashboard() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f4f6f8" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Topbar />
        <main style={{ padding: "24px", flex: 1 }}>
          <h1 style={{ marginBottom: "20px", color: "#333", fontSize: "1.5rem" }}>
            Automated Data Analysis Platform
          </h1>

          {/* Upload Section */}
          <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", border: "2px dashed #cbd5e1", textAlign: "center", marginBottom: "24px" }}>
            <p style={{ margin: 0, color: "#64748b", fontWeight: "500" }}>
              Drag and drop your CSV/Excel file here to run automated analysis
            </p>
          </div>

          {/* Automated Metrics Section */}
          <div style={{ display: "flex", gap: "16px", marginBottom: "24px" }}>
            <StatCard title="Processed Records" value="128,450" />
            <StatCard title="Key Pattern Detected" value="Seasonal Spike" />
            <StatCard title="Data Health Score" value="98%" />
          </div>

          {/* Recent Files Section */}
          <RecentProjects />
        </main>
      </div>
    </div>
  );
}
