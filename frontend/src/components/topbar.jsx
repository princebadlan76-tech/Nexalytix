export default function Topbar() {
  return (
    <header style={{
      height: "64px",
      backgroundColor: "#ffffff",
      borderBottom: "1px solid #e2e8f0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 32px",
      boxSizing: "border-box"
    }}>
      <span style={{ fontSize: "0.9rem", color: "#64748b", fontWeight: "500" }}>
        Workspace / Auto Data Pipeline
      </span>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontSize: "0.85rem", color: "#334155", fontWeight: "600" }}>Admin User</span>
        <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#e2e8f0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.9rem", color: "#475569", fontWeight: "bold" }}>
          AU
        </div>
      </div>
    </header>
  );
}
