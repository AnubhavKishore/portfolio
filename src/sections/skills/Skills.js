import React from "react";
import SecHead from "../../components/secHead/SecHead";
import Skill from "../../components/skill/Skill";
import "./skills.scss";

import express from "../../assets/express.svg";
import js from "../../assets/javascript.svg";
import node from "../../assets/node-js.svg";
import react from "../../assets/react.svg";

import aws from "../../assets/awsicon2.png";
import docker from "../../assets/docker.svg";
import github from "../../assets/githubicon.svg";
import next from "../../assets/nextjs.svg"
import tslogo from "../../assets/tslogo.svg"
import appwrite from "../../assets/appwrite.svg"
import git from "../../assets/giticon.svg";
import mongodb from "../../assets/mongodb.svg"
import kubernets from "../../assets/kubernets.svg";
import postman from "../../assets/postmanlogo.svg";
import tailwind from "../../assets/tailwindlogo.svg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import redux from "../../assets/redux.svg"
import bootstrap from "../../assets/bootstrap.svg";
import postgre from "../../assets/postgresqlicon.svg";




function Skills() {
  const dummySkill = [
    {
      heading: "Frontend Developement",
      desc: "7 months+ experience",
      icon: "uil2 uil-brackets-curly skill-icons",
      reports: [
        // {
        //   title: "HTML",
        //   progress: "90%",
        //   icon: html,
        // },
        // {
        //   title: "CSS",
        //   progress: "85%",
        //   icon: css,
        // },
        // {
        //   title: "HTML",
        //   progress: "90%",
        //   icon: html
        // },
        // {
        //   title: "CSS",
        //   progress: "85%",
        //   icon: css
        // },
        // {
        //   title: "Bootstrap",
        //   progress: "90%",
        //   icon: bootstrap
        // },
        {
          title: "JavaScript",
          progress: "85%",
          icon: js,
        },
        {
          title: "React Js",
          progress: "75%",
          icon: react,
        },
        // {
        //   title: "TypeScript",
        //   progress: "70%",
        //   icon: ts,
        // },
        
        {
          title: "Redux",
          progress: "80%",
          icon: redux,
        },
        {
          title: "Tailwind",
          progress: "80%",
          icon: tailwind,
        },
        {
          title: "Bootstrap",
          progress: "90%",
          icon: bootstrap
        },
        // {
        //   title: "React Js",
        //   progress: "60%",
        //   icon: react,
        // },
        
        // {
        //   title: "Next Js",
        //   progress: "80%",
        //   icon: nextjs,
        // },
      ],
    },
    {
      heading: "Backend Developement",
      desc: "3.5 months+ experience",
      icon: "uil2 uil-server skill-icons",
      reports: [
        {
          title: "Node Js",
          progress: "70%",
          icon: node,
        },
        {
          title: "Express",
          progress: "80%",
          icon: express,
        },
        
        {
          title: "MongoDB",
          progress: "80%",
          icon: mongodb,
        },
        {
          title: "Appwrite",
          progress: "75%",
          icon: appwrite,
        },
        // {
        //   title: "Firebase",
        //   progress: "70%",
        //   icon: firebase,
        // },
        {
          title: "PostgreSQL",
          progress: "80%",
          icon: postgre,
        },
      ],
    },
    {
      heading: "Tools that I use",
      desc: "1 month+ experience",
      icon: "uil2 uil-cog skill-icons",
      reports: [
        {
          title: "Github",
          progress: "85%",
          icon: github,
        },
        {
          title: "Postman",
          progress: "70%",
          icon: postman,
        },
        {
          title: "Git",
          progress: "75%",
          icon: git,
        },
       
       
      ],
    },
    {
      heading: "Tech that I am learning",
      desc: "Learning",
      icon: "uil2 uil-book-open skill-icons",
      reports: [
        
        // {
        //   title: "PostgreSQL",
        //   progress: "10%", 
        //   icon: postgre,
        // },
        // {
        //   title: "React Js",
        //   progress: "20%",
        //   icon: react,
        // },
        {
            title: "Next Js",
            progress: "30%",
            icon: next,
        },
        {
            title: "TypeScript",
            progress: "40%",
            icon: tslogo,
        },
             
       
       
      ],
    },
  ];

  return (
    <div id="scroll-skills" data-aos="fade-up" className="skills">
      <div className="container">
        <div className="content">
          <SecHead head="Skills" subhead="My technical levels" />
          <div className="all-skills">
            {dummySkill.map((item, i) => {
              return <Skill idx={i} key={i} content={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
