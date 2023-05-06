import React from 'react';
import './project.scss';
import SecHead from '../../components/secHead/SecHead';
import EachProject from '../../components/Each-proj/EachProject';

import thumbtomato from '../../assets/thumbtomato.png'

import Glider from 'react-glider';
import 'glider-js/glider.min.css';




function Project() {





    return (
        <div id='scroll-proj' data-aos="fade-up" className='project'>
            <div className="container">
                <div className="content">
                    <SecHead head="My Projects" subhead="Most recent work" />


                    <div className="slider">
                        <Glider className='glider'
                            dots={'#dots'}
                            arrows={{
                                prev: '#buttonPrev',
                                next: '#buttonNext',
                            }}
                            draggable
                            hasDots
                            hasArrows
                            rewind
                            scrollLock
                            slidesToShow={1}>


                            <EachProject desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugit, eius dolorem assumenda autem in voluptatem ea! Pariatur animi esse deserunt odit dignissimos suscipit et ad facere velit quasi."} title={"Tomato"} thumImg={thumbtomato} />
                            <EachProject desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugit, eius dolorem assumenda autem in voluptatem ea! Pariatur animi esse deserunt odit dignissimos suscipit et ad facere velit quasi."} title={"Tomato"} thumImg={thumbtomato} />
                            <EachProject desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugit, eius dolorem assumenda autem in voluptatem ea! Pariatur animi esse deserunt odit dignissimos suscipit et ad facere velit quasi."} title={"Tomato"} thumImg={thumbtomato} />
                        </Glider>
                        <div className="slider-controller">

                            <div id='buttonPrev' className="arrow center left-icon">
                                <i className="uil uil-angle-left-b"></i>
                            </div>
                            <div id="dots">

                            </div>
                            <div id='buttonNext' className="arrow center left-icon">
                                <i className="uil uil-angle-right-b"></i>
                            </div>

                        </div>






                    </div>


                </div>
            </div>
        </div>


    )
}

export default Project
