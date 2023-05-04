import React, { useState } from 'react'
import './skill.scss'

function Skill() {
    const [active, setActive] = useState(true)
    function handleSkillClick() {
        setActive(!active);

    }
    return (
        <div className="skill-overlay">

            <div className="each-skill ">

                <div onClick={handleSkillClick} className="head">
                    <i className="uil uil-brackets-curly skill-icons"></i>
                    <h4 className="heading">
                        Frontend Developer
                    </h4>

                    <p className="desc">
                        More than 4 years
                    </p>
                    <i className={`angle uil2 uil-angle-${active ? 'up':'down'}`}></i>
                    

                </div>


                <div style={{ display: active ? 'flex' : 'none' }} className="report">
                    <div className="each-report">

                        <div className="top around">
                            <h6 className="html-skill">HTML</h6>
                            <p className="percent">80%</p>

                        </div>
                        <div className="bottom">
                            <span className='progress-line for-html' />

                        </div>
                    </div>


                    <div className="each-report">

                        <div className="top around">
                            <h6 className="html">CSS</h6>
                            <p className="percent">70%</p>

                        </div>
                        <div className="bottom">
                            <span className='progress-line for-css' />

                        </div>
                    </div>





                </div>




            </div>

        </div>
    )
}

export default Skill
