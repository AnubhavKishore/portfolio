import React from 'react'
import './about.scss'
import aboutpic from '../../assets/profilepic3.png'
import SecHead from '../../components/secHead/SecHead'
import Primbtn from '../../components/Primary btn/Primbtn'



function About() {
    return (
        <div id='scroll-about' data-aos="fade-up" className='About'>
            <div className="container">
                <div className="content">

                    <SecHead subhead="My Introduction" head="About Me" />

                    <div data-aos="zoom-in" className="mid">
                        <div className="img">
                            <img src={aboutpic} alt="" />

                        </div>

                    </div>
                    <div className="bottom">

                        <div className="details">
                            <div className="top">
                                <span className="center" id="desc">
                                    Hi, I am Abhishek Sharma,    undergrad student pursuing a degree in Computer Science at Delhi Technological University.
                                    Alongside my studies, I actively involve in web development projects and have attained high level of proficiency in crafting dynamic and user-friendly websites. I'm continuously learning and exploring new technologies and with each new project I strive to enhance my skills and create engaging and attractive websites.


                                </span>

                            </div>

                            <div className="count center">

                                <div className="social">
                                    <ul>
                                        <li>
                                            <a
                                                target="_blank" rel="noreferrer"
                                                href="https://github.com/abhishek-403"
                                            >
                                                <i className="uil2 fa-brands fa-github"></i>

                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noreferrer"
                                                href="https://www.linkedin.com/in/abhishek-sharma-84a827212/">
                                                <i className="uil2 fa-brands fa-linkedin"></i>

                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noreferrer"
                                                href="https://twitter.com/abhishek_sh01">
                                                <i className={`uil2 fa-brands fa-twitter`}></i>

                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" rel="noreferrer"
                                                href="https://www.instagram.com/abhishek._404">
                                                <i
                                                    className='uil2 fa-brands fa-instagram'

                                                    id="uil-instagram-alt" aria-hidden="true"></i>

                                            </a>
                                        </li>
                                    </ul>

                                </div>

                            </div>

                            <a target='_blanck' href="http://surl.li/hzlce" className="buttons center">
                                <Primbtn value="My Resume" icon={<i className="uil uil-download-alt"></i>} />
                            </a>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    )
}

export default About
