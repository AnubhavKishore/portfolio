import React from 'react'
import './about.scss'
import profilepic from '../../assets/profilepic.png'
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
                            <img src={profilepic} alt="" />

                        </div>

                    </div>
                    <div className="bottom">

                        <div className="details">
                            <div className="top">
                                <p id="desc">
                                    Hi, I am Abhishek Sharma. A Computer Science Undergrad Student at Delhi Technological University.
                                    I am a tech-enthusiast and a full stack developer.
                                    I am prolificiant in Reactjs, Nodejs, MongoDB,Expressjs (MERN STACK),CSS ,HTML5
                                </p>

                            </div>

                            <div className="count center">

                                <div className="each-count">
                                    <h1 className="num">

                                        05+

                                    </h1>
                                    <p className="desc">
                                        Years of experience

                                    </p>
                                </div>
                                <div className="each-count ">
                                    <h1 className="num">

                                        05+

                                    </h1>
                                    <p className="desc">
                                        Years of experience

                                    </p>
                                </div>
                                <div className="each-count">
                                    <h1 className="num">

                                        05+

                                    </h1>
                                    <p className="desc">
                                        Years of experience

                                    </p>
                                </div>

                            </div>

                            <div className="buttons center">
                                <Primbtn value="My Resume" icon={<i className="uil uil-download-alt"></i>} />
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    )
}

export default About
