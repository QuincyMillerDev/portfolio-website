import React from "react";
import {
  TextWrapper,
  TopLine,
  ProjectContainer,
  ProjectWrapper,
  ProjectRow,
  Column1,
  Subtitle,
  ATag,
} from "../ProjectSection/ProjectElements";

const ProjectSection = ({ id }) => {
  return (
    <>
      <ProjectContainer id={id}>
        <ProjectWrapper>
          <ProjectRow>
            <Column1>
              <TextWrapper>
                <TopLine>03. Projects and Experience</TopLine>
                <Subtitle>
                  <p>
                    For about a year and a half now, I have been designing,
                    developing, and deploying both small and large projects both
                    personally and professionally.
                  </p>
                  <br></br>
                  <p>
                    My first set of projects I completed when I joined the Husky
                    Developers club. Some of these projects included a{" "}
                    <ATag href="https://github.com/QuincyMillerDev/advice-for-devs-webapp">
                      small webpage
                    </ATag>{" "}
                    that generates random strings of advice, a{" "}
                    <ATag href="https://github.com/QuincyMillerDev/weatherapp-js">
                      weatherapp
                    </ATag>{" "}
                    both made in vanilla JS and react, as well as a{" "}
                    <ATag href="https://quincymillerbizcard.netlify.app/">
                      digital business card
                    </ATag>{" "}
                    which was the first the project I deployed.
                  </p>
                  <br></br>
                  <p>
                    At HackUCONN2022 my team and I developed a personal
                    well-being mobile application over the course of 24 hours.
                    The goal in mind was to give the user a safe space to
                    reflect on their day, and track their mental well-being. You
                    can see a short Youtube demo of that{" "}
                    <ATag href="https://www.youtube.com/shorts/pkoTeLkM9Og">
                      here
                    </ATag>
                    .
                  </p>
                  <br></br>
                  <p>
                    Currently, I am working on two of the largest personal
                    projects I have ever tackled, one being the{" "}
                    <ATag href="https://github.com/QuincyMillerDev/portfolio-website">
                      website
                    </ATag>{" "}
                    you are currently navigating, the other being a digital
                    marketplace for the UCONN{" "}
                    <ATag href="https://uconntact.uconn.edu/organization/outingclub">
                      Outing Club
                    </ATag>
                    , which is being built with React, Tailwind, and Django.
                  </p>
                </Subtitle>
              </TextWrapper>
            </Column1>
          </ProjectRow>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default ProjectSection;
