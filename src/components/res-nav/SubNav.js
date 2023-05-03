import React from 'react'
import './subnav.scss'


function SubNav() {
    return (
        <div className='subnav'>
            <div className="content">
                <ul>
                    <li>
                        <a href="/" className='home' id='home' >
                            <i className="uil uil-estate"></i>
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="/" className='about' id='about' >
                            <i className="uil uil-user"></i>
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/" className='' id='skills' >
                            <i className="uil uil-file-alt"></i>
                            Skills
                        </a>
                    </li>

                    <li>
                        <a href="/" className='e' id='projects' >
                            <i className="uil uil-scenery"></i>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="/" className='' id='contact me' >
                            <i className="uil uil-envelope"></i>
                            Contact me
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default SubNav
