import React, { useState } from 'react';
import "./Nav.css";
import { Link } from "react-scroll";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="Nav__root" aria-label="Main navigation">
      <h1 className="Nav__title">PORTFOLIO</h1>

      {/* Hamburger icon */}
      <button
        className={`Nav__hamburger hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-expanded={menuOpen}
        aria-controls="main-nav-list"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <div />
        <div />
        <div />
      </button>

      <ul id="main-nav-list" className={menuOpen ? "open" : ""}>
        <li>
          <Link to="home" smooth duration={500} activeClass="nav-active" spy onClick={() => setMenuOpen(false)}>Home</Link>
        </li>
        <li>
          <Link to="about-section" smooth duration={500} activeClass="nav-active" spy onClick={() => setMenuOpen(false)}>About</Link>
        </li>
        <li>
          <Link to="skills" smooth duration={500} activeClass="nav-active" spy onClick={() => setMenuOpen(false)}>Skills</Link>
        </li>
        <li>
          <Link to="projects" smooth duration={500} activeClass="nav-active" spy onClick={() => setMenuOpen(false)}>Projects</Link>
        </li>
        <li>
          <Link to="contact-section" smooth duration={500} activeClass="nav-active" spy onClick={() => setMenuOpen(false)}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
