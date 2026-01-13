import Header from "./header.jsx";  // Capital H
import Hero from "./Hero.jsx";      // Matches file exactly
import Services from "./Services.jsx";
import Portfolio from "./Portfolio.jsx";
import About from "./About.jsx";
import Resume from "./Contact.jsx";
import Footer from "./footer.jsx";
function App() {
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <Header />

      {/* Sections with IDs */}
      <section id="home" style={{ height: "80vh", paddingTop: "0px" }}>
        <Hero />
      </section>
      <section id="services" style={{ height: "80vh", paddingTop: "0px" ,backgroundColor: "#f9f9f9"}}>
        <Services />
      </section>
      <section id="portfolio" style={{ height: "150vh", paddingTop: "0px"}}>
        <Portfolio />
      </section>
      <section id="about" style={{ height: "110vh", paddingTop: "0px" ,backgroundColor: "#f9f9f9"}}>
        <About />
      </section>
      <section id="contact" style={{ height: "77vh", paddingTop: "0px"}}>
        <Resume />
      </section>
      <Footer />
      {/* Add more sections like About, Portfolio etc. with their IDs */}
    </div>
  );
}

export default App;
