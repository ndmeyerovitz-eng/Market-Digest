export default function Home() {
  const now = new Date().toISOString();
  return (
    <main style={{ padding: 24, fontFamily: "Arial" }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>Market Digest</h1>
      <div style={{ opacity: 0.7, marginBottom: 18 }}>As of: {now}</div>

      <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16, marginBottom: 16 }}>
        <h2 style={{ fontSize: 18, marginBottom: 10 }}>Indexes</h2>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
          <b>SPY</b><span>$0.00 (0.00%)</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <b>QQQ</b><span>$0.00 (0.00%)</span>
        </div>
      </div>

      <div style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16 }}>
        <h2 style={{ fontSize: 18, marginBottom: 10 }}>Latest Summary</h2>
        <p style={{ margin: 0 }}>
          This is the placeholder. Next we will connect real market data and generate an AI summary.
        </p>
      </div>
    </main>
  );
}
