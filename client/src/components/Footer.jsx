export default function Footer() {
  return (
    <footer className="site-footer">
      <div styles={{ display: "flex", flexDirection: "row", gap: "5px" }}>
        <a><img src="logo.svg" alt="Instagram" /></a>
        <a><img src="logo.svg" alt="LinkedIn" /></a>
        <a><img src="logo.svg" alt="Other" /></a>
        <p>© 2026 Sadie Schnierow</p>
      </div>
    </footer>
  )
}
