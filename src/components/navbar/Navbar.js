import React from "react";
import "./navbar.scss";
import SubNav from "../res-nav/SubNav";
import { useDispatch, useSelector } from "react-redux";
import { toggleSubNav, toggleTheme } from "../../redux/slices/utilsSlice";
import { Link } from "react-scroll/modules";
import { Icon } from "@iconify/react";
function Navbar() {
  const subNavActive = useSelector((s) => s.utilsReducer.subNavActive);
  const darkTheme = useSelector((s) => s.utilsReducer.darkTheme);
  const dispatch = useDispatch();

  localStorage.setItem("selected-dark-theme", darkTheme);

  function handleSubnav() {
    dispatch(toggleSubNav(!subNavActive));
  }

  function handleTheme() {
    dispatch(toggleTheme());
    localStorage.removeItem("selected-dark-theme");
  }

  return (
    <>
      <nav id="nav" className="navbar">
        <div className="container">
          <div className="content">
            <div id="left-nav" className="left">
              <h2>
                <Link
                  duration={5}
                  smooth={true}
                  offset={-70}
                  activeClass="active"
                  to="scroll-home"
                  spy={true}
                  className="home"
                >
                  Abhishek
                </Link>
              </h2>
            </div>

            <div className="right" id="right-nav">
              <ul>
                <li>
                  <Link
                    duration={5}
                    smooth={true}
                    offset={-70}
                    activeClass="active"
                    to="scroll-home"
                    spy={true}
                    className="home"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    duration={5}
                    to="scroll-proj"
                    smooth={true}
                    offset={-70}
                    activeClass="active"
                    spy={true}
                    className="projects"
                  >
                    Projects
                  </Link>
                </li>
                {/* <li>
                                <Link duration={5} to="scroll-about" smooth={true} offset={-70} activeClass='active' spy={true} className='about' >About</Link>

                            </li> */}
                <li>
                  <Link
                    duration={5}
                    to="scroll-skills"
                    smooth={true}
                    offset={-70}
                    activeClass="active"
                    spy={true}
                    className="skills"
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    duration={5}
                    to="scroll-contact"
                    offset={-70}
                    smooth={true}
                    className="contact me"
                    spy={true}
                  >
                    Contact me
                  </Link>
                </li>
              </ul>
             
                <Icon
                  onClick={handleSubnav}
                  icon={subNavActive ? "uil:times-circle" : "uil:apps"}
                  className="uil uil-apps"
                />
        
            </div>
          </div>
        </div>
      </nav>
      <SubNav className="subnav"></SubNav>
    </>
  );
}

export default Navbar;
