import styled from "styled-components";

export const ProjectContainer = styled.div`
  color: #fff;
  background: #f5d6ff;

  @media screen and(max-width: 768px) {
    padding: 100px 0;
  }
`;

export const ProjectWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 1000px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const ProjectRow = styled.div`
  display: flex;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: "a b";

  @media screen and (max-width: 768px) {
    grid-template-areas: "a b";
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: "a";
`;

export const TextWrapper = styled.div`
  max-width: 500px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: #020d12;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  text-align: center;
`;

export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #010606;
  text-align: center;
`;

export const ATag = styled.a`
  display: inline-block;
  position: relative;
  font-size: 18px;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  font-weight: 600;
  line-height: 1.5;
  transition: var(--transition);
  &:hover,
  &:focus {
    color: #a11fff;
  }
`;
