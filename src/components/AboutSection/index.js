import React from "react";
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Subtitle,
  ImgWrap,
  Img,
  ATag,
} from "./AboutElements";

const AboutSection = ({ id, img, alt, columns }) => {
  return (
    <>
      <AboutContainer id={id}>
        <AboutWrapper columns={columns}>
          <AboutRow>
            <Column1>
              <TextWrapper>
                <TopLine>01. About Me</TopLine>
                <Subtitle>
                  <p>
                    Hi, my name is Quincy and I enjoy building things with code.
                    My passion and experience really started to grow in college
                    when I joined the{" "}
                    <ATag href="https://uconntact.uconn.edu/organization/huskydevelopers">
                      Husky Developers
                    </ATag>{" "}
                    club. Here I got hands-on experience with all sides of
                    software, from web development to machine learning!
                  </p>
                  <br></br>
                  <p>
                    Currently, as a rising junior studying Computer Science and
                    Engineering at <ATag href="https://uconn.edu/">UCONN</ATag>,
                    I am grateful to say that I've already been able to apply my
                    skills at a{" "}
                    <ATag href="https://www.hubbell.com/">
                      massive corporation
                    </ATag>
                    , a{" "}
                    <ATag href="https://hackuconn.com/">
                      university hackathon
                    </ATag>
                    , and{" "}
                    <ATag href="https://github.com/QuincyMillerDev">
                      on my own
                    </ATag>
                    .
                  </p>
                  <br></br>
                  <p>
                    My current focus is at Hubbell, where I work with a team of
                    engineers to build highly scalable webapps and deliver
                    critical information seamlessly and effeciently to a variety
                    of clients.
                  </p>
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </AboutRow>
        </AboutWrapper>
      </AboutContainer>
    </>
  );
};

export default AboutSection;
