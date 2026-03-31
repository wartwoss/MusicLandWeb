export default function Contact({ site }) {
  return (
    <section id="contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact-item">
        <strong>Address:</strong> {site.address}
      </div>
      <div className="contact-item">
        <strong>Phone:</strong> {site.phone}
      </div>
      <div className="contact-item">
        <strong>Email:</strong> {site.email}
      </div>
    </section>
  );
}