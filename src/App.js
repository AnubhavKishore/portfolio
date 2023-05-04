import Footer from "./components/footer/Footer.js";
import Navbar from "./components/navbar/Navbar";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Home from "./sections/Home/Home";
import Project from "./sections/Projects/Project";
import Skills from "./sections/skills/Skills";

import './App.scss'
import Totop from "./components/totop/Totop.js";
import { useEffect } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useSelector } from "react-redux";

function App() {
  const darkTheme = useSelector(s => s.utilsReducer.darkTheme);



  if (darkTheme) {
    document.body.classList.add('dark-theme');
  } else {

    document.body.classList.remove('dark-theme');
  }


  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once:true
     })
  }, [])



  return (
    <>
      <Navbar />
      <main className="all-sections">
        
          <Home />
          <About />

          <Project />
          <Skills />

          <Contact />

      </main >
      <Totop />

      <Footer />


    </>
  );
}

export default App;
