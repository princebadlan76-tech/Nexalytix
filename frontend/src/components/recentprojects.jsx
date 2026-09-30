export default function RecentProjects() {
  const datasetLogs = [
    { id: 1, file: "q3_sales_raw.csv", rows: "45,210", status: "Cleaned & Processed", date: "Today, 14:20" },
    { id: 2, file: "customer_churn_data.xlsx", rows: "12,800", status: "Processing", date: "Today, 11:05" },
    { id: 3, file: "inventory_log_v2.csv", rows: "104,000", status: "Completed", date: "Yesterday" }
  ];

  return (
    <div style={{
      backgroundColor: "#ffffff",
      borderRadius: "10px",
      border: "1px solid #e2e8f0",
      padding: "24px",
      boxShadow: "0 1px 2px rgba(0,0,0,0.03)"
    }}>
      <h3 style={{ margin: "0 0 16px 0", fontSize: "1.1rem", color: "#0f172a", fontWeight: "600" }}>
        Recent Analysis Jobs
      </h3>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {datasetLogs.map((log) => (
          <div key={log.id} style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 16px",
            borderRadius: "8px",
            backgroundColor: "#f8fafc",
            border: "1px solid #f1f5f9"
          }}>
            <div>
              <div style={{ fontWeight: "600", fontSize: "0.95rem", color: "#1e293b" }}>{log.file}</div>
              <div style={{ fontSize: "0.8rem", color: "#64748b", marginTop: "2px" }}>{log.rows} rows • {log.date}</div>
            </div>
            <span style={{
              fontSize: "0.8rem",
              fontWeight: "600",
              padding: "4px 10px",
              borderRadius: "20px",
              backgroundColor: log.status === "Processing" ? "#fef3c7" : "#dcfce7",
              color: log.status === "Processing" ? "#d97706" : "#166534"
            }}>
              {log.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
