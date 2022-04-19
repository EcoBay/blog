import { useEffect, useRef } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import { ReactComponent as Tear } from "./images/tear.svg";

function App() {
  const sectionRef = useRef([]);
  const section = (i) => (e) => (sectionRef.current[i] = e);

  useEffect(() => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }, []);

  return (
    <div className="App">
      <header>
        <NavBar linkRefs={sectionRef} />
      </header>
      <main>
        <About ref={section(0)} />
        <Blog ref={section(1)} />
      </main>
      <footer>
        <Footer />
      </footer>
      <div className="contact">
        <Tear />
        <Contact />
      </div>
    </div>
  );
}

export default App;
