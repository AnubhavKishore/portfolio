import React from 'react'
import './footer.scss'
import { Link } from 'react-scroll/modules';

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="content">
                    <div className="top">

                        <div className="left flex-col">
                            <h1 className="name">
                                Anubhav
                            </h1>
                            <h6 className="position">
                                Web Developer
                            </h6>

                        </div>

                        <div className="mid">

                            <ul>
                                <li>
                                    <Link duration={5} smooth={true} offset={-70} activeClass='active' to="scroll-home" spy={true} className='home'>Home</Link>

                                </li>
                                <li>
                                    <Link duration={5} to="scroll-skills" smooth={true} offset={-70} activeClass='active' spy={true} className='about' >Skills</Link>

                                </li>
                                <li>
                                    <Link duration={5} to='scroll-proj' smooth={true} offset={-70} activeClass='active' spy={true} className='projects'  >Projects</Link>
                                </li>
                            </ul>

                        </div>

                        <div className="right">
                            <ul>
                                <li>
                                    <a
                                        target="_blank" rel="noreferrer"
                                        href="https://github.com/AnubhavKishore"
                                    >
                                        <i className="uil2 fa-brands fa-github"></i>

                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noreferrer"
                                        href="https://www.linkedin.com/in/anubhav-kishore-72444425a/">
                                        <i className="uil2 fa-brands fa-linkedin"></i>

                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noreferrer"
                                        href="https://twitter.com/anubhav2373">
                                        <i className={`uil2 fa-brands fa-x-twitter`}></i>

                                    </a>
                                </li>
                                <li>
                                    <a target="_blank" rel="noreferrer"
                                        href="https://www.instagram.com/anubhav_k_23/">
                                        <i
                                            className='uil2 fa-brands fa-instagram'

                                            id="uil-instagram-alt" aria-hidden="true"></i>

                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className="bottom center">
                        <span className="copytight">
                            Created by Anubhav Kishore
                        </span>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;
