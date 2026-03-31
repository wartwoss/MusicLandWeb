export default function Gallery({ gallery }) {
  return (
    <section id="gallery">
      <h2 className="section-title">Gallery</h2>

      <div className="gallery-grid">
        {gallery.map((g, i) => (
          <div className="gallery-card" key={i}>
            <div className="gallery-image">
              {g.image ? (
                <img src={g.image} alt={g.caption} />
              ) : (
                <span>📷</span>
              )}
            </div>
            <div className="gallery-caption">{g.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
}