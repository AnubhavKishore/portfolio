import React from 'react'
import './home.scss'
import profilepic from '../../assets/profilepic.png'
import Primbtn from '../../components/Primary btn/Primbtn'
import { Typewriter } from 'react-simple-typewriter'
import { Link } from 'react-scroll/modules'


function Home() {



    return (

        <div id='scroll-home' className='Home'>
           
            <div className="container">
                <div className="content">

                    <div data-aos="fade-right" className="left" id="left-home">
                        <div className="details">
                            <h1 className="head">
                                Hi, I'm Abhishek Sharma
                            </h1>
                            <h4 className="position">
                                I'm {' '}
                                <span id='typewriter'>

                                    <Typewriter
                                        words={['Frontend Developer', 'Backend Developer']}
                                        loop={Infinity}
                                        cursor
                                        cursorStyle='|'
                                        typeSpeed={50}
                                        deleteSpeed={25}

                                    />
                                </span>

                            </h4>
                            <p className="desc">
                                Passionate undergrad computer science student at Delhi Technological University (DTU). A Full Stack MERN developer with hands-on experience and a solid understanding of web development.
                            </p>

                        </div>

                        <div className="bottom hover-link">
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

                            <div className="buttons">
                                <Link to="/" >

                                    <Primbtn
                                        value="My Resume" icon={<i className="uil uil-bag"></i>} />

                                </Link>
                                <Link duration={5} to='scroll-contact' offset={-70}>
                                    <Primbtn value="Contact Me" icon={<i className="uil uil-message"></i>} />
                                </Link>
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


        </div >
    )
}

export default Home
