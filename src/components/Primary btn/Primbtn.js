import React from 'react'
import './primbtn.scss'
import { Link } from 'react-scroll/modules';

function Primbtn(props) {
    
    return (
        <div >
            <Link to='/' >

                <div className="btn-portfolio btn  btn-prim">
                    {props.value}
                    {props.icon}

                </div>
            </Link>

        </div>
    )
}

export default Primbtn
