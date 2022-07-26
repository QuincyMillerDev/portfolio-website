import styled from "styled-components";

export const SkillsContainer = styled.div`
  color: #fff;
  background: #030007;

  @media screen and(max-width: 768px) {
    padding: 100px 0;
  }
`;

export const SkillsWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 1000px;
  width: 100%;
  max-width: 1600px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const SkillsRow = styled.div`
  display: flex;
  grid-auto-rows: minmax(auto, 1fr);
  align-items: center;

  @media screen and (max-width: 768px) {
  }
`;

export const Row1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const Row2 = styled.div`
  position: absolute;
  margin-bottom: 15px;
  padding: 0 15px;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  max-width: 500px;
  padding-top: 0;
  padding-bottom: 30px;
  margin-top: -400px;
  position: relative;
`;

export const TopLine = styled.p`
  color: #a11cff;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  line-height: 24px;
  color: #fff;
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

export const SkillsButton = styled.button`
  justify-content: center;
  background-color: #030007;
  border-radius: 5px;
  border: 2px solid #6b00b8;
  box-sizing: border-box;
  color: #a11fff;
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
  outline: none;
  padding: 0.5rem 1.75rem;
  position: relative;
  text-align: center;
  text-decoration: none;
  vertical-align: baseline;
  white-space: nowrap;

  &:hover {
    background-color: rgba(209, 173, 255, 0.55);
    color: white;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const SkillsIcon = styled.a`
  color: #fff;
  font-size: 24px;
`;
