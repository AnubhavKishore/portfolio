import React from 'react'
import './about.scss'
import profilepic from '../../assets/profilepic.png'


function About() {
    return (
        <div className='About'>
            <div className="container">
                <div className="content">
                    <div className="header">
                        <h1 className="head">
                            About Me
                        </h1>
                        <h4 className="intro">
                            My Introduction
                        </h4>

                    </div>

                    <div className="mid">
                        <div className="img">
                            <img src={profilepic} alt="" />

                        </div>

                    </div>
                    <div className="bottom">

                        <div className="details">
                            <div className="top">
                                <h4 id="desc">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aliquam ut ex sunt praesentium odio perferendis vitae. Officiis rerum error aut architecto totam quae maxime saepe, eligendi hic at. Accusantium temporibus nesciunt aliquam omnis ipsum consequuntur quos cupiditate assumenda aliquid rerum rem minima at, blanditiis labore, iure ipsa. Cumque, consectetur.
                                </h4>

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
                                <a href="#">

                                    <div className="btn btn-cv btn-prim">
                                        My Resume
                                        <i class="uil uil-download-alt"></i>
                                    </div>
                                </a>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    )
}

export default About
