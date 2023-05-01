import { useRef } from "react";
import Navbar from "./components/navbar/Navbar";
import About from "./sections/About/About";
import Home from "./sections/Home/Home";
import Project from "./sections/Projects/Project";

function App() {
  const about = useRef(null);

  const handleClick = () => {
    about.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
   <>
    <Navbar/>

    <Home/>
    <About ref={about}/>
    <Project/>
  

   </>
  );
}

export default App;
