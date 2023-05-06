import React, { useState } from 'react'
import './skill.scss'
import EachReport from '../eachReport/EachReport';
import EachProject from '../Each-proj/EachProject';

function Skill({content}) {
    const [active, setActive] = useState(true)
    function handleSkillClick() {
        setActive(!active);

    }
    console.log(content);
    return (
        <div className="skill-overlay">

            <div className="each-skill ">

                <div onClick={handleSkillClick} className="head">
                    <i className="uil uil-brackets-curly skill-icons"></i>
                    <h4 className="heading">
                        {content?.heading}
                    </h4>

                    <p className="desc">
                        {content?.desc}
                    </p>
                    <i className={`angle uil2 uil-angle-${active ? 'up':'down'}`}></i>
                    

                </div>


                <div style={{ display: active ? 'flex' : 'none' }} className="report">
                    
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
