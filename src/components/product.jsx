export default function Products({ products }) {
  return (
    <section id="products">
      <h2 className="section-title">Our Products</h2>

      <div className="cards-grid">
        {products.map((p, i) => (
          <div className="card" key={i}>
            <div className="card-image">
              {p.image ? (
                <img src={p.image} alt={p.name} />
              ) : (
                <span className="card-image-icon">{p.icon}</span>
              )}
            </div>

            <div className="card-body">
              <div className="card-title">{p.name}</div>
              <div className="card-sub">{p.brands}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}