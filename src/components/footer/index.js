import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

import { FaGithub, FaDiscord, FaTwitch } from "react-icons/fa";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <SocialMedia>
            <SocialMediaWrap>
              <SocialLogo to="/" onClick={toggleHome}>
                Quincy
              </SocialLogo>
              <WebsiteRights>
                Quincy © {new Date().getFullYear()} All rights reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink
                  href="https://www.linkedin.com/in/quincy-miller-414991220"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink
                  href="https://github.com/QuincyMillerDev"
                  target="_blank"
                  aria-label="Github"
                >
                  <FaGithub />
                </SocialIconLink>
                <SocialIconLink
                  href="https://discord.gg/YESS8hm3Py"
                  target="_blank"
                  aria-label="Discord"
                >
                  <FaDiscord />
                </SocialIconLink>
                <SocialIconLink
                  href="https://www.twitch.tv/cooliobeans"
                  target="_blank"
                  aria-label="Twitch"
                >
                  <FaTwitch />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
