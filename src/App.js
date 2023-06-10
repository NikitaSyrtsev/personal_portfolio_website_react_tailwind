import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Contact from "./components/Contact";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Hero from "./components/Hero"

import {Layout} from "./components/Layout";
import {NotFoundPage} from "./components/NotFoundPage";

function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Hero />}/>
                  <Route path="home" element={<Hero />}/>
                  <Route path="services" element={<Services />}/>
                  <Route path="projects" element={<Portfolio />}/>
                  <Route path="contact" element={<Contact />}/>
              </Route>
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </>
  );
}

export default App;
