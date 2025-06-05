import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import About from "./components/About";
import Technical from "./components/Technical";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import cv from "./assets/img/hero/Ashish_kamble_resume_06_2025.pdf";

function App() {
  return (
    <>
      <Navbar />
      <Hero cv={cv} />
      <Overview cv={cv} />
      <About cv={cv} />
      <Technical />
      <Projects />
      <Experience />
    </>
  );
}

export default App;
