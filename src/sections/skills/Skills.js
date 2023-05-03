import React from 'react'
import './skills.scss'
import SecHead from '../../components/secHead/SecHead'
function Skills() {
  return (
    <div className='skills'>
      <div className="container">
        <div className="content">

          <SecHead head="Skills" subhead="My technical levels" />
          <div className="all-skills">

            <div className="skill-overlay">

              <div className="each-skill ">

                <div className="head">
                  <i className="uil uil-brackets-curly skill-icons"></i>
                  <h4 className="heading">
                    Frontend Developer
                  </h4>

                  <p className="desc">
                    More than 4 years
                  </p>
                    <i className="angle uil2 uil-angle-up"></i> :
                    <i className="angle uil2 uil-angle-down"></i>
                 
                </div>


                <div className="report">
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



            <div className="skill-overlay">

              <div className="each-skill ">

                <div className="head">
                  <i className="uil uil-brackets-curly skill-icons"></i>
                  <h4 className="heading">
                    UI/UX
                  </h4>

                  <p className="desc">
                    More than 5 years
                  </p>
                  
                    <i className="angle uil2 uil-angle-up"></i> :
                    <i className="angle uil2 uil-angle-down"></i>
                 

                </div>


                <div className="report">
                  <div className="each-report">

                    <div className="top around">
                      <h6 className="figma-skill">Figma</h6>
                      <p className="percent">90%</p>

                    </div>
                    <div className="bottom">
                      <span className='progress-line for-html' />

                    </div>
                  </div>


                  <div className="each-report">

                    <div className="top around">
                      <h6 className="html">Adobe</h6>
                      <p className="percent">90%</p>

                    </div>
                    <div className="bottom">
                      <span className='progress-line for-css' />

                    </div>
                  </div>





                </div>




              </div>

            </div>








          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills
