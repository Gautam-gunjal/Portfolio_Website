import React, { useState } from 'react'
import "./Nav.css";
import { Link } from "react-scroll";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <h1>PORTFOLIO</h1>

            {/* Hamburger icon */}
            <div
                className={`hamburger ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>

            <ul className={menuOpen ? "open" : ""}>
                <Link to="home" smooth={true} duration={500} activeClass='active' spy={true} onClick={() => setMenuOpen(false)}><li>Home</li></Link>
                <Link to="about-section" smooth={true} duration={500} activeClass='active' spy={true} onClick={() => setMenuOpen(false)}><li>About</li></Link>
                <Link to="projects" smooth={true} duration={500} activeClass='active' spy={true} onClick={() => setMenuOpen(false)}><li>Projects</li></Link>
                <Link to="contact-section" smooth={true} duration={500} activeClass='active' spy={true} onClick={() => setMenuOpen(false)}><li>Contact</li></Link>
            </ul>
        </nav>
    )
}

export default Nav;
