import React from 'react'
import './navbar.scss'
import SubNav from '../res-nav/SubNav'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSubNav } from '../../redux/slices/utilsSlice'

function Navbar() {
    
    const w =window.innerWidth < 430;
    const subNavActive = useSelector(s=>s.utilsReducer.subNavActive);
    const dispatch =useDispatch();
   
    
    function handleSubnav(){
        
        dispatch(toggleSubNav(subNavActive !== null ? !subNavActive : true))
    }




    return (<>
        <nav className='navbar'>
            <div className="container">
                <div className="content">


                    <div id='left-nav' className="left">
                        <h2><a href="/">Abhishek</a></h2>

                    </div>

                    <div className="right" id="right-nav">
                        <ul>
                            <li><a href="/" className='home' id='home' >Home</a></li>
                            <li><a href="/" className='about' id='about' >About</a></li>
                            <li><a href="/" className='skills' id='skills' >Skills</a></li>
                            <li><a href="/" className='contact me' id='contact me' >Contact me</a></li>
                        </ul>
                        <i  style={{display :w &&subNavActive ? 'block':'none'}} onClick={handleSubnav} className="uil uil-times-circle"></i>
                        <i style={{display :w &&!subNavActive  ? 'block':'none'}}  className="uil uil-apps" onClick={handleSubnav} ></i>
                        <i id="dark-icon" className="uil uil-moon"></i>
                    </div>


                </div>

            </div>

        </nav>
        <SubNav className='subnav'></SubNav>

    </>
    )
}

export default Navbar
