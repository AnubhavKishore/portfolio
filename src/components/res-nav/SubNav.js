import React from 'react'
import './subnav.scss'
import { useDispatch, useSelector } from 'react-redux';
import { SubScrollPage} from '../../redux/slices/utilsSlice';


function SubNav() {
    const subNavActive = useSelector(s=>s.utilsReducer.subNavActive);
    const dispatch =useDispatch();
   
    
    function handleAClick(e) {
        dispatch(SubScrollPage(e));

    }





    return (
        <div style={{display :subNavActive ? 'block':'none'  }} id="subnav" className='subnav'>
            <div className="content">
                <ul>
                    <li>
                        <a onClick={handleAClick}  href="/" className='home' id='home' >
                            <i className="uil uil-estate"></i>
                            Home
                        </a>
                    </li>

                    <li>
                        <a onClick={handleAClick} href="/" className='about' id='about' >
                            <i className="uil uil-user"></i>
                            About
                        </a>
                    </li>
                    <li>
                        <a onClick={handleAClick} href="/" className='' id='skills' >
                            <i className="uil uil-file-alt"></i>
                            Skills
                        </a>
                    </li>

                    <li>
                        <a onClick={handleAClick} href="/" className='e' id='projects' >
                            <i className="uil uil-scenery"></i>
                            Projects
                        </a>
                    </li>
                    <li>
                        <a onClick={handleAClick} href="/" className='' id='contact me' >
                            <i className="uil uil-envelope"></i>
                            Contact me
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default SubNav
