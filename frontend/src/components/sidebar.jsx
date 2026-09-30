export default function Sidebar() {
  return (
    <aside style={{
      width: "240px",
      backgroundColor: "#0f172a",
      color: "#f8fafc",
      padding: "24px 16px",
      display: "flex",
      flexDirection: "column",
      boxSizing: "border-box"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "36px", paddingLeft: "8px" }}>
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", backgroundColor: "#38bdf8" }} />
        <h2 style={{ fontSize: "1.1rem", margin: 0, fontWeight: "700", letterSpacing: "0.5px" }}>AutoAnalyzer</h2>
      </div>

      <nav>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "6px" }}>
          <li style={{ padding: "10px 12px", borderRadius: "6px", backgroundColor: "#1e293b", fontWeight: "600", cursor: "pointer", color: "#38bdf8" }}>
            📊 Dashboard
          </li>
          <li style={{ padding: "10px 12px", borderRadius: "6px", color: "#94a3b8", cursor: "pointer" }}>
            📁 Data Sources
          </li>
          <li style={{ padding: "10px 12px", borderRadius: "6px", color: "#94a3b8", cursor: "pointer" }}>
            📈 Insights & Charts
          </li>
          <li style={{ padding: "10px 12px", borderRadius: "6px", color: "#94a3b8", cursor: "pointer" }}>
            ⚙️ Settings
          </li>
        </ul>
      </nav>
    </aside>
  );
}
