import Footer from "./components/footer/Footer.js";
import Navbar from "./components/navbar/Navbar";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Home from "./sections/Home/Home";
import Project from "./sections/Projects/Project";
import Skills from "./sections/skills/Skills";

import './App.scss'
import Totop from "./components/totop/Totop.js";
import { useEffect, useState } from "react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useDispatch, useSelector } from "react-redux";
import { toggleSubNav } from "./redux/slices/utilsSlice.js";

function App() {
  const dispatch = useDispatch()
  const darkTheme = useSelector(s => s.utilsReducer.darkTheme);
  const [topActive, setTopActive] = useState(false)



  if (darkTheme) {
    document.body.classList.add('dark-theme');
  } else {

    document.body.classList.remove('dark-theme');
  }


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])




  window.onscroll = () => {
    dispatch(toggleSubNav(false))
    if (document.documentElement.scrollTop < 600) {
      setTopActive(false);
    } else {
      setTopActive(true)
    }

  }



  return (
    <>
      <Navbar />
      <main className="all-sections">

        <Home />
        <Project />
        <About />

        <Skills />

        <Contact />


      </main >
      {
        topActive &&
        <Totop />

      }
      <Footer />


    </>
  );
}

export default App;
