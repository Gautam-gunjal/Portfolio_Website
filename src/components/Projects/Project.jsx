import React, { useEffect, useRef } from "react";
import "./Projects.css";
import Card from "../Card/Card";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import a1 from "../../assets/AI-Code-Review.png.webp";
import r1 from "../../assets/images.jpg";
import c1 from "../../assets/DALL·E-2023-11-23-18.37.12-A-vector-art-landscape-image-depicting-the-concept-of-AI-in-gaming.-The-scene-includes-various-classic-game-pieces-such-as-chess-pieces-poker-cards-.png";
import e1 from "../../assets/Employee-Management-System.png";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const wrapperRefs = useRef([]);

  useEffect(() => {
    // keep exactly 4 refs
    wrapperRefs.current = wrapperRefs.current.slice(0, 4);

    const isSmall = window.matchMedia("(max-width: 760px)").matches;

    // Title: subtle fade + scale (no jank)
    gsap.fromTo(
      titleRef.current,
      { autoAlpha: 0, y: -18, scale: 0.995 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 88%",
          end: "bottom 40%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    const cards = gsap.utils.toArray(".card-wrapper");

    // initial state
    gsap.set(cards, {
      autoAlpha: 0,
      y: isSmall ? 22 : 60,
      scale: isSmall ? 0.995 : 0.986,
      rotationX: isSmall ? 0 : 6,
      transformOrigin: "center center",
    });

    // batch handles enter/leave/enterBack/leaveBack cleanly and efficiently
    ScrollTrigger.batch(cards, {
      interval: 0.08,
      start: "top 90%",
      end: "bottom 10%",
      onEnter: (batch) =>
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 0.72,
          ease: "power3.out",
          stagger: { each: 0.06 },
        }),
      onLeave: (batch) =>
        gsap.to(batch, {
          autoAlpha: 0,
          y: isSmall ? -22 : -48,
          scale: isSmall ? 0.995 : 0.986,
          rotationX: 6,
          duration: 0.55,
          ease: "power2.in",
          stagger: { each: 0.02 },
        }),
      onEnterBack: (batch) =>
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 0.66,
          ease: "power3.out",
          stagger: { each: 0.05 },
        }),
      onLeaveBack: (batch) =>
        gsap.to(batch, {
          autoAlpha: 0,
          y: isSmall ? 22 : 60,
          scale: isSmall ? 0.995 : 0.986,
          rotationX: 6,
          duration: 0.55,
          ease: "power2.in",
          stagger: { each: 0.02 },
        }),
    });

    // Desktop tilt (subtle) — attach handlers to each wrapper
    const handlers = [];
    if (!isSmall) {
      wrapperRefs.current.forEach((wrap) => {
        if (!wrap) return;
        const inner = wrap.querySelector(".card-inner");
        if (!inner) return;

        const onMove = (e) => {
          const rect = wrap.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width;
          const py = (e.clientY - rect.top) / rect.height;
          const rotY = (px - 0.5) * 10; // -5..5..10 degrees
          const rotX = -(py - 0.5) * 8; // -4..4..8 degrees
          gsap.to(inner, {
            rotationY: rotY,
            rotationX: rotX,
            scale: 1.018,
            duration: 0.45,
            ease: "power3.out",
            transformOrigin: "center center",
          });
        };
        const onLeave = () =>
          gsap.to(inner, { rotationY: 0, rotationX: 0, scale: 1, duration: 0.45, ease: "power3.out" });
        wrap.addEventListener("mousemove", onMove);
        wrap.addEventListener("mouseleave", onLeave);
        wrap.addEventListener("focusin", () => gsap.to(inner, { scale: 1.01, duration: 0.28 }));
        wrap.addEventListener("focusout", () => gsap.to(inner, { scale: 1, duration: 0.28 }));
        handlers.push({ wrap, onMove, onLeave });
      });
    }

    // cleanup
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      handlers.forEach(({ wrap, onMove, onLeave }) => {
        wrap.removeEventListener("mousemove", onMove);
        wrap.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} aria-labelledby="projects-heading">
      <h1 id="projects-heading" ref={titleRef}>
        Projects
      </h1>

      <div className="projects-grid-2x2">
        <div
          className="card-wrapper"
          ref={(el) => (wrapperRefs.current[0] = el)}
          tabIndex={0}
        >
          <div className="card-inner">
            <Card
              title="AI-Code-Reviewer"
              image={a1}
              description="• Engineered an AI-powered code review platform providing real-time feedback for improving code quality.  
           • Integrated Google Gemini API to perform intelligent code analysis and suggestions."
              technologies={["React.js", "Express.js", "Node.js", "GoogleGemini API"]}
              liveLink="https://github.com/Gautam-gunjal/Ai-CodeReviewer"
            />
          </div>
        </div>

        <div
          className="card-wrapper"
          ref={(el) => (wrapperRefs.current[1] = el)}
          tabIndex={0}
        >
          <div className="card-inner">
            <Card
              title="RealTime Device-Tracker"
              image={r1}
              description="• Built a real-time location tracking system with dynamic map updates.      
              • Optimized data transmission for low-latency streaming of device coordinates."
              technologies={["Express.js", "Socket.io", "Node.js", "Geolocation API"]}
              liveLink="https://github.com/Gautam-gunjal/Real-Time-Device-Tracker"
            />
          </div>
        </div>

        <div
          className="card-wrapper"
          ref={(el) => (wrapperRefs.current[2] = el)}
          tabIndex={0}
        >
          <div className="card-inner">
            <Card
              title="ChessGame"
              image={c1}
              description="• Designed a real-time multiplayer chess game with move validation and rule enforcement. 
               • Enabled seamless two-player interaction with live board updates and secure game sessions."
              technologies={["Node.js", "Express.js", "Socket.io", "Chess.js"]}
              liveLink="https://github.com/Gautam-gunjal/ChessGame"
            />
          </div>
        </div>

        <div
          className="card-wrapper"
          ref={(el) => (wrapperRefs.current[3] = el)}
          tabIndex={0}
        >
          <div className="card-inner">
            <Card
              title="Employee Management System"
              image={e1}
              description="• Developed a full-stack employee record management system using the MERN stack, enabling efficient CRUD operations."
              technologies={["MongoDB", "Express.js", "React.js", "Node.js"]}
              liveLink="https://github.com/Gautam-gunjal/Employee-Management-System"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
