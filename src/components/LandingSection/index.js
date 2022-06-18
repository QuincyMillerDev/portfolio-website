import React, {useState} from 'react';
import Video from '../../videos/video1.mp4';
import { Button } from '../ButtonElements';
import { 
    LandingContainer, 
    LandingBg, 
    VideoBg,
    LandingContent,
    LandingH1,
    LandingP,
    LandingBtnWrapper,
    ArrowForward,
    ArrowRight
} from './LandingElements';

const LandingSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

  return (
    <LandingContainer id='home'>
        <LandingBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </LandingBg>
        <LandingContent>
            <LandingH1>Hi, I'm Quincy Miller</LandingH1>
            <LandingP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </LandingP>
            <LandingBtnWrapper>
                <Button to="skills" onMouseEnter={onHover} onMouseLeave={onHover}>
                    Skills {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </LandingBtnWrapper>
        </LandingContent>
    </LandingContainer>
  )
}

export default LandingSection;