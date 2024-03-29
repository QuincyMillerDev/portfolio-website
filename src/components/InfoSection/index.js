import React from "react";
import {
  Column2,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
} from "./infoElements";
import { Button } from "../ButtonElements";

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  topLineColor,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
  columns,
  textAlign,
  buttonAlign,
  showButton,
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper columns={columns}>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine topLineColor={topLineColor} textAlign={textAlign}>
                  {topLine}
                </TopLine>
                <Heading lightText={lightText} textAlign={textAlign}>
                  {headLine}
                </Heading>
                <Subtitle darkText={darkText} textAlign={textAlign}>
                  {description}
                </Subtitle>
                {showButton ? (
                  <BtnWrap buttonAlign={buttonAlign}>
                    <Button
                      onClick={() =>
                        (window.location = "mailto:quincymiller6589@gmail.com")
                      }
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                      primary={primary ? 1 : 0}
                      dark={dark ? 1 : 0}
                      dark2={dark2 ? 1 : 0}
                    >
                      {buttonLabel}
                    </Button>
                  </BtnWrap>
                ) : (
                  <span></span>
                )}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
