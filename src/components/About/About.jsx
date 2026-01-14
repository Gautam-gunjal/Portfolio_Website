import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCertificate, FaLaptopCode } from "react-icons/fa";
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((el, index) => {
      if (!el) return;
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        x: index % 2 === 0 ? -100 : 100, // keep the same entrance direction behavior
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    });
  }, []);

  return (
    <div className="about-section" ref={sectionRef}>
      <h1 className="about-title"> About Me</h1>

      <div className="two-column-timeline">
        {/* Right column - Experience */}
        <div className="column column-right">
          <h2 className="column-title">EXPERIENCE</h2>

          <div className="column-inner">
            {/* Existing Internship (experience) */}
            <div
              className="timeline-card right"
              ref={(el) => (cardsRef.current[1] = el)}
            >
              <div className="content">
                <h2><FaLaptopCode className="icon" /> Internship</h2>
                <p className="subtitle">Professional Development Journey</p>
                <h3>Java Full Stack Development Intern</h3>
                <p className="location">Profound Edutech, Pune | Jul 2024 – Feb 2025</p>
                <p>
                  • Built full stack apps with Java, Spring Boot, React.js, MySQL, MongoDB.
                  <br />
                  • Contributed to end-to-end development: backend APIs + responsive UI.
                </p>
              </div>
            </div>

            {/* NEW: Zidio Full-Stack Internship (experience) */}
            <div
              className="timeline-card right"
              ref={(el) => (cardsRef.current[3] = el)}
            >
              <div className="content">
                <h2><FaLaptopCode className="icon" /> Internship</h2>
                <p className="subtitle">Professional Development</p>
                <h3>Full-Stack Web Developer Intern</h3>
                <p className="location">Zidio Development | Sep 2025 – Dec 2025</p>
                <p>
                 • Completed the internship in the role of Web Development at Zidio Development.
                  <br />
                  • Worked on full-stack tasks, applying modern frontend and backend practices.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Left column - Certification */}
        <div className="column column-left">
          <h2 className="column-title">CERTIFICATIONS</h2>

          <div className="column-inner">
            {/* Existing Certification */}
            <div
              className="timeline-card left"
              ref={(el) => (cardsRef.current[0] = el)}
            >
              <div className="content">
                <h2><FaCertificate className="icon" /> Certification</h2>
                <p className="subtitle">Professional Qualifications</p>
                <h3>Master Diploma in Full Stack Java Development</h3>
                <p className="location">Profound Edutech, Pune</p>
                <p>
                  Gained in-depth expertise in Java backend, frontend frameworks,
                  and full stack application deployment.
                </p>
              </div>
            </div>

            {/* Zidio training certification (already present) */}
            <div
              className="timeline-card left"
              ref={(el) => (cardsRef.current[2] = el)}
            >
              <div className="content">
                <h2><FaCertificate className="icon" /> Certification</h2>
                <p className="subtitle">Professional Qualifications</p>
                <h3>Web Development Training</h3>
                <p className="location">Zidio Development | 01 Sep 2025 – 01 Dec 2025</p>
                <p>
                  Completed Web Development training at Zidio Development (01 Sep 2025 – 01 Dec 2025).
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
