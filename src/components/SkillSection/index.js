import React, { useState } from "react";
import {
  SkillsContainer,
  SkillsWrapper,
  SkillsRow,
  Row1,
  Row2,
  TextWrapper,
  TopLine,
  Subtitle,
  SkillsButton,
  ButtonWrapper,
  SkillsIcon,
} from "./SkillsElements";
import { useTransition, animated } from "react-spring";
import "./SkillsStyles.css";

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
  SiMicrosoftsqlserver,
  SiDjango,
} from "react-icons/si";

import { TbCSharp } from "react-icons/tb";
import { AiOutlineConsoleSql } from "react-icons/ai";

const SkillsSection = ({ id }) => {
  const [item, setItems] = useState(false);
  const transition = useTransition(item, {
    key: item.key,
    from: {
      x: -600,
      y: 800,
      opacity: 0,
      width: 10,
      height: 10,
    },
    enter: (item) => async (next) => {
      await next({ y: item.y, opacity: 0, delay: item.delay });
      await next({ x: item.x, opacity: 1, width: 100, height: 100 });
    },
    leave: { x: 500, y: 800, opacity: 0 },
  });
  return (
    <>
      <SkillsContainer id={id}>
        <SkillsWrapper>
          <SkillsRow>
            <Row1>
              <TextWrapper>
                <TopLine>02. Skills</TopLine>
                <Subtitle>
                  Here is an array of all the technologies and languages I've
                  utilized, in order of increased experience from left to right.
                </Subtitle>
              </TextWrapper>
              <ButtonWrapper>
                <SkillsButton
                  onClick={() => {
                    setItems((v) =>
                      v.length
                        ? []
                        : [
                            { x: -360, y: -100, delay: 100 },
                            { x: -360, y: -50, delay: 100 },
                            { x: -360, y: 0, delay: 100 },

                            { x: -160, y: -400, delay: 200 },
                            { x: -160, y: -350, delay: 200 },
                            { x: -160, y: -300, delay: 200 },

                            { x: 40, y: -700, delay: 300 },
                            { x: 40, y: -650, delay: 300 },
                            { x: 40, y: -600, delay: 300 },

                            { x: 240, y: -1000, delay: 400 },
                            { x: 240, y: -950, delay: 400 },
                            { x: 240, y: -900, delay: 400 },

                            { x: 440, y: -1300, delay: 500 },
                            { x: 440, y: -1250, delay: 500 },
                            { x: 440, y: -1200, delay: 500 },

                            { x: 640, y: -1600, delay: 600 },
                            { x: 640, y: -1550, delay: 600 },
                            { x: 640, y: -1500, delay: 600 },
                          ]
                    );
                  }}
                >
                  Show Skills
                </SkillsButton>
              </ButtonWrapper>
              <Row2>
                <div className="container">
                  {transition.map(({ item, props, key, style }) =>
                    item ? (
                      <animated.div style={style} className="item">
                        {this.props.icons.map((Icon) => {
                          return <Icon />;
                        })}
                      </animated.div>
                    ) : (
                      ""
                    )
                  )}
                </div>
              </Row2>
            </Row1>
          </SkillsRow>
        </SkillsWrapper>
      </SkillsContainer>
    </>
  );
};

export default SkillsSection;
