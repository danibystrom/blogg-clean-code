import Toolbar from "@mui/material/Toolbar";

export default function Footer() {
  return (
    <Toolbar
      style={{
        justifyContent: "space-between",
        height: "15vh",
        position: "fixed",
        bottom: "0",
        width: "100%",
        backgroundColor: "#fff",
        color: "#000",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        boxSizing: "border-box",
      }}
    >
      <p>© Blog. Inc</p>

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
