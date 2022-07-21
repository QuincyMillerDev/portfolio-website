import React from 'react';
import Video from '../../videos/video2.mp4';
import { 
    LandingContainer, 
    LandingBg, 
    VideoBg,
    LandingContent,
    LandingH1,
    LandingP,
    ColorText
} from './LandingElements';

const LandingSection = () => {

  return (
    <LandingContainer id='home'>
        <LandingBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </LandingBg>
        <LandingContent>
            <LandingH1>Hi, I'm Quincy Miller</LandingH1>
            <LandingP>
                Welcome to my portfolio, a showcase of who I am as a developer. I'm a software engineer who specializes in creating advanced digital experiences. Currently, I'm actively developing large-scale power-grid software solutions at 
                <ColorText> Hubbell.</ColorText>
            </LandingP>
        </LandingContent>
    </LandingContainer>
  )
}

export default LandingSection;