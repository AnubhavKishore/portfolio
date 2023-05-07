import React from 'react';
import './project.scss';
import SecHead from '../../components/secHead/SecHead';
import EachProject from '../../components/Each-proj/EachProject';

import tomatoimg from '../../assets/tomatoimg.png'
import collegemateimg from '../../assets/collegemateimg.png'

import Glider from 'react-glider';
import 'glider-js/glider.min.css';

import jsLogo from '../../assets/javascript.svg'
import cssLogo from '../../assets/css.svg'
import htmlLogo from '../../assets/html.svg'




function Project() {
    const projects =[
        {
            title : "Tomato",
            desc:"Tomato is a clone website of the zomato. It is fully responsive website for screens of all dimensions and have an amazing frontend experience.",
            thumImg:tomatoimg,

            live:"https://tomato-clone-app.netlify.app",
            github:"https://github.com/abhishek-403/tomato",
            

            stackUsed:[{
                head:"HTML",
                logo:htmlLogo
            },
            {
                head:"CSS",
                logo:cssLogo
            },
            {
                head:"JavaScript",
                logo:jsLogo
            }
        ]

        },
        {
            title : "College Mate",
            desc:"College Mate provides you the all the neccessaty information about the societies of the certain colleges which includes DTU, NSUT, IITD, IITD, IGDTUW",
            thumImg:collegemateimg,

            
            live:"https://collegemate.netlify.app",
            github:"https://github.com/abhishek-403/collegemate",
            
            stackUsed:[{
                live:"https://collegemate.netlify.app/",
                head:"HTML",
                logo:htmlLogo
            },
            {
                head:"CSS",
                logo:cssLogo
            },
            {
                head:"JavaScript",
                logo:jsLogo
            }
        ]

        }
    ]





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

                            {
                                projects.map((item,i)=>{
                                    return(
                                        <EachProject project={item} key={i}/>
                                    )
                                })
                            }


                            
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
