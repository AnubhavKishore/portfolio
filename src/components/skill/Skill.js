import React, { useState } from 'react'
import './skill.scss'
import EachReport from '../eachReport/EachReport';

function Skill({content}) {
    const [active, setActive] = useState(true)
    function handleSkillClick() {
        setActive(!active);

    }
    return (
        <div className="skill-overlay">

            <div className="each-skill ">

                <div onClick={handleSkillClick} className="head">
                    <i className={content.icon}></i>
                    <h4 className="heading">
                        {content?.heading}
                    </h4>

                    <p className="desc">
                        {content?.desc}
                    </p>
                    <i className={`angle uil2 uil-angle-${active ? 'up':'down'}`}></i>
                    

                </div>


                <div style={{ height: active ? '195px' : '10px' }} className="report">
                    
                    {
                        content?.reports?.map((item,i)=>{
                            return(
                                <EachReport key={i} content={item} />
                            )
                        })
                    }


                   




                </div>




            </div>

        </div>
    )
}

export default Skill
