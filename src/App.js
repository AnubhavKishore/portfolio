
import Footer from "./components/footer/Footer.js";
import Navbar from "./components/navbar/Navbar";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Home from "./sections/Home/Home";
import Project from "./sections/Projects/Project";
import Skills from "./sections/skills/Skills";

function App() {
  
  return (
   <>
    <Navbar/>

    <Home/>
    <About />
    <Project/>
    <Skills/>
    <Contact/>

    <Footer/>
  

   </>
  );
}

export default App;
