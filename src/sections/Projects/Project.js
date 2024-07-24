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
import next from "../../assets/nextjs.svg"
import redux from "../../assets/redux.svg";
import appwrite from "../../assets/appwrite.svg"
import express from "../../assets/express.svg";
import css from "../../assets/css.svg";
import scss from "../../assets/sass.svg";
import tslogo from "../../assets/tslogo.svg"
import tailwind from "../../assets/tailwindlogo.svg";
import postgre from "../../assets/postgresqlicon.svg"
import html from "../../assets/html.svg";
import bootstrap from "../../assets/bootstrap.svg";




function Project() {
  const projects = [
    {
      title: "TechTalkToday",
      // desc: `A full-stack notes app, built with React, Redux, Express.js, and MongoDB. Ensuring secure data storage, it offers seamless signup and login functionalities, facilitating efficient note capture and retrieval for a comprehensive and user-friendly experience.`,
      desc: `Leveraged ReactJS for a performant and user-friendly frontend, ensuring a seamless user experience. Implemented Appwrite for robust backend functionalities, including secure user authentication (sign-up, login, logout), efficient database management for news articles, and scalable file management for media content.`,
      thumImg: notesgif,

      live: "https://tech-talk-today.vercel.app/",
      github: "https://github.com/AnubhavKishore/TechTalkToday",

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
        //   head: "Javascript",
        //   logo: js,
        // },
        {
          // live: "https://collegemate.netlify.app/",
          head: "React",
          logo: react,
      },
      {
        head: "Appwrite",
        logo: appwrite,
      },
      {
        head: "Javascript",
        logo: js,
      },
      {
          head: "Redux",
          logo: redux,
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
      title: "MusicalMinds",
      desc: "Utilized NextJS for efficient server-side rendering, ensuring a fast and dynamic user experience and Employed TypeScript for improved code maintainability and type safety.Leveraged Aceternity UI, a collection of modern and visually-appealing React components built with Tailwind CSS and Framer Motion. ",
      thumImg: weathergif,

      // live: "https://howstheweatherapp.netlify.app",
      github: "https://github.com/AnubhavKishore/MusicalMinds",

      stackUsed: [
        // {
        //   head: ":HTML",
        //   logo: html,
        // },
        
        {
          head: "NextJs",
          logo: next,
        },
        {
          head: "Typescript",
          logo: tslogo,
        },
        {
          head: "Tailwind",
          logo: tailwind,
        },
        {
            head: "Javascript",
            logo: js,
        },

        // {
        //   head: "CSS",
        //   logo: css,
        // },
      ],
    },
    {
      title: "MapMyTrip",
      desc: `The Traveling Tracker Project is a dynamic web application built with PostgreSQL and JavaScript, designed to help users log and visualize their travel experiences. Users can pin visited locations on an interactive map, track their journey details, and share travel stories seamlessly.
      `,
      thumImg: kilogramvid,

      // live: "https://kilogramapp.netlify.app",
      github: "https://github.com/AnubhavKishore/MapMyTrip",

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
          head: "Postgre",
          logo: postgre,
        },
        {
          head: "Tailwind",
          logo: tailwind,
        },
        {
            head: "CSS",
            logo: css,
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
