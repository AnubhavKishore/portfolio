import React from 'react'
import './skills.scss'
import SecHead from '../../components/secHead/SecHead'
import Skill from '../../components/skill/Skill'
function Skills() {
  return (
    <div id="scroll-skills" data-aos="fade-up" className='skills'>
      <div className="container">
        <div className="content">

          <SecHead head="Skills" subhead="My technical levels" />
          <div className="all-skills">
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>
            <Skill/>

           



            







          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills
