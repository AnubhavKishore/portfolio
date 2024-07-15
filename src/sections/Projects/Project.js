import React from "react";
import "./project.scss";
import SecHead from "../../components/secHead/SecHead";
import EachProject from "../../components/Each-proj/EachProject";


import kilogramvid from "../../assets/Kilogramvid.mp4";

import notesgif from "../../assets/yournewnotesvid.mp4";
import weathergif from "../../assets/howstheweathervid.mp4";
import "glider-js/glider.min.css";

import react from "../../assets/react.svg";
import mongodb from "../../assets/mongodb.svg";
import node from "../../assets/node-js.svg";
import js from "../../assets/javascript.svg";
import redux from "../../assets/redux.svg";
import express from "../../assets/express.svg";
import css from "../../assets/css.svg";
import scss from "../../assets/sass.svg";
import tailwind from "../../assets/tailwindlogo.svg";
import html from "../../assets/html.svg";
import bootstrap from "../../assets/bootstrap.svg";




function Project() {
  const projects = [
    {
      title: "Simon Game",
      // desc: `A full-stack notes app, built with React, Redux, Express.js, and MongoDB. Ensuring secure data storage, it offers seamless signup and login functionalities, facilitating efficient note capture and retrieval for a comprehensive and user-friendly experience.`,
      desc: `A classic memory and pattern recognisation game played in the US, built with HTML, CSS, Javascript, Tailwind. Ensuring the user input and increase the level of the game.Usage of event listeners,sound handling, animation, keyboard support and volume control.`,
      thumImg: notesgif,

      // live: "https://yournewnotes.netlify.app",
      // github: "https://github.com/abhishek-403/collegemate",

      stackUsed: [

        {
          head: "HTML",
          logo: html,
        }, 
        {
          head: "CSS",
          logo: css,
        },
        {
          head: "Javascript",
          logo: js,
        },
        {
          head: "Tailwind",
          logo: tailwind,
        },
        // {
        //   live: "https://collegemate.netlify.app/",
        //   head: "React",
        //   logo: react,
        // },
        // {
        //   head: "Redux",
        //   logo: redux,
        // },
        // {
        //   head: "Sass",
        //   logo: scss,
        // },
        // {
        //   head: "Node-js",
        //   logo: node,
        // },
        // {
        //   head: "Express-js",
        //   logo: express,
        // },
        // {
        //   head: "MongoDB",
        //   logo: mongodb,
        // },
      ],
    },
    {
      title: "Drum Kit",
      desc: "A fun website to play with the different types of drum.Built with html, css, javascript.Usage of click, keypress,random functions of JS. Stylised design and easy to use for every user.",
      thumImg: weathergif,

      // live: "https://howstheweatherapp.netlify.app",
      // github: "https://github.com/abhishek-403/weather-app",

      stackUsed: [
        {
          head: ":HTML",
          logo: html,
        },
        {
          head: "Javascript",
          logo: js,
        },
        {
          head: "CSS",
          logo: css,
        },
      ],
    },
    {
      title: "MapMyTrip",
      desc: `The Traveling Tracker Project is a dynamic web application built with PostgreSQL and JavaScript, designed to help users log and visualize their travel experiences. Users can pin visited locations on an interactive map, track their journey details, and share travel stories seamlessly.
      `,
      thumImg: kilogramvid,

      // live: "https://kilogramapp.netlify.app",
      // github: "https://github.com/abhishek-403/kilogram-client",

      stackUsed: [
        // {
        //   head: "HTML", 
        //   logo: html,
        // }, 
        // {
        //   head: "CSS",
        //   logo: css,
        // }, 
        // {
        //   head: "Bootstrap", 
        //   logo: bootstrap,
        // },
        {
          head: "Javascript",
          logo: js,
        },
        {
          head: "Tailwind",
          logo: tailwind,
        },
        // {
        //   head: "React",
        //   logo: react,
        // },
        // {
        //   head: "Redux",
        //   logo: redux,
        // },
        // {
        //   head: "Sass",
        //   logo: scss,
        // },
        // {
        //   head: "Sass",
        //   logo: tailwind,
        // },
        // {
        //   head: "Node-js",
        //   logo: node,
        // },
        // {
        //   head: "Express-js",
        //   logo: express,
        // },
        // {
        //   head: "MongoDB",
        //   logo: mongodb,
        // },
      ],
    },
  ];

  return (
    <div id="scroll-proj" data-aos="fade-up" className="project">
      <div className="container">
        <div className="content">
          <SecHead head="My Projects" subhead="Most recent work" />

          <div className="slider center">
            {projects.map((item, i) => {
              return <EachProject idx={i} project={item} key={i} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
