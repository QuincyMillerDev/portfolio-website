import React from "react";
import Video from "../../videos/video3.mp4";
import {
  LandingContainer,
  LandingBg,
  VideoBg,
  LandingContent,
  LandingH1,
  LandingP,
  ColorText,
  LandingS1,
} from "./LandingElements";

const LandingSection = () => {
  return (
    <LandingContainer id="home">
      <LandingBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </LandingBg>
      <LandingContent>
        <LandingH1>Hi, my name is</LandingH1>
        <LandingS1>Quincy Miller</LandingS1>
        <LandingP>
          Welcome to my portfolio, a showcase of who I am as a developer. I'm a
          software engineer who specializes in creating advanced digital
          experiences. Currently, I'm actively developing large-scale power-grid
          software solutions at{" "}
          <ColorText href="https://www.hubbell.com/">Hubbell.</ColorText>
        </LandingP>
      </LandingContent>
    </LandingContainer>
  );
};

export default LandingSection;
