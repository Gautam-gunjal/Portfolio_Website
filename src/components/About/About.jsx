import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCertificate, FaLaptopCode, FaTools } from "react-icons/fa";
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((el, index) => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          toggleActions: "play none none reverse"
        },
        x: index % 2 === 0 ? -100 : 100, // alternate left/right
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });
    });
  }, []);

  return (
    <div className="about-section" ref={sectionRef}>
      <h1 className="about-title"> About Me</h1>

      <div className="timeline-container">
        {/* Certifications */}
        <div
          className="timeline-card left"
          ref={(el) => (cardsRef.current[0] = el)}
        >
          <div className="content">
            <h2><FaCertificate className="icon" /> Certifications</h2>
            <p className="subtitle">Professional Qualifications</p>
            <h3>Master Diploma in Full Stack Java Development</h3>
            <p className="location">Profound Edutech, Pune</p>
            <p>
              Gained in-depth expertise in Java backend, frontend frameworks,
              and full stack application deployment.
            </p>
          </div>
        </div>

        {/* Internship */}
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
              <br></br>
              • Contributed to end-to-end development: backend APIs + responsive UI.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div
          className="timeline-card left"
          ref={(el) => (cardsRef.current[2] = el)}
        >
          <div className="content skills-card">
            <h2><FaTools className="icon" /> Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>Frontend</h3>
                <div className="skill-icons">
                  <span>🟧 HTML5</span>
                  <span>🟦 CSS3</span>
                  <span>⚛️ React</span>
                  <span>📜 JavaScript</span>
                  <span>🎨 Bootstrap</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Backend</h3>
                <div className="skill-icons">
                  <span>☕ Java</span>
                  <span>🛢️ JDBC</span>
                  <span>🍃 Hibernate</span>
                  <span>🌱Spring</span>
                  <span>🌱🚀 Spring Boot</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Database</h3>
                <div className="skill-icons">
                  <span>🍃 MongoDB</span>
                  <span>🐬 MySQL</span>
                </div>
              </div>
              <div className="skill-category">
                <h3>Full Stack</h3>
                  <div className='skill-icons'>
                      <span>🟩 MERN Stack</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
