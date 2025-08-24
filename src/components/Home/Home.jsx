import React, { useEffect, useRef } from 'react';
import "./Home.css";
import man from "../../assets/360_F_1166587468_ZopHWl13KwyUV9w2fQiQxO2M29gkDKDB-removebg-preview.png";
import TypingEffect from "react-typing-effect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const homeRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const line4Ref = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" }
    });

    tl.from(homeRef.current, {
      opacity: 0,
      duration: 0.5
    })
      .from(leftRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2
      })
      .from([line1Ref.current, line2Ref.current, line3Ref.current, line4Ref.current], {
        y: 50,
        opacity: 0,
        stagger: 0.3,
        ease: "back.out(1.7)",
        duration: 0.8
      }, "-=0.8")
      .from(rightRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2
      }, "-=1");

    // Floating image animation
    gsap.to(imgRef.current, {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    // Background animation
    gsap.to(homeRef.current, {
      backgroundPosition: '100% 50%',
      scrollTrigger: {
        trigger: homeRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });
  }, []);

  return (
    <div id="home" ref={homeRef}>
      <div className='lefthome' ref={leftRef}>
        <div className='L_homedetails'>
          <div className='line1' ref={line1Ref}>
            <span className="wave">👋</span> Hi, I'm
          </div>
          <div className='line2' ref={line2Ref}>GAUTAM GUNJAL</div>
          <div className='line3' ref={line3Ref}>Passionate About</div>
          <div className='line4' ref={line4Ref}>
            <TypingEffect
              text={["WEB DEVELOPMENT", "FRONTEND DEVELOPMENT","FULLSTACK DEVELOPMENT"]}
              speed={80}
              typingDelay={500}
              eraseSpeed={70}
              eraseDelay={1500}
              cursor='|'
            />
          </div>
          <p className='description'>
            I specialize in building responsive, user-friendly websites
            using modern technologies like React.js, Node.js, and Express.          </p>
          <button className="cta-button" onClick={() => window.open("https://drive.google.com/file/d/1lAcyCtk65E3BCANOmLfqIS8_7BPkkso8/view?usp=drivesdk", "_blank", "noopener noreferrer")}>
            Check Resume
          </button>
        </div>
      </div>
      <div className='righthome' ref={rightRef}>
        <div className="image-container">
          <img ref={imgRef} src={man} alt="Developer illustration" />
          <div className="glow-effect"></div>
        </div>
      </div>
    </div>
  );
};
