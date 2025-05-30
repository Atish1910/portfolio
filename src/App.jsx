import { Route, Routes } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        {/* Example routes */}
        <Route path="/overview" element={<div>Overview</div>} />
        <Route path="/about-me" element={<div>About Me</div>} />
        <Route path="/tech-stack" element={<div>Tech Stack</div>} />
        <Route path="/projects" element={<div>Projects</div>} />
        <Route path="/experience" element={<div>Experience</div>} />
        <Route path="/education" element={<div>Education</div>} />
      </Routes>
      <section className="bg-orangeGradient hero">
        <Hero></Hero>
        <Overview></Overview>
      </section>
    </>
  );
}

export default App;
