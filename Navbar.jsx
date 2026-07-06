function Navbar() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "20px 50px",
        background: "rgba(11, 17, 32, 0.8)",
        backdropFilter: "blur(10px)",
        color: "white",
        zIndex: 1000,
      }}
    >
      <h2 style={{ color: "#38BDF8" }}>MD Asiya Benazeer</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="#home" style={{ color: "white", textDecoration: "none" }}>
          Home
        </a>
        <a href="#about" style={{ color: "white", textDecoration: "none" }}>
          About
        </a>
        <a href="#skills" style={{ color: "white", textDecoration: "none" }}>
          Skills
        </a>
        <a href="#projects" style={{ color: "white", textDecoration: "none" }}>
          Projects
        </a>
      </div>
    </nav>
  );
}

export default Navbar;