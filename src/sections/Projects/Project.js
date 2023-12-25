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

function Project() {
  const projects = [
    {
      title: "KILOGRAM",
      desc: `A responsive full-stack social media app featuring Google OAuth for seamless authentication. Utilizing React, Tailwind CSS, Redux, Express, Node.js, and MongoDB, it enables users to create accounts, post, like, delete, follow users, and manage their profiles with ease.`,
      thumImg: kilogramvid,

      live: "https://kilogramapp.netlify.app",
      github: "https://github.com/abhishek-403/kilogram-client",

      stackUsed: [
        {
          head: "React",
          logo: react,
        },
        {
          head: "Redux",
          logo: redux,
        },
        {
          head: "Sass",
          logo: scss,
        },
        {
          head: "Sass",
          logo: tailwind,
        },
        {
          head: "Node-js",
          logo: node,
        },
        {
          head: "Express-js",
          logo: express,
        },
        {
          head: "MongoDB",
          logo: mongodb,
        },
      ],
    },
    {
      title: "Your Notes",
      desc: `A full-stack notes app, built with React, Redux, Express.js, and MongoDB. Ensuring secure data storage, it offers seamless signup and login functionalities, facilitating efficient note capture and retrieval for a comprehensive and user-friendly experience.`,
      thumImg: notesgif,

      live: "https://yournewnotes.netlify.app",
      github: "https://github.com/abhishek-403/collegemate",

      stackUsed: [
        {
          live: "https://collegemate.netlify.app/",
          head: "React",
          logo: react,
        },
        {
          head: "Redux",
          logo: redux,
        },
        {
          head: "Sass",
          logo: scss,
        },
        {
          head: "Node-js",
          logo: node,
        },
        {
          head: "Express-js",
          logo: express,
        },
        {
          head: "MongoDB",
          logo: mongodb,
        },
      ],
    },
    {
      title: "How's the weather",
      desc: "Crafted with React, OpenWeather API, and CSS, this weather application presents real-time data elegantly. Its responsive design ensures a seamless and visually appealing user experience for staying informed about current weather conditions.",
      thumImg: weathergif,

      live: "https://howstheweatherapp.netlify.app",
      github: "https://github.com/abhishek-403/weather-app",

      stackUsed: [
        {
          head: "React",
          logo: react,
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
