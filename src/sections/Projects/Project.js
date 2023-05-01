import React from 'react';
import './project.scss';
import slideimg1 from "../../assets/bg1.jpg"

function Project() {

    
    return (
        <div className='project'>
            <div className="container">
                <div className="content">
                    <div className="header">
                        <h1 className="head">
                            My Projects
                        </h1>
                        <h4 className="intro">
                            Most recent work
                        </h4>

                    </div>

                    <div className="slider">
                        <div className="arrow center left-icon">
                            <i class="uil uil-arrow-circle-left"></i>
                        </div>

                        <div className="each-slide">
                            <div className="left">
                                <div className="thumb-img">
                                    <img src={slideimg1} alt="" />
                                </div>

                            </div>
                            <div className="right">


                                <div className="heading">
                                    <h1 className="head">
                                        My Projects
                                    </h1>
                                </div>



                                <div className="mid">
                                    <h4 id="desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aliquam ut ex sunt praesentium odio perferendis vitae. Officiis rerum error aut architecto totam quae maxime saepe, eligendi hic at. Accusantium temporibus nesciunt aliquam omnis ipsum consequuntur quos cupiditate assumenda aliquid rerum rem minima at, blanditiis labore, iure ipsa. Cumque, consectetur.
                                    </h4>

                                </div>



                                <div className="buttons">
                                    <a href="#">

                                        <div className="btn btn-cv btn-prim">
                                            Demo
                                            <i class="uil uil-arrow-up-right"></i>
                                        </div>
                                    </a>
                                </div>

                            </div>

                        </div>



                        <div className="arrow right-icon">
                            <i class="uil uil-arrow-circle-right"></i>
                        </div>

                    </div>

                </div>
            </div>
        </div>


    )
}

export default Project
