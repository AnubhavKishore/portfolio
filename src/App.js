import Footer from "./components/footer/Footer.js";
import Navbar from "./components/navbar/Navbar";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Home from "./sections/Home/Home";
import Project from "./sections/Projects/Project";
import Skills from "./sections/skills/Skills";

import './App.scss'
import { useDispatch, useSelector } from "react-redux";
import { toggleSubNav } from "./redux/slices/utilsSlice.js";

function App() {

  
  const subNavActive = useSelector(s => s.utilsReducer.subNavActive);
  const dispatch = useDispatch();


  function handleScroll(e) {
    console.log("hi",e.currentTarget.scrollTop);

    dispatch(toggleSubNav(subNavActive !== null ? !subNavActive : true))
  }



  return (
    <>
      <Navbar />
      <main className="all-sections">
        <Home />
        <About />
        <Project />
        <Skills />
        <Contact />
      </main>

      <Footer />


    </>
  );
}

export default App;
