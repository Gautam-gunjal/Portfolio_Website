import './App.css';
import About from './components/About/About';
import Particles from "./components/ParticlesLogic/Particles";
import { Home } from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      {/* Global Particles Background */}
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />

      {/* App Content */}
      <Nav />
      <Home />
      <About />
      <Project />
      <Contact/>
    </>
  );
}

export default App;
