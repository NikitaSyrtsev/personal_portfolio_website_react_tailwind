import React from 'react';

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
