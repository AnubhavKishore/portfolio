import React from 'react'
import './navbar.scss'
import SubNav from '../res-nav/SubNav'

function Navbar() {
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
                        <i className="uil uil-apps" ></i>
                        <i id="dark-icon" className="uil uil-moon"></i>
                    </div>


                </div>

            </div>

        </nav>
        <SubNav className='subnav'></SubNav>

    </>
    )
}

export default Navbar
