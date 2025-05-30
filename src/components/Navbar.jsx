import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo/logo.png";

const Navbar = () => {
  const navItems = [
    { name: "Overview", path: "/overview" },
    { name: "About Me", path: "/about-me" },
    { name: "Tech Stack", path: "/tech-stack" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Education", path: "/education" },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-black sticky-top shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/">
            <img src={logo} alt="" className="logo" />
          </NavLink>
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
                <li className="nav-item " key={item.name}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `nav-link text-white ${
                        isActive ? "active fw-semibold" : ""
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
              <button className="btn c_btn rounded-pill px-4">
                Download cv
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
