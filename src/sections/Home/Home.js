import React from 'react'
import './home.scss'
import profilepic from '../../assets/profilepic.png'

function Home() {
    return (
        <div className='Home'>
            <div className="container">
                <div className="content">

                    <div className="left center" id="left-home">
                        <div className="details">
                            <h1 className="head">
                                Hi, I'm Abhishek Sharma
                            </h1>
                            <h2 className="position">
                                Web Developer
                            </h2>
                            <p className="desc">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, distinctio.
                            </p>

                        </div>

                        <div className="hover-link">
                            <div className="social">
                                <li><i class="uil uil-github"></i></li>
                                <li><i class="uil uil-linkedin"></i></li>
                                <li><i class="uil uil-instagram-alt"></i></li>
                                <li><i class="uil uil-twitter"></i></li>
                                <i class="uil uil-twitter"></i>

                            </div>

                            <div className="btn btn-prim">
                                Portfolio
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
