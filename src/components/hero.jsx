export default function Hero({ site, stats }) {
  return (
    <section className="hero" id="hero">
      <p className="hero-eyebrow">
        Est. {site.founded} · Sulaymaniyah, Iraq
      </p>

      <h1>
        Music 
        <span> Land</span><br />
        
      </h1>
      <tb />
      <pre className="hero-desc">{site.tagline}</pre>

      <div className="hero-stats">
        {stats.map((s, i) => (
          <div className="stat" key={i}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}