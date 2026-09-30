export default function StatCard({ title, value }) {
  return (
    <div style={{
      backgroundColor: "#ffffff",
      padding: "20px 24px",
      borderRadius: "10px",
      border: "1px solid #e2e8f0",
      boxShadow: "0 1px 2px rgba(0,0,0,0.03)"
    }}>
      <h3 style={{ margin: 0, fontSize: "0.85rem", color: "#64748b", textTransform: "uppercase", letterSpacing: "0.5px" }}>
        {title}
      </h3>
      <p style={{ margin: "10px 0 0 0", fontSize: "1.6rem", fontWeight: "700", color: "#0f172a" }}>
        {value}
      </p>
    </div>
  );
}
