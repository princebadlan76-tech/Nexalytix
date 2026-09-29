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
          <h1 style={{ marginBottom: "20px", color: "#333" }}>Dashboard</h1>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "24px" }}>
            <StatCard title="Total Revenue" value="$24,500" />
            <StatCard title="Active Users" value="1,240" />
            <StatCard title="Total Orders" value="850" />
          </div>

          <RecentProjects />
        </main>
      </div>
    </div>
  );
}

