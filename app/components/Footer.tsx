import Toolbar from "@mui/material/Toolbar";

export default function Footer() {
  return (
    <Toolbar
      style={{
        justifyContent: "space-between",
        height: "10vh",
        position: "fixed",
        bottom: "0",
        width: "100%",
        backgroundColor: "#1976D2",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        boxSizing: "border-box",
      }}
    >
      <p>© Travel Blog. Inc</p>

      <ul
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li style={{ cursor: "pointer" }}>Home</li>
        <li style={{ cursor: "pointer" }}>Privacy</li>
        <li style={{ cursor: "pointer" }}>Help Center</li>
        <li style={{ cursor: "pointer" }}>Terms Of Use</li>
        <li style={{ cursor: "pointer" }}>Contact Us</li>
      </ul>
    </Toolbar>
  );
}
