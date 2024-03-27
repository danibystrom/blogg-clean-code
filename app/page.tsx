import BlogFeed from "./components/BlogFeed";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <BlogFeed />
      <div style={{ marginBottom: "15vh" }}>
        {/* Lägg till en tom div med höjden av fotern för att undvika överlappning */}
      </div>
      <Footer />
    </>
  );
}
