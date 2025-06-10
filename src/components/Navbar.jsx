import React, { useEffect, useState } from "react";
import logo from "/assets/img/logo/logo.png";

const navItems = [
  { name: "Stats", id: "overview" },
  { name: "About Me", id: "about-me" },
  { name: "Technical Skills", id: "technical" },
  { name: "Projects", id: "projects" },
  { name: "Journey", id: "journey" },
  { name: "Wall", id: "wall" },
  { name: "Contact Me", id: "contact-me" },
];

const Navbar = () => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const visibleSections = new Map();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        let topSection = "";
        let maxRatio = 0;

        visibleSections.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            topSection = id;
          }
        });

        if (topSection) setActiveId(topSection);
      },
      {
        rootMargin: "-100px 0px -50% 0px", // adjust based on your navbar height
        threshold: [0.25, 0.5, 0.75],
      }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    const yOffset = -80; // adjust based on your navbar height
    const y =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-black sticky-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {navItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleLinkClick(e, item.id)}
                  className={`nav-link ${
                    activeId === item.id ? "text-warning fw-bold" : "text-white"
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <button className="btn c_btn rounded-pill px-4">Download CV</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
