import React, {useEffect} from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';

import Contact from "./components/Contact";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Hero from "./components/Hero"

import {Layout} from "./components/Layout";
import {NotFoundPage} from "./components/NotFoundPage";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        const scrollOptions = {
            top: 0,
            left: 0,
            behavior: "smooth"
        };
        window.scrollTo(scrollOptions);
    }, [pathname]);

    return null;
}

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
              {/*<Route path="*" element={<NotFoundPage />} />*/}
          </Routes>
          <ScrollToTop />
      </>
  );
}

export default App;
