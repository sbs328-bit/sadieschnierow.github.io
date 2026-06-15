export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <div style={{ display: "flex", flexDirection: "row", gap: "10px", justifyContent: "center" }}>
        <a href="https://www.instagram.com/sadiebeacakes/" ><img style={{ width: "20px" }} src="images/insta.png" alt="Instagram" /></a>
        <a href="https://www.linkedin.com/in/sadie-schnierow/" ><img style={{ width: "20px" }} src="images/linkedin.png" alt="LinkedIn" /></a>
        </div>
        <p>sbs328@cornell.edu</p>
        <p>© 2026 Sadie Schnierow</p>
      </div>
    </footer>
  )
}
