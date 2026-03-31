export default function About({ site }) {
  return (
    <section id="about">
      <h2 className="section-title">About</h2>

      <p>{site.description}</p>
    </section>
  );
}