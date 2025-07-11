import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'; // ✅ Import routing components

import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Projectspage from './components/Projectspage';
import Education from './components/Education';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';

const color = "teal";

function App() {
  return (
    <>
      <Nav color={color} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header color={color} />
              <About color={color} />
              <Skills color={color} />
              <Experience color={color} />
              <Projects color={color} />
              <Projectspage color={color} />
              <Education color={color} />
              <Publications color={color} />
              <Contact color={color} />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header color={color} />
              <About color={color} />
              <Skills color={color} />
              <Experience color={color} />
              <Projects color={color} />
              <Projectspage color={color} />
              <Education color={color} />
              <Publications color={color} />
              <Contact color={color} />
            </>
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
