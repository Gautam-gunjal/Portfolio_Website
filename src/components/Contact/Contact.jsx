import React, { useEffect, useRef } from 'react';
import "./Contact.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: -80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 40%",
            toggleActions: "play reverse play reverse", 
          },
        }
      );

      // Card animation
      gsap.fromTo(
        cardRef.current,
        { y: 80, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            end: "bottom 40%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="contact-section" ref={sectionRef}>
      <div className="section-header" ref={titleRef}>
        <h1 className="main-title">Contact</h1>
      </div>

      <div className="contact-card" ref={cardRef}>
        <h2 className="contact-title">Contact Me</h2>
        <p className="contact-subtitle">I’d love to hear from you!</p>

        <form className="contact-form" action="https://formspree.io/f/xrblwbeb" method='post'>
          <input 
            type="text" 
            name="username" 
            placeholder="Your Name" 
            required 
            className="contact-input"
          />
          <input 
            type="email" 
            name="email"  
            placeholder="Your Email" 
            required 
            className="contact-input"
          />
          <textarea 
            name="message" 
            placeholder="Message" 
            rows="4" 
            className="contact-textarea"
          ></textarea>
          <button type="submit" className="contact-button">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
