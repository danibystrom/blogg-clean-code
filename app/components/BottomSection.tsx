import Toolbar from "@mui/material/Toolbar";

{
  /* Följ konventioner - använd enhetligt namngivningskonvention för att enklare förstå koden  */
  /* Struktur ej enhetlig med "header"-benämningen och jag hade därför kunna benämnt denna som "Footer"  */
}
export default function BottomSection() {
  return (
    <Toolbar
      style={{
        justifyContent: "space-between",
        height: "10vh",
        bottom: "0",
        width: "100%",
        backgroundColor: "#1976D2",
        color: "#fff",
        display: "flex",
        alignItems: "center",
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
        {/* Undivk så mycket inline styling - hade kunnat brutits ut mot separat css-fil */}

        <li style={{ cursor: "pointer" }}>Home</li>
        <li style={{ cursor: "pointer" }}>Privacy</li>
        <li style={{ cursor: "pointer" }}>Help Center</li>
        <li style={{ cursor: "pointer" }}>Terms Of Use</li>
        <li style={{ cursor: "pointer" }}>Contact Us</li>
      </ul>
    </Toolbar>
  );
}
