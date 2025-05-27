// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Navigation from './Components/Navigation'
// import HeroSection from './Components/Hero'
// import About from './Components/About'
// import Skills from './Components/Skills'
// //import { team } from './Data/DATA'
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// function App() {

//   return (
//   <div>
//     <Router>
//        <Navigation/>
//        <Routes>
//         <Route path="/about" element={<About />} />
//         <Route path="/skills" element={<Skills />} />
//         {/* <Route path="/experience" element={<Experience />} />
//         <Route path="/education" element={<Education />} />
//         <Route path="/resume" element={<Resume />} /> */}
//       </Routes>
//     </Router>
   
//    <HeroSection/>
   
//   </div>
  

   
//   )
// }

// export default App


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navigation from './Components/Navigation';
// import About from './Components/About';
// import Skills from './Components/Skills';
// import Experience from './Components/Experience';
// //import Education from './Components/Education';

// import './App.css';

// // 👇 This is your home page, showing Hero + About
// function HomePage() {
//   return (
//     <>
//       {/* Optional: Add HeroSection here if you have one */}
//       <section id="about">
//         <About />
//       </section>
//     </>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <Navigation />

//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/experience" element={<Experience />} />
//         {/* <Route path="/education" element={<Education />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import Navigation from './Components/Navigation';
import About from './Components/About';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Education from './Components/Education';
import Projects from './Components/Projects';
import './App.css'; // for styling and smooth scrolling

function App() {
  return (
    <div>
      <Navigation />

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}

export default App;

