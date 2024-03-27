import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <h1>Hem</h1>
      <div style={{ marginBottom: "15vh" }}>
        {/* Lägg till en tom div med höjden av fotern för att undvika överlappning */}
      </div>
      <Footer />
    </>
  );
}
