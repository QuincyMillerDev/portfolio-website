import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaLinkedin } from 'react-icons/fa'
import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

import { FaGithub, FaDiscord, FaTwitch } from 'react-icons/fa'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };


  return (
    <>
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to="/">Link numba 1</FooterLink>
                            <FooterLink to="/">Link numba 2</FooterLink>
                            <FooterLink to="/">link three</FooterLink>
                            <FooterLink to="/">link 5</FooterLink>
                            <FooterLink to="/">COPYRIGHTED</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> Resume </FooterLinkTitle>
                            <FooterLink to="/">Link numba 1</FooterLink>
                            <FooterLink to="/">Link numba 2</FooterLink>
                            <FooterLink to="/">link three</FooterLink>
                            <FooterLink to="/">link 5</FooterLink>
                            <FooterLink to="/">COPYRIGHTED</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to="/">Link numba 1</FooterLink>
                            <FooterLink to="/">Link numba 2</FooterLink>
                            <FooterLink to="/">link three</FooterLink>
                            <FooterLink to="/">link 5</FooterLink>
                            <FooterLink to="/">COPYRIGHTED</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> Resume </FooterLinkTitle>
                            <FooterLink to="/">Link numba 1</FooterLink>
                            <FooterLink to="/">Link numba 2</FooterLink>
                            <FooterLink to="/">link three</FooterLink>
                            <FooterLink to="/">link 5</FooterLink>
                            <FooterLink to="/">COPYRIGHTED</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        Quincy
                    </SocialLogo>
                    <WebsiteRights>Quincy © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target="_blank"
                        aria-label="LinkedIn">
                            <FaLinkedin />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank"
                        aria-label="Github">
                            <FaGithub />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank"
                        aria-label="Discord">
                            <FaDiscord />
                        </SocialIconLink>
                        <SocialIconLink href='/' target="_blank"
                        aria-label="Twitch">
                            <FaTwitch />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
    </>
  )
}

export default Footer