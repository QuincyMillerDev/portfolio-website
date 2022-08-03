import React from "react";
import {
  SkillsContainer,
  SkillsWrapper,
  Row1,
  Row2,
  TextWrapper,
  TopLine,
  Subtitle,
  Skill1,
  Skill2,
  Skill3,
  Skill4,
  Skill5,
  Skill6,
  Skill7,
  Skill8,
  Skill9,
  Skill10,
  Skill11,
  Skill12,
  Skill13,
  Skill14,
  Skill15,
  Skill16,
  Skill17,
  Skill18,
  SkillsDescription,
  SkillsContent,
} from "./SkillsElements";

import {
  FaPython,
  FaHtml5,
  FaAngular,
  FaReact,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiVisualstudio,
  SiVisualstudiocode,
  SiMicrosoftazure,
  SiPostman,
  SiApachecassandra,
  SiDjango,
  SiAzurefunctions,
} from "react-icons/si";

import { TbCSharp } from "react-icons/tb";
import { AiOutlineConsoleSql } from "react-icons/ai";

const SkillsSection = ({ id }) => {
  return (
    <>
      <SkillsContainer id={id}>
        <SkillsWrapper>
          <Row1>
            <TextWrapper>
              <TopLine>02. Skills</TopLine>
              <Subtitle>
                Here is an array of just a few of the technologies and languages
                I've utilized so far in my professional, academic, and personal
                projects. Most of these technologies were introduced to me over
                the past Summer, where I got to incorporate them in a
                professional environment to develop production-ready applications.
              </Subtitle>
            </TextWrapper>
            <Row2>
              <Skill2>
                <SkillsContent>
                  <SiTypescript />
                  <SkillsDescription>Typescript</SkillsDescription>
                </SkillsContent>
              </Skill2>
              <Skill3>
                <SkillsContent>
                  <FaPython />
                  <SkillsDescription>Python</SkillsDescription>
                </SkillsContent>
              </Skill3>
              <Skill15>
                <SkillsContent>
                  <TbCSharp />
                  <SkillsDescription>C#</SkillsDescription>
                </SkillsContent>
              </Skill15>
              <Skill4>
                <SkillsContent>
                  <SiJavascript />
                  <SkillsDescription>Javascript</SkillsDescription>
                </SkillsContent>
              </Skill4>
              <Skill5>
                <SkillsContent>
                  <FaHtml5 />
                  <SkillsDescription>HTML</SkillsDescription>
                </SkillsContent>
              </Skill5>
              <Skill6>
                <SkillsContent>
                  <SiCss3 />
                  <SkillsDescription>CSS</SkillsDescription>
                </SkillsContent>
              </Skill6>
              <Skill1>
                <SkillsContent>
                  <FaAngular />
                  <SkillsDescription>Angular</SkillsDescription>
                </SkillsContent>
              </Skill1>
              <Skill7>
                <SkillsContent>
                  <FaReact />
                  <SkillsDescription>React</SkillsDescription>
                </SkillsContent>
              </Skill7>
              <Skill8>
                <SkillsContent>
                  <FaDocker />
                  <SkillsDescription>Docker</SkillsDescription>
                </SkillsContent>
              </Skill8>
              <Skill9>
                <SkillsContent>
                  <SiVisualstudio />
                  <SkillsDescription>Visual Studio</SkillsDescription>
                </SkillsContent>
              </Skill9>
              <Skill10>
                <SkillsContent>
                  <SiVisualstudiocode />
                  <SkillsDescription>VSCode</SkillsDescription>
                </SkillsContent>
              </Skill10>
              <Skill11>
                <SkillsContent>
                  <SiMicrosoftazure />
                  <SkillsDescription>Azure</SkillsDescription>
                </SkillsContent>
              </Skill11>
              <Skill12>
                <SkillsContent>
                  <FaGithub />
                  <SkillsDescription>Git & Github</SkillsDescription>
                </SkillsContent>
              </Skill12>
              <Skill13>
                <SkillsContent>
                  <SiPostman />
                  <SkillsDescription>Postman</SkillsDescription>
                </SkillsContent>
              </Skill13>
              <Skill14>
                <SkillsContent>
                  <SiApachecassandra />
                  <SkillsDescription>Cassandra</SkillsDescription>
                </SkillsContent>
              </Skill14>
              <Skill16>
                <SkillsContent>
                  <AiOutlineConsoleSql />
                  <SkillsDescription>SQL</SkillsDescription>
                </SkillsContent>
              </Skill16>
              <Skill17>
                <SkillsContent>
                  <SiDjango />
                  <SkillsDescription>Django</SkillsDescription>
                </SkillsContent>
              </Skill17>
              <Skill18>
                <SkillsContent>
                  <SiAzurefunctions />
                  <SkillsDescription>Azure Functions</SkillsDescription>
                </SkillsContent>
              </Skill18>
            </Row2>
          </Row1>
        </SkillsWrapper>
      </SkillsContainer>
    </>
  );
};

export default SkillsSection;
