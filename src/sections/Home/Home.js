import React from 'react'
import './home.scss'
import profilepic from '../../assets/profilepic.png'
import Primbtn from '../../components/Primary btn/Primbtn'
import { Typewriter } from 'react-simple-typewriter'


function Home() {



    return (

        <div id='scroll-home' className='Home'>
            <span>


            </span>
            <div className="container">
                <div className="content">

                    <div data-aos="fade-right" className="left" id="left-home">
                        <div className="details">
                            <h1 className="head">
                                Hi, I'm Abhishek Sharma
                            </h1>
                            <h4 className="position">
                                I'm {' '}
                                <Typewriter
                                    words={['Frontend Developer', 'Backend Developer']}
                                    loop={Infinity}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={50}
                                    deleteSpeed={25}

                                />

                            </h4>
                            <p className="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, distinctio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique tenetur dolores corporis.
                            </p>

                        </div>

                        <div className="bottom hover-link">
                            <div className="social">
                                <ul>
                                    <li>
                                        <a href="/">
                                            <i className="uil2 fa-brands fa-github"></i>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className="uil2 fa-brands fa-linkedin"></i>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i className={`uil2 fa-brands fa-twitter`}></i>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <i
                                                className='uil2 fa-brands fa-instagram'

                                                id="uil-instagram-alt" aria-hidden="true"></i>

                                        </a>
                                    </li>
                                </ul>

                            </div>

                            <div className="buttons">

                                <Primbtn value="My Resume" icon={<i className="uil uil-bag"></i>} />
                                <Primbtn value="Contact Me" icon={<i className="uil uil-message"></i>} />
                            </div>


                        </div>


                    </div>

                    <div data-aos="fade-left" className="right center" id="right-home">

                        <div className="profile-img center">

                            <img src={profilepic} alt="" />


                        </div>



                    </div>

                </div>
            </div>


        </div>
    )
}

export default Home
