import React, { useState } from "react";
import {
  SkillsContainer,
  SkillsWrapper,
  SkillsRow,
  Column1,
  TextWrapper,
  TopLine,
  Subtitle,
} from "./SkillsElements";
import { useTransition, animated } from "react-spring";
import "./SkillsStyles.css";

const SkillsSection = ({ id, img, alt, columns }) => {
  const [items, setItems] = useState(false);
  const transition = useTransition(items, {
    from: { x: -100, y: 800, opacity: 0, width: 10, height: 10 },
    enter: (item) => async (next) => {
      await next({ y: item.y, opacity: 1, delay: item.delay });
      await next({ x: 0, width: 100, height: 100 });
    },
    leave: { x: 100, y: 800, opacity: 0 },
  });
  return (
    <>
      <SkillsContainer id={id}>
        <SkillsWrapper columns={columns}>
          <SkillsRow>
            <Column1>
              <TextWrapper>
                <TopLine>02. Skills</TopLine>
                <Subtitle>
                  Here is an array of all the technologies and languages I've
                  utilized, in order of increased experience from left to right.
                </Subtitle>
              </TextWrapper>
            </Column1>
            <button
              onClick={() => {
                setItems((v) =>
                  v.length
                    ? []
                    : [
                        { y: -50, delay: 200 },
                        { y: 0, delay: 400 },
                        { y: 50, delay: 600 },
                      ]
                );
              }}
            >
              {items.length ? "un-mount" : "mount"}
            </button>
            <div className="container">
              {transition((style, item) =>
                item ? <animated.div style={style} className="item" /> : ""
              )}
            </div>
          </SkillsRow>
        </SkillsWrapper>
      </SkillsContainer>
    </>
  );
};

export default SkillsSection;
