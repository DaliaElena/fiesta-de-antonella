import { useEffect, useState } from "react";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";
import "./App.css";

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Sección Header */}
      <section className="section-header">
        <div className="shape-container-header">
          <img
            src="/images/organic1.png"
            alt="Shape 1"
            className="shape shape-header"
            style={{ transform: `translateY(${scrollY * 0.2}px)` }}
          />
        </div>
        <Header />
      </section>

      {/* Sección Body */}
      <section className="section">
        <div className="shape-container">
          <img
            src="/images/organic2.png"
            alt="Shape 2"
            className="shape shape-body-1a"
            style={{ transform: `translateY(${scrollY * -0.15}px)` }}
          />
        </div>
        <div className="shape-container">
          <img
            src="/images/organic2.png"
            alt="Shape 2"
            className="shape shape-body-1b"
            style={{ transform: `translateY(${scrollY * -0.15}px)` }}
          />
        </div>
        <Body />
        <div className="shape-container">
          <img
            src="/images/organic1.png"
            alt="Shape 2"
            className="shape shape-body-2"
            style={{ transform: `translateY(${scrollY * -0.15}px)` }}
          />
        </div>
      </section>

      {/* Sección Footer */}
      <section className="section">
        <div className="shape-container">
          <img
            src="/images/organic1.png"
            alt="Organic 1"
            className="shape shape-footer"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
        </div>
        <Footer />
      </section>
    </div>
  );
}

export default App;
