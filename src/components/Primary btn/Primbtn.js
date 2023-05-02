import React from 'react'
import './primbtn.scss'

function Primbtn(props) {
    return (
        <div>
            <a href="/">

                <div className="btn-portfolio btn  btn-prim">
                    {props.value}
                    {props.icon}

                </div>
            </a>

        </div>
    )
}

export default Primbtn
