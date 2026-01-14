import './App.css';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Aurora from './components/Aurora_Logic/Aurora';
import { Home } from './components/Home/Home';
import Nav from './components/Nav/Nav';
import Project from './components/Projects/Project';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <div className='aurora-container'>
        <Aurora
          color1="#1410ea"
          color2="#298ac7"
          color3="#0fc9cc"
        />
      </div>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />

    </>
  );
}

export default App;
