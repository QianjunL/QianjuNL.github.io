import "./app.scss";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Experience from "./components/experience/Experience";

const App = () => {
  return ( 
    <div>
      <Cursor />
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Skills"><Parallax type="skills"/></section>
    <section><Skills/></section>
    <section id="Experience"><Parallax type="experience"/></section>
    <section><Experience /></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contact"><Contact /></section>
  </div>
  )
};

export default App;
