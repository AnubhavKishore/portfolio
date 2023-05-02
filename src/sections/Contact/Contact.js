import React from 'react'
import SecHead from '../../components/secHead/SecHead'
import './contact.scss'
import Primbtn from '../../components/Primary btn/Primbtn'


function Contact() {
    return (
        <div className='contact'>
            <div className="container">
                <div className="content flex-col">
                    <SecHead head="Contact Me" subhead="Get in touch" />

                    <div className="bottom">
                        <div className="left flex-col">
                            <div className="each-mode hover-link">
                                <i class="uil uil-phone-volume"></i>
                                <h4 className="txt call-txt">Call Me</h4>
                                <p className="number">9999-9999-99</p>

                            </div>



                            <div className="each-mode hover-link">
                                <i class="uil uil-envelope "></i>
                                <h4 className="txt email-txt">Email</h4>
                                <p className="email">dummy@gmail.com</p>

                            </div>

                            <div className="each-mode hover-link">
                                <i class="uil uil-map-marker"></i>
                                <h4 className="txt location-txt">Location</h4>
                                <p className="email">New-Delhi 110059</p>

                            </div>


                        </div>

                        <div className="right flex-col">
                            <form className='form'>

                                <div className="name">
                                    <label htmlFor="name-input">Name</label>
                                    <input type="text" id="name-input" />


                                </div>

                                <div className="req-email">

                                    <label htmlFor="email-input">Email</label>
                                    <input type='email' id="email-input" />

                                </div>

                                <div className="title">
                                    <label htmlFor="title-input">Title</label>
                                    <input type="text" id="title-input" />

                                </div>

                                <div className="message">
                                    <label htmlFor="input-message">Message</label>
                                    <textarea maxLength={600} id='input-message' cols="" rows="10"></textarea>

                                </div>
                            </form>

                            <div className="buttons center">
                                <Primbtn value="Submit" icon={<i className="uil uil-message"></i>} />
                                <Primbtn value="Reset" icon={<i class="uil uil-history-alt"></i>} />
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Contact
