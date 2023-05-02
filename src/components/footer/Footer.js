import React from 'react'
import './footer.scss'

function Footer() {
    return (
        <div className='footer'>
            <div className="container">
                <div className="content">
                    <div className="top">

                        <div className="left flex-col">
                            <h1 className="name">
                                Abhishek
                            </h1>
                            <h6 className="position">
                                Web Developer
                            </h6>

                        </div>

                        <div className="mid">

                            <ul>
                                <li><a href="/" className='project' id='project' >Projects</a></li>
                                <li><a href="/" className='about' id='about' >About</a></li>
                                <li><a href="/" className='contact me' id='contact me' >Contact me</a></li>
                            </ul>

                        </div>

                        <div className="right">
                            <ul>


                                <li>
                                    <a href="/">
                                        <i className="uil2 uil-github"></i>

                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className="uil2 uil-linkedin"></i>

                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className={`uil2 uil-twitter`}></i>

                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className={`uil2 fa fa-instagram`} id="uil-instagram-alt" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div className="bottom center">
                        <span className="copytight">
                            @Abhishek. All rights reserved.
                        </span>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;
