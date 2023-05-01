import React, { useEffect, useRef, useState } from 'react'
import './home.scss'
import profilepic from '../../assets/profilepic.png'


function Home() {




    return (
        <div className='Home'>
            <div className="container">
                <div className="content">

                    <div className="left" id="left-home">
                        <div className="details">
                            <h1 className="head">
                                Hi, I'm Abhishek Sharma
                            </h1>
                            <h3 className="position">
                                Web Developer
                            </h3>
                            <p className="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, distinctio. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique tenetur dolores corporis.
                            </p>

                        </div>

                        <div className="bottom hover-link">
                            <div className="social">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <i className="uil2 uil-github"></i>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="uil2 uil-linkedin"></i>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className={`uil2 uil-twitter`}></i>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">


                                            <i className={`uil2 fa fa-instagram`} id="uil-instagram-alt" aria-hidden="true"></i>




                                        </a>
                                    </li>
                                </ul>

                            </div>

                            <div className="buttons">
                                <a href="#">

                                    <div className="btn-portfolio btn  btn-prim">
                                        Portfolio
                                        <i className="uil uil-bag"></i>

                                    </div>
                                </a>
                                <a href="#">
                                    <div className="btn-contact btn btn-prim">

                                        Contact
                                        <i className="uil uil-message"></i>
                                    </div>
                                </a>
                            </div>


                        </div>


                    </div>

                    <div className="right center" id="right-home">

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
