import React from 'react'
import './each-proj.scss'
import Primbtn from '../../components/Primary btn/Primbtn';
import Tech from '../stack/Tech';

function EachProject({ project }) {
    return (
        <div className='each-proj' >
            <div className="each-slide">
                <div className="center left">
                    <div className="center thumb-img">
                        <img src={project.thumImg} alt="" />
                    </div>

                </div>
                <div className="right">


                    <div className="heading">
                        <h4 className="head">
                            {project.title}
                        </h4>
                    </div>



                    <div className="mid">
                        <p className="desc">
                            {project.desc}
                        </p>
                        <div className="stack-used">
                            <div className="head">
                                <p>Stack Used</p>

                            </div>
                            <div className="logos">
                                {
                                    project.stackUsed.map((item, i) => {
                                        return <Tech stack={item} key={i} />
                                    })
                                }

                            </div>



                        </div>

                    </div>



                    <div className="buttons">
                        <a target="_blank" rel="noreferrer" href={project.live}>

                            <Primbtn value="Live" icon={<i className="uil uil-arrow-up-right"></i>} />
                        </a>
                        <a target="_blank" rel="noreferrer" href={project.github}>

                            <Primbtn value="GitHub" icon={<i className="uil uil-github"></i>} />
                        </a>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default EachProject
