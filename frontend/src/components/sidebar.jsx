export default function Sidebar() {
  return (
    <aside style={{ width: "240px", backgroundColor: "#1e293b", color: "#fff", padding: "20px" }}>
      <h2 style={{ fontSize: "1.2rem", marginBottom: "30px" }}>Admin Panel</h2>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ padding: "10px 0", cursor: "pointer" }}>Dashboard</li>
          <li style={{ padding: "10px 0", cursor: "pointer", color: "#94a3b8" }}>Projects</li>
          <li style={{ padding: "10px 0", cursor: "pointer", color: "#94a3b8" }}>Settings</li>
        </ul>
      </nav>
    </aside>
  );
}
