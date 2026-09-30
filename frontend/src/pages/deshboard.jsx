import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import StatCard from "../components/StatCard";
import RecentProjects from "../components/RecentProjects";

export default function Dashboard() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8fafc", fontFamily: "sans-serif" }}>
      <Sidebar />
      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Topbar />
        <main style={{ padding: "32px", flex: 1, maxWidth: "1200px", width: "100%", margin: "0 auto", boxSizing: "border-box" }}>
          
          {/* Header */}
          <div style={{ marginBottom: "28px" }}>
            <h1 style={{ margin: 0, fontSize: "1.75rem", fontWeight: "700", color: "#0f172a" }}>
              Automated Data Analysis Engine
            </h1>
            <p style={{ margin: "6px 0 0 0", color: "#64748b", fontSize: "0.95rem" }}>
              Upload dataset files to automatically clean, inspect, and generate analysis reports.
            </p>
          </div>

          {/* Upload Dropzone Placeholder */}
          <div style={{
            backgroundColor: "#ffffff",
            border: "2px dashed #cbd5e1",
            borderRadius: "12px",
            padding: "40px 20px",
            textAlign: "center",
            marginBottom: "32px",
            cursor: "pointer"
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "8px" }}>📊</div>
            <p style={{ margin: 0, color: "#1e293b", fontWeight: "600", fontSize: "1rem" }}>
              Drag & Drop CSV or Excel files here
            </p>
            <span style={{ fontSize: "0.85rem", color: "#94a3b8" }}>
              Supports .csv, .xlsx up to 50MB
            </span>
          </div>

          {/* Key Metrics */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px", marginBottom: "32px" }}>
            <StatCard title="Total Datasets Processed" value="1,248" />
            <StatCard title="Avg Clean Speed" value="1.2s / MB" />
            <StatCard title="Data Health Index" value="99.4%" />
          </div>

          {/* Recent Files Table */}
          <RecentProjects />

        </main>
      </div>
    </div>
  );
}
