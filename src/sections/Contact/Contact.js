import React, { useRef } from 'react'
import SecHead from '../../components/secHead/SecHead'
import './contact.scss'
import Primbtn from '../../components/Primary btn/Primbtn'
import { useDispatch } from 'react-redux'
import { showtoast } from '../../redux/slices/utilsSlice'
import emailjs from '@emailjs/browser'


function Contact() {
    const name = useRef(null)
    const email = useRef(null)
    const title = useRef(null)
    const message = useRef(null)
    const dispatch = useDispatch()

    async function handleSubmit() {

        if (name.current.value === "" || email.current.value === "" || title.current.value === "" || message.current.value === "") {

            dispatch(showtoast({
                type: 'failure',
                message: 'All fields required!'
            }))
            return;
        }
        const form = {
            name: name.current.value,
            email: email.current.value,
            subject: title.current.value,
            message: message.current.value

        }
        try {
             await emailjs.send("service_uirr5ib", "template_hviv7tl", form,"BfLLGzTUgs3wiNmk6")

            name.current.value = "";
            email.current.value = "";
            title.current.value = "";
            message.current.value = ""

            dispatch(showtoast({
                type: 'success',
                message: 'Form Submitted'
            }))

        } catch (e) {

            dispatch(showtoast({
                type: 'failure',
                message: e
            }))

        }






    }
    function handleReset(e) {
        name.current.value = "";
        email.current.value = "";
        title.current.value = "";
        message.current.value = ""

        dispatch(showtoast({
            type: 'success',
            message: 'Form Reset'
        }))
    }





    return (
        <div id='scroll-contact' data-aos="fade-up" className='contact'>
            <div className="container">
                <div className="content flex-col">
                    <SecHead head="Contact Me" subhead="Get in touch" />

                    <div className="bottom">
                        <div className="left flex-col">
                            


                            <div className="each-mode hover-link">
                                <i className="uil uil-envelope "></i>
                                <h4 className="txt email-txt">Email</h4>
                                <p className="email">abhishek605404@gmail.com</p>

                            </div>

                            <div className="each-mode hover-link">
                                <i className="uil uil-map-marker"></i>
                                <h4 className="txt location-txt">Location</h4>
                                <p className="email">New Delhi</p>

                            </div>


                        </div>

                        <div className="right flex-col">
                            <form onSubmit={handleSubmit} className='form'>

                                <div className="name">
                                    <label htmlFor="name-input">Name</label>
                                    <input autoComplete='off' required ref={name} type="text" id="name-input" />


                                </div>

                                <div className="req-email">

                                    <label htmlFor="email-input">Email</label>
                                    <input autoComplete='off' required ref={email} name="email" type='email' id="email-input" />

                                </div>

                                <div className="title">
                                    <label htmlFor="title-input">Subject</label>
                                    <input autoComplete='off' required ref={title} type="text" id="title-input" />

                                </div>

                                <div className="message">
                                    <label htmlFor="input-message">Message</label>
                                    <textarea autoComplete='off' required ref={message} maxLength={600} id='input-message' cols="" rows="5"></textarea>

                                </div>

                            </form>

                            <div className="buttons center">
                                <div onMouseUp={handleSubmit}>

                                    <Primbtn value="Submit" icon={<i className="uil uil-message"></i>} />
                                </div>
                                <div onMouseUp={handleReset}>

                                    <Primbtn value="Reset" icon={<i className="uil uil-history-alt"></i>} />
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Contact
