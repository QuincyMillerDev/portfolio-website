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
            Welcome to my portfolio, a showcase of who I am as a developer. I'm a software engineer who specializes in creating advanced digital experiences. Currently, I'm actively developing large-scale power-grid software solutions at Hubbell.
            </LandingP>
            <LandingBtnWrapper>
                <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover}
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-78}
                >
                    Let's get started {hover ? <ArrowForward /> : <ArrowRight/>}
                </Button>
            </LandingBtnWrapper>
        </LandingContent>
    </LandingContainer>
  )
}

export default LandingSection;