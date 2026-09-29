export default function RecentProjects() {
  const projects = [
    { id: 1, name: "E-Commerce App", status: "Completed" },
    { id: 2, name: "Portfolio Website", status: "In Progress" },
    { id: 3, name: "Dashboard Redesign", status: "Pending" },
  ];

  return (
    <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
      <h3 style={{ margin: "0 0 16px 0", color: "#0f172a" }}>Recent Projects</h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {projects.map((project) => (
          <li key={project.id} style={{ display: "flex", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid #f1f5f9" }}>
            <span>{project.name}</span>
            <span style={{ fontSize: "0.85rem", color: "#64748b" }}>{project.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
