import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Skills.css";
import reactIcon from "../../assets/icons/react.svg";
import htmlIcon from "../../assets/icons/html.svg";
import cssIcon from "../../assets/icons/css.svg";
import jsIcon from "../../assets/icons/javascript.svg";
import tailwindIcon from "../../assets/icons/tailwind.svg";
import bootstrapIcon from "../../assets/icons/bootstrap.svg";
import nodeIcon from "../../assets/icons/node.svg";
import expressIcon from "../../assets/icons/express.svg";
import mongoIcon from "../../assets/icons/mongodb.svg";
import mysqlIcon from "../../assets/icons/mysql.svg";
import javaIcon from "../../assets/icons/java.svg";
import jwtIcon from "../../assets/icons/jwt.svg";
import gitIcon from "../../assets/icons/git.svg";
import githubIcon from "../../assets/icons/github.svg";
import restIcon from "../../assets/icons/rest.svg";
import socketIcon from "../../assets/icons/socket.svg";

/* Register ScrollTrigger once at module load (harmless, avoids repeated registration) */
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    // If viewport is small, show immediately to avoid IntersectionObserver reliability issues on mobile
    const isSmallViewport = typeof window !== "undefined" && window.innerWidth <= 768;
    if (isSmallViewport) {
      setVisible(true);
    }

    // Create observer only for larger viewports (so mobile remains visible immediately)
    let observer;
    if (!isSmallViewport && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        },
        {
          threshold: 0.05,
          rootMargin: "0px 0px -20% 0px"
        }
      );

      if (sectionRef.current) observer.observe(sectionRef.current);
    }

    // Capture cards at setup time and store listeners for cleanup
    const cards = cardsRef.current ? Array.from(cardsRef.current) : [];
    const listeners = [];

    const ctx = gsap.context(() => {
      // Use selector scoped to sectionRef for safety
      const q = gsap.utils.selector(sectionRef);

      // Title animation with 3D effect
      if (titleRef.current && sectionRef.current) {
        gsap.from(titleRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            end: "top 60%",
            toggleActions: "play none none reverse",
            markers: false,
          },
          y: 80,
          opacity: 0,
          rotationX: -20,
          scale: 0.9,
          duration: 1.2,
          ease: "back.out(1.7)",
        });
      }

      // Enhanced card animations with 3D effects
      cards.forEach((card, index) => {
        if (!card) return;

        // Card entry animation
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 60%",
            toggleActions: "play none none reverse",
            markers: false,
          },
          y: 80,
          opacity: 0,
          rotationY: index === 0 ? -15 : index === 1 ? 15 : 0,
          rotationX: 10,
          scale: 0.85,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
        });

        // Create stable handlers so cleanup removes the same functions
        const enterHandler = () => {
          gsap.to(card, {
            scale: 1.02,
            boxShadow: "0 25px 50px rgba(102, 126, 234, 0.25)",
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const leaveHandler = () => {
          gsap.to(card, {
            scale: 1,
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            duration: 0.3,
            ease: "power2.out",
          });
        };

        card.addEventListener("mouseenter", enterHandler);
        card.addEventListener("mouseleave", leaveHandler);

        listeners.push({ card, enterHandler, leaveHandler });
      });

      // Staggered skill item animations with 3D rotation
      const skillRows = q(".skill-row") || [];

      skillRows.forEach((row, index) => {
        const parentCard = row.closest('.skills-card');
        const cardType = parentCard?.className.includes('left') ? 'left' :
          parentCard?.className.includes('right') ? 'right' : 'others';

        let startX = 0;
        let startY = 0;
        let rotationY = 0;

        switch (cardType) {
          case 'left':
            startX = -30;
            rotationY = -5;
            break;
          case 'right':
            startX = 30;
            rotationY = 5;
            break;
          case 'others':
            startY = 30;
            break;
          default:
            // fallback (no-op)
            break;
        }

        gsap.from(row, {
          scrollTrigger: {
            trigger: parentCard || row,
            start: "top 85%",
            end: "top 50%",
            toggleActions: "play none none reverse",
            markers: false,
          },
          x: startX,
          y: startY,
          opacity: 0,
          rotationY: rotationY,
          scale: 0.9,
          duration: 0.6,
          delay: (index % 6) * 0.08,
          ease: "back.out(1.4)",
        });
      });

      // Parallax effect for the entire section
      if (sectionRef.current) {
        gsap.fromTo(sectionRef.current,
          {
            y: 0
          },
          {
            y: -30,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
              markers: false,
            }
          }
        );
      }

      // NOTE: animating pseudo-elements (e.g. .skills-card::before) is not possible directly.
      // That block was intentionally removed because pseudo-elements are not DOM nodes.
      // If you want the gradient border to animate on scroll, I can:
      //  - add a small CSS variable used by the ::before in CSS and animate that variable here, or
      //  - animate a background on the parent element instead.
      //
      // I removed the invalid gsap.fromTo targeting a ::before selector to avoid runtime errors.

    }, sectionRef);

    return () => {
      if (observer && observer.disconnect) observer.disconnect();
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());

      // Remove the exact handlers we attached earlier
      listeners.forEach(({ card, enterHandler, leaveHandler }) => {
        if (card) {
          card.removeEventListener("mouseenter", enterHandler);
          card.removeEventListener("mouseleave", leaveHandler);
        }
      });
    };
  }, []);

  const frontendSkills = [
    { name: "React.js", icon: reactIcon },
    { name: "HTML5", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript (ES6+)", icon: jsIcon },
    { name: "Tailwind CSS", icon: tailwindIcon },
    { name: "Bootstrap", icon: bootstrapIcon }
  ];

  const backendSkills = [
    { name: "Node.js", icon: nodeIcon },
    { name: "Express.js", icon: expressIcon },
    { name: "MongoDB", icon: mongoIcon },
    { name: "MySQL", icon: mysqlIcon },
    { name: "Java (Spring Boot)", icon: javaIcon },
    { name: "JWT • Authentication & Security", icon: jwtIcon }
  ];

  const othersSkills = [
    { name: "Git", icon: gitIcon },
    { name: "GitHub", icon: githubIcon },
    { name: "RESTful APIs", icon: restIcon },
    { name: "Socket.io", icon: socketIcon }
  ];

  const renderSkill = (skill) => (
    <li key={skill.name} className="skill-row" title={skill.name}>
      {skill.icon && (
        /* decorative icon: alt empty and aria-hidden */
        <img src={skill.icon} alt="" className="skill-icon" aria-hidden="true" />
      )}
      <div className="skill-meta">
        <span className="skill-name">{skill.name}</span>
      </div>
    </li>
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`skills-section portfolio-skills ${visible ? "show" : ""}`}
    >
      <h2 ref={titleRef} className="skills-title">Skills</h2>

      <div className="skills-container">
        <div
          ref={el => cardsRef.current[0] = el}
          className="skills-card left"
          aria-labelledby="frontend-heading"
        >
          <h3 id="frontend-heading">Frontend</h3>
          <ul>
            {frontendSkills.map(renderSkill)}
          </ul>
        </div>

        <div
          ref={el => cardsRef.current[1] = el}
          className="skills-card right"
          aria-labelledby="backend-heading"
        >
          <h3 id="backend-heading">Backend</h3>
          <ul>
            {backendSkills.map(renderSkill)}
          </ul>
        </div>

        <div
          ref={el => cardsRef.current[2] = el}
          className="skills-card others"
          aria-labelledby="others-heading"
        >
          <h3 id="others-heading">Others</h3>
          <ul>
            {othersSkills.map(renderSkill)}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
