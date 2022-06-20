import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import pdf from '../../static/Quincy Miller - Resume.pdf'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements';


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY > 78) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
    }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const onResumeClick = () => {
    window.open(pdf);
  }

  return (
    <>
      <IconContext.Provider value={{ color: '#fff'}}>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>Quincy</NavLogo>
                <MobileIcon onClick={toggle}>
                  <FaBars />
                </MobileIcon>
                <NavMenu>
                  <NavItem>
                    <NavLinks to="about" 
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-78}
                    >
                      About
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="skills"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-78}
                    >
                      Skills
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="projects"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-78}
                    >
                      Projects
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks to="contact"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-78}
                    >
                      Contact
                    </NavLinks>
                  </NavItem>
                </NavMenu>
                <NavBtn>
                  <NavBtnLink  to="/" onClick={onResumeClick}>Resume</NavBtnLink>
                </NavBtn>
            </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar