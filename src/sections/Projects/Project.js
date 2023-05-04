import React from 'react';
import './project.scss';
import slideimg1 from "../../assets/bg1.jpg"
import SecHead from '../../components/secHead/SecHead';
import Primbtn from '../../components/Primary btn/Primbtn';

function Project() {


    return (
        <div id='scroll-proj' data-aos="fade-up" className='project'>
            <div className="container">
                <div className="content">

                    <SecHead head="My Projects" subhead="Most recent work" />

                    <div className="slider">
                        <div className="arrow center left-icon">
                            <i className="uil uil-angle-left-b"></i>
                        </div>

                        <div className="each-slide">
                            <div className="left">
                                <div className="thumb-img">
                                    <img src={slideimg1} alt="" />
                                </div>

                            </div>
                            <div className="right">


                                <div className="heading">
                                    <h4 className="head">
                                        Project Title
                                    </h4>
                                </div>



                                <div className="mid">
                                    <p className="desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, aliquam ut ex sunt praesentium odio perferendis vitae. Officiis rerum error aut architecto totam quae maxime saepe, eligendi hic at. Accusantium temporibus nesciunt aliquam omnis ipsum consequuntur quos cupiditate assumenda aliquid rerum rem minima at, blanditiis labore, iure ipsa. Cumque, consectetur.
                                    </p>

                                </div>



                                <div className="buttons">
                                    <Primbtn value="Demo" icon={<i className="uil uil-arrow-up-right"></i>} />
                                </div>

                            </div>

                        </div>



                        <div className="arrow right-icon">
                            <i className="uil uil-angle-right-b"></i>
                        </div>

                    </div>

                    <div className="dots">
                        <p>. . .</p>
                    </div>

                </div>
            </div>
        </div>


    )
}

export default Project
