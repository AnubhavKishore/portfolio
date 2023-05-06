import React from 'react'
import './tech.scss'

function Tech(props) {
  return (
    <div className='tech'>
        <div className="content">
            <div className="logo">
                <img src={props.logo} alt="" />

            </div>
            <div className="title">
                React
            </div>
        </div>
      
    </div>
  )
}

export default Tech
