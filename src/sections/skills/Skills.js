import React from "react";
import "./skills.scss";
import SecHead from "../../components/secHead/SecHead";
import Skill from "../../components/skill/Skill";

import react from "../../assets/react.svg";
import mongodb from "../../assets/mongodb.svg";
import node from "../../assets/node-js.svg";
import js from "../../assets/javascript.svg";
import redux from "../../assets/redux.svg";
import express from "../../assets/express.svg";

import firebase from "../../assets/firebase.svg";
import postgres from "../../assets/postgresqlicon.svg";
import github from "../../assets/githubicon.svg";
import git from "../../assets/giticon.svg";
import postman from "../../assets/postmanlogo.svg";
import nextjs from "../../assets/nextjs.svg";
import tailwind from "../../assets/tailwindlogo.svg";
import kubernets from "../../assets/kubernets.svg";
import docker from "../../assets/docker.svg";
import aws from "../../assets/awsicon2.png";
import ts from "../../assets/tslogo.svg";
function Skills() {
  const dummySkill = [
    {
      heading: "Frontend Developement",
      desc: "1 year+ experience",
      icon: "uil2 uil-brackets-curly skill-icons",
      reports: [
        {
          title: "JavaScript",
          progress: "85%",
          icon: js,
        },
        {
          title: "TypeScript",
          progress: "70%",
          icon: ts,
        },
        {
          title: "React Js",
          progress: "90%",
          icon: react,
        },
        {
          title: "Redux",
          progress: "85%",
          icon: redux,
        },
        {
          title: "Tailwind",
          progress: "85%",
          icon: tailwind,
        },
        {
          title: "Next Js",
          progress: "85%",
          icon: nextjs,
        },
      ],
    },
    {
      heading: "Backend Developement",
      desc: "10 months+ experience",
      icon: "uil2 uil-server skill-icons",
      reports: [
        {
          title: "Node Js",
          progress: "75%",
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
          title: "Firebase",
          progress: "70%",
          icon: firebase,
        },
        {
          title: "PostgreSQL",
          progress: "70%",
          icon: postgres,
        },
      ],
    },
    {
      heading: "Tools that I use",
      desc: "6 months+ experience",
      icon: "uil2 uil-cog skill-icons",
      reports: [
        {
          title: "Github",
          progress: "75%",
          icon: github,
        },
        {
          title: "Postman",
          progress: "80%",
          icon: postman,
        },
        {
          title: "Git",
          progress: "80%",
          icon: git,
        },
       
       
      ],
    },
    {
      heading: "Tech that I am learning",
      desc: "Learning",
      icon: "uil2 uil-book-open skill-icons",
      reports: [
        {
          title: "Docker",
          progress: "80%",
          icon: docker,
        },
        {
          title: "AWS",
          progress: "80%",
          icon: aws,
        },
        {
          title: "Kubernets",
          progress: "75%",
          icon: kubernets,
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
