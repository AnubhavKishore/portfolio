import React from 'react'
import './subnav.scss'
import { useSelector } from 'react-redux';
import { Link } from 'react-scroll/modules';
import { Icon } from '@iconify/react';

function SubNav() {
    const subNavActive = useSelector(s => s.utilsReducer.subNavActive);


    const active={ 
        visibility:"visible",
        opacity:"1"
      }
    const passive={ 
        top: "-1%",
        visibility:"hidden",
        opacity:"0"
      }






    return (
        <div style={subNavActive? active : passive} id="subnav" className='subnav'>
            <div className="content">
                <ul >
                    <li>
                        <Link  spy={true} duration={5} smooth={true} offset={-70} activeClass='active' to="scroll-home" ><Icon icon="uil:estate" className='uil' />
                            Home</Link>


                    </li>


                    <li>
                        <Link spy={true} duration={5} smooth={true} offset={-70} activeClass='active' to="scroll-proj" ><Icon icon="uil:scenery" className='uil' />
                            Projects</Link>


                    </li>
                    {/* <li>
                        <Link  spy={true} duration={5} smooth={true} offset={-70} activeClass='active' to="scroll-about" ><i className="uil uil-user"></i>
                            About</Link>


                    </li> */}
                    
                    <li>
                        <Link spy={true} duration={5} smooth={true} offset={-70} activeClass='active' to="scroll-skills">
                        <Icon icon="uil:file-alt" className='uil' />
                      
                            Skills</Link>


                    </li>
                    <li>
                        <Link  spy={true} duration={5} smooth={true} offset={-70} activeClass='active' to="scroll-contact" ><Icon icon="uil:envelope" className='uil' />
                            Contact</Link>


                    </li>
                </ul>
            </div>

        </div>
    )
}

export default SubNav
