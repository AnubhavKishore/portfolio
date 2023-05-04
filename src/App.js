import Footer from "./components/footer/Footer.js";
import Navbar from "./components/navbar/Navbar";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Home from "./sections/Home/Home";
import Project from "./sections/Projects/Project";
import Skills from "./sections/skills/Skills";

import './App.scss'
import { useDispatch, useSelector } from "react-redux";
import Totop from "./components/totop/Totop.js";
import { toggleSubNav } from "./redux/slices/utilsSlice.js";

function App() {
  const darkTheme = useSelector(s => s.utilsReducer.darkTheme);



  if (darkTheme) {
    document.body.classList.add('dark-theme');
  } else {

    document.body.classList.remove('dark-theme');
  }



  const dispatch = useDispatch()



  return (
    <>
      <Navbar />
      <main onScroll={()=>dispatch(toggleSubNav(false))} className="all-sections">
      <Home />
      <About />
      <Project />
      <Skills />
      <Contact />
    </main >
        <Totop/>

      <Footer />


    </>
  );
}

export default App;
