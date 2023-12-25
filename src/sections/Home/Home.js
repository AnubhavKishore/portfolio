import React from "react";
import "./home.scss";
import profilepic from "../../assets/aboutpic.png";
import Primbtn from "../../components/Primary btn/Primbtn";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll/modules";

import react from "../../assets/react.svg";
import mongodb from "../../assets/mongodb.svg";
import node from "../../assets/node-js.svg";
import js from "../../assets/javascript.svg";
import redux from "../../assets/redux.svg";
import express from "../../assets/express.svg";

import scss from "../../assets/sass.svg";
import firebase from "../../assets/firebase.svg";
import postgres from "../../assets/postgresqlicon.svg";
import github from "../../assets/githubicon.svg";
import git from "../../assets/giticon.svg";
import postman from "../../assets/postmanlogo.svg";
import nextjs from "../../assets/nextjs.svg";
import tailwind from "../../assets/tailwindlogo.svg";
import kafka from "../../assets/kafka.svg";
import kubernets from "../../assets/kubernets.svg";
import docker from "../../assets/docker.svg";
import aws from "../../assets/awsicon2.png";

import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useSelector } from "react-redux";

function Home() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  const darkTheme = useSelector((s) => s.utilsReducer.darkTheme);

  return (
    <>
      <div id="scroll-home" className="Home">
        <Particles
          style={{
            position: "absolute",
            height: "100vh",
          }}
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: {
              enable: false,
              zIndex: 0,
            },
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                },
                onDiv: {
                  elementId: "repulse-div",
                  enable: false,
                  mode: "repulse",
                },
                onHover: {
                  enable: true,
                  mode: "bubble",
                  parallax: {
                    enable: false,
                    force: 60,
                    smooth: 10,
                  },
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 100,
                  duration: 2,
                  opacity: 0.8,
                  size: 20,
                  speed: 3,
                },
                connect: {
                  distance: 80,
                  lineLinked: {
                    opacity: 0.8,
                  },
                  radius: 60,
                },
                grab: {
                  distance: 400,
                  lineLinked: {
                    opacity: 0.9,
                  },
                },

                remove: {
                  quantity: 2,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              lineLinked: {
                blink: false,
                color: "#000",
                consent: false,
                distance: 150,
                enable: false,
                opacity: 0.5,
                width: 1,
              },
              move: {
                attract: {
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
                bounce: false,
                direction: "none",
                enable: true,
                outMode: "out",
                random: false,
                speed: 4,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                limit: 0,
                value: 70,
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.2,
                  speed: 1,
                  sync: false,
                },
                random: true,
                value: 0.5,
              },
              rotate: {
                animation: {
                  enable: true,
                  speed: 25,
                  sync: false,
                },
                direction: "down",
                random: true,
                value: 150,
              },
              shape: {
                character: {
                  fill: false,
                  font: "Verdana",
                  style: "",
                  value: "*",
                  weight: "400",
                },
                image: [
                  {
                    src: `${react}`,
                    width: 40,
                    height: 40,
                  },
                  {
                    src: `${aws}`,
                    width: 40,
                    height: 40,
                  },
                  {
                    src: `${git}`,
                    width: 40,
                    height: 40,
                  },
                  {
                    src: `${github}`,
                    width: 40,
                    height: 40,
                  },
                  {
                    src: `${postman}`,
                    width: 40,
                    height: 40,
                  },
                  {
                    src: `${mongodb}`,
                    width: 40,
                    height: 40,
                  },
                  {
                    src: `${docker}`,
                    width: 40,
                    height: 40,
                  },
                  {
                    src: `${kubernets}`,
                    width: 40,
                    height: 40,
                  },
                  {
                    src: `${nextjs}`,
                    width: 40,
                    height: 40,
                  },
                  {
                    src: `${kafka}`,
                    width: 40,
                    height: 40,
                  },
                  {
                    src: `${postgres}`,
                    width: 40,
                    height: 40,
                  },
                  {
                    src: `${redux}`,
                    width: 40,
                    height: 40,
                  },
                  {
                    src: `${tailwind}`,
                    width: 40,
                    height: 40,
                  },
               
               
                  {
                    src: `${js}`,
                    width: 30,
                    height: 30,
                  },
                  {
                    src: `${express}`,
                    width: 30,
                    height: 30,
                  },
                  {
                    src: `${node}`,
                    width: 40,
                    height: 40,
                  },
               
                  {
                    src: `${scss}`,
                    width: 40,
                    height: 40,
                  },
             
                  {
                    src: `${firebase}`,
                    width: 30,
                    height: 30,
                  },
                ],
                polygon: {
                  sides: 5,
                },
                stroke: {
                  color: "#000000",
                  width: 0,
                },
                type: "image",
              },
              size: {
                animation: {
                  enable: false,
                  minimumValue: 0.1,
                  speed: 20,
                  sync: false,
                },
                random: false,
                value: 25,
              },
            },
            polygon: {
              draw: {
                enable: false,
                lineColor: "#ffffff",
                lineWidth: 0.5,
              },
              move: {
                radius: 10,
              },
              scale: 0.1,
              type: "none",
              url: "",
            },
            background: {
              color: `${darkTheme ? "#00000" : "#fbfbfe"}`,
              // "color": `${ darkTheme? "#191627" : "#fbfbfe"}`,
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "contain",
            },
          }}
        />

        <div className="container">
          <div className="content">
            <div data-aos="fade-right" className="left" id="left-home">
              <div className="details">
                <h1 className="head">Hi, I'm Abhishek Sharma</h1>
                <h4 className="position">
                  I'm{" "}
                  <span id="typewriter">
                    <Typewriter
                      words={["Frontend Developer", "Backend Developer"]}
                      loop={Infinity}
                      cursor
                      cursorStyle="|"
                      typeSpeed={50}
                      deleteSpeed={25}
                    />
                  </span>
                </h4>
                <p className="desc">
                  Passionate undergrad computer science student at Delhi
                  Technological University (DTU). A Full Stack MERN developer
                  with hands-on experience and a solid understanding of web
                  development.
                </p>
              </div>

              <div className="bottom hover-link">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://github.com/abhishek-403"
                      >
                        <i className="uil2 fa-brands fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.linkedin.com/in/abhishek-sharma-84a827212/"
                      >
                        <i className="uil2 fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://twitter.com/abhishek_403"
                      >
                        <i className={`uil2 fa-brands fa-x-twitter`}></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.instagram.com/abhishek._404"
                      >
                        <i
                          className="uil2 fa-brands fa-instagram"
                          id="uil-instagram-alt"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="buttons">
                  <a
                    target="_blanck"
                    href="https://docs.google.com/document/d/1TqYsnkAJf9u_oeFVC06Lq7eV5y5CSA_drl1Qo9tGOsE/edit?usp=sharing"
                  >
                    <Primbtn
                      value="My Resume"
                      icon={<i className="uil uil-bag"></i>}
                    />
                  </a>
                  <Link duration={5} to="scroll-contact" offset={-70}>
                    <Primbtn
                      value="Contact Me"
                      icon={<i className="uil uil-message"></i>}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div data-aos="fade-left" className="right center" id="right-home">
              <div className="profile-img center">
                <img src={profilepic} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
