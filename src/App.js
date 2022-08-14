import React, { useRef } from "react";

import GlobalStyle from "./styles/GlobalStyle";
import { Menu } from "./styles/Menu";

import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {

  const about = useRef(null);
  const projects = useRef(null);
  const skills = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <GlobalStyle />
      <Menu>
            <ul>
                <li onClick={() => scrollToTop()}>
                  <a>home</a>
                </li>
                <li onClick={() => scrollToSection(about)}>
                  <a>sobre</a>
                </li>
                <li onClick={() => scrollToSection(projects)}>
                  <a>projetos</a>
                </li>
                <li onClick={() => scrollToSection(skills)}>
                  <a>habilidades</a>
                </li>
            </ul>
      </Menu>
      <Home />
      <div ref={about}>
        <About />
      </div>
      <div ref={projects}>
        <Projects />
      </div>
      <div ref={skills}>
        <Skills />
      </div>
      <Footer />
    </>
  );
}

export default App;
