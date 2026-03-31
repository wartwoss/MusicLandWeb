export default function Footer({ site }) {
  return (
    <footer>
      <span className="footer-name">{site.name}</span>
      <span className="footer-copy">
        © {new Date().getFullYear()} {site.name}
      </span>
    </footer>
  );
}