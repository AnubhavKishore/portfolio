import Footer from "./components/footer/Footer.js";
import Navbar from "./components/navbar/Navbar";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Home from "./sections/Home/Home";
import Project from "./sections/Projects/Project";
import Skills from "./sections/skills/Skills";

import './App.scss'
import { useSelector } from "react-redux";

function App() {
  const darkTheme = useSelector(s => s.utilsReducer.darkTheme);


  if(darkTheme){
    document.body.classList.add('dark-theme');
  }else{
    
    document.body.classList.remove('dark-theme');
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
