import React from 'react'
import './navbar.scss'
import SubNav from '../res-nav/SubNav'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSubNav, toggleTheme } from '../../redux/slices/utilsSlice'

function Navbar() {

    const w = window.innerWidth < 430;
    const subNavActive = useSelector(s => s.utilsReducer.subNavActive);
    const darkTheme = useSelector(s => s.utilsReducer.darkTheme);
    const dispatch = useDispatch();
    
    localStorage.setItem('selected-dark-theme',darkTheme)

    function handleSubnav() {

        dispatch(toggleSubNav(subNavActive !== null ? !subNavActive : true))
    }

    function handleTheme() {
        dispatch(toggleTheme());
        localStorage.removeItem('selected-dark-theme')
    }




    return (<>
        <nav className='navbar'>
            <div className="container">
                <div className="content">


                    <div id='left-nav' className="left">
                        <h2><a href="/">Abhishek</a></h2>

                    </div>

                    <div className="right" id="right-nav">
                        <ul>
                            <li><a href="/" className='home' id='home' >Home</a></li>
                            <li><a href="/" className='about' id='about' >About</a></li>
                            <li><a href="/" className='skills' id='skills' >Skills</a></li>
                            <li><a href="/" className='contact me' id='contact me' >Contact me</a></li>
                        </ul>

                        <i onClick={handleSubnav} className={`uil uil-${w && subNavActive ? 'times-circle' : 'apps'}`}></i>
                       


                        <i onClick={handleTheme} id="dark-icon" className={`uil ${darkTheme ? "uil-sun" : "uil-moon"}`}></i>
                    </div>


                </div>

            </div>

        </nav>
        <SubNav className='subnav'></SubNav>

    </>
    )
}

export default Navbar
