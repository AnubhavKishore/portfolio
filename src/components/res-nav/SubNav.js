import React from 'react'
import './subnav.scss'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-scroll/modules';
import { toggleSubNav } from '../../redux/slices/utilsSlice';

function SubNav() {
    const dispatch = useDispatch()
    const subNavActive = useSelector(s => s.utilsReducer.subNavActive);






    return (
        <div style={{ display: subNavActive ? 'block' : 'none' }} id="subnav" className='subnav'>
            <div className="content">
                <ul >
                    <li>
                        <Link duration={5} smooth={true} offset={-70} activeClass='active' to="scroll-home" > <i className="uil uil-estate"></i>
                            Home</Link>


                    </li>

                    <li>
                        <Link duration={5} smooth={true} offset={-70} activeClass='active' to="scroll-about" ><i className="uil uil-user"></i>
                            About</Link>


                    </li>
                    <li>
                        <Link duration={5} smooth={true} offset={-70} activeClass='active' to="scroll-skills"><i className="uil uil-file-alt"></i>
                            Skills</Link>


                    </li>

                    <li>
                        <Link duration={5} smooth={true} offset={-70} activeClass='active' to="scroll-proj" ><i className="uil uil-scenery"></i>
                            Projects</Link>


                    </li>
                    <li>
                        <Link duration={5} smooth={true} offset={-70} activeClass='active' to="scroll-contact" ><i className="uil uil-envelope"></i>
                            Contact me</Link>


                    </li>
                </ul>
            </div>

        </div>
    )
}

export default SubNav
