import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import LandingSection from "../components/LandingSection";
import InfoSection from "../components/InfoSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillSection";
import { SkillsObject } from "../components/SkillSection/SkillsData";
import { AboutObject } from "../components/AboutSection/AboutData";
import { homeObjFour } from "../components/InfoSection/Data";
import { ProjectObject } from "../components/ProjectSection/ProjectData";
import Footer from "../components/footer";
import ProjectSection from "../components/ProjectSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [button, setButton] = useState(false);

  const showButton = () => {
    setButton(!button);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <LandingSection />
      <AboutSection {...AboutObject} />
      <SkillsSection {...SkillsObject} />
      <ProjectSection {...ProjectObject} />
      <InfoSection {...homeObjFour} showButton={showButton} />
      <Footer />
    </>
  );
};

export default Home;
