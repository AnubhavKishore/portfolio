import React from 'react';
import './project.scss';
import SecHead from '../../components/secHead/SecHead';
import EachProject from '../../components/Each-proj/EachProject';

import kilogramgif from '../../assets/kilogramgif.gif'
import notesgif from '../../assets/notesgif.gif'
import weathergif from '../../assets/weathergif.gif'
import 'glider-js/glider.min.css';

import react from '../../assets/react.svg'
import mongodb from '../../assets/mongodb.svg'
import node from '../../assets/node-js.svg'
import js from '../../assets/javascript.svg'
import redux from '../../assets/redux.svg'
import express from '../../assets/express.svg'
import css from '../../assets/css.svg'
import scss from '../../assets/sass.svg'




function Project() {
    const projects = [
        {
            title: "KILOGRAM",
            desc:`Welcome to our cutting-edge website known as KILOGRAM, meticulously crafted with React, Redux, Express-js, Sass, Node-js and MongoDB. Experience unparalleled performance, seamless user interactions, and robust data storage, all harmoniously synchronized for an exquisite online journey.
            Functionalities include Create Post, Like a post, Follow user, Create your profile with an avatar, Edit profile, Logout, Login and Signup.`,
            thumImg: kilogramgif,

            live: "https://kilogramapp.netlify.app",
            github: "https://github.com/abhishek-403/kilogram-client",


            stackUsed: [{
                head: "React",
                logo: react
            },
            {
                head: "Redux",
                logo: redux
            },
            {
                head: "Sass",
                logo: scss
            },
            {
                head: "Node-js",
                logo: node
            },
            {
                head: "Express-js",
                logo: express
            },
            {
                head: "MongoDB",
                logo: mongodb
            }
            ]

        },
        {
            title: "Your Notes",
            desc: `Introducing our ingenious notes app, revolutionizing organization with its React, Redux, Express-js, and MongoDB architecture. Seamlessly sign up, login, and enjoy persistent data storage, empowering you to effortlessly capture, access, and manage your notes with unmatched convenience and reliability.
            Functionalities include Create note, Edit note, Delete note, Logout, Login and Signup.`,
            thumImg: notesgif,


            live: "https://yournewnotes.netlify.app",
            github: "https://github.com/abhishek-403/collegemate",

            stackUsed: [{
                live: "https://collegemate.netlify.app/",
                head: "React",
                logo: react
            },
            {
                head: "Redux",
                logo: redux
            },
            {
                head: "Sass",
                logo: scss
            },
            {
                head: "Node-js",
                logo: node
            },
            {
                head: "Express-js",
                logo: express
            },
            {
                head: "MongoDB",
                logo: mongodb
            }
            ]

        },
        {
            title: "How's the weather",
            desc: "Indulge in the epitome of weather exploration through our exceptional app. Powered by the dynamic trio of React and open source API \"Open Weather \", it offers unparalleled precision, immersive visuals, and seamless user engagement.",
            thumImg: weathergif,


            live: "https://howstheweatherapp.netlify.app",
            github: "https://github.com/abhishek-403/weather-app",

            stackUsed: [{
                head: "React",
                logo: react
            },
            {
                head: "Javascript",
                logo: js
            },
            {
                head: "CSS",
                logo: css
            }
            ]

        },
       
    ]





    return (
        <div id='scroll-proj' data-aos="fade-up" className='project'>
            <div className="container">
                <div className="content">
                    <SecHead head="My Projects" subhead="Most recent work" />


                    <div className="slider center">


                        {
                            projects.map((item, i) => {
                                return (
                                    <EachProject idx={i} project={item} key={i} />
                                )
                            })
                        }
                    </div>


                </div>
            </div>
        </div>


    )
}

export default Project
