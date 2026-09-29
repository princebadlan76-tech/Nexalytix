export default function StatCard({ title, value }) {
  return (
    <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
      <h3 style={{ margin: 0, fontSize: "0.9rem", color: "#64748b" }}>{title}</h3>
      <p style={{ margin: "8px 0 0 0", fontSize: "1.5rem", fontWeight: "bold", color: "#0f172a" }}>{value}</p>
    </div>
  );
}
