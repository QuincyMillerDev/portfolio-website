import React from "react";
import {
  TextWrapper,
  TopLine,
  ProjectContainer,
  ProjectWrapper,
  ProjectRow,
  Column1,
  Subtitle,
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
                <Subtitle></Subtitle>
              </TextWrapper>
            </Column1>
          </ProjectRow>
        </ProjectWrapper>
      </ProjectContainer>
    </>
  );
};

export default ProjectSection;
