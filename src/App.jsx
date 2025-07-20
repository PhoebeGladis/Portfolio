
import Navigation from './Components/Navigation';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Education from './Components/Education';
import './App.css'; // for styling and smooth scrolling
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resume from './Components/Resume';

function App() {
  return (
    <>
     <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/education" element={<Education/>} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resume" element={<Resume/>} />
    </Routes>
    
  </Router>

    </>
  );
  
}

export default App;

