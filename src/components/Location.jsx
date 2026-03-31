export default function Location() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Our Location</h2>

        <div className="location-wrapper">
          <div className="location-info">
            <h3>MusicLand Warehouse</h3>
            <p>As Sulaymaniyah, Iraq</p>
            <p>Industrial Zone – Street 12</p>
          </div>

          <div className="location-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d615.7291564477315!2d45.4649630605985!3d35.56485349117509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2siq!4v1774968951584!5m2!1sen!2siq"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}