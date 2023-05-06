import React from 'react'
import './each-proj.scss'
import Primbtn from '../../components/Primary btn/Primbtn';
import Tech from '../stack/Tech';
import reactLogo from '../../assets/react.svg'
import cssLogo from '../../assets/css.svg'
import htmlLogo from '../../assets/html.svg'

function EachProject(props) {
    return (
        <div className='each-proj' >
            <div className="each-slide">
                <div className="center left">
                    <div className="center thumb-img">
                        <img src={props.thumImg} alt="" />
                    </div>

                </div>
                <div className="right">


                    <div className="heading">
                        <h4 className="head">
                            {props.title}
                        </h4>
                    </div>



                    <div className="mid">
                        <p className="desc">
                            {props.desc}
                        </p>
                        <div className="stack-used">
                            <div className="head">
                                <p>Tech Used</p>

                            </div>
                            <div className="logos">
                                <Tech logo={reactLogo} />
                                <Tech logo={htmlLogo} />
                                <Tech logo={cssLogo} />

                            </div>



                        </div>

                    </div>



                    <div className="buttons">
                        <Primbtn value="Live" icon={<i className="uil uil-arrow-up-right"></i>} />
                        <Primbtn value="GitHub" icon={<i className="uil uil-github"></i>} />
                    </div>

                </div>

            </div>

        </div>
    )
}

export default EachProject
