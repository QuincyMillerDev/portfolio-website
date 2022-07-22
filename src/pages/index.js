import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import LandingSection from "../components/LandingSection";
import InfoSection from "../components/InfoSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillSection";
import { SkillsObject } from "../components/SkillSection/SkillsData";
import { AboutObject } from "../components/AboutSection/AboutData";
import { homeObjThree, homeObjFour } from "../components/InfoSection/Data";
import Footer from "../components/footer";

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
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} showButton={showButton} />
      <Footer />
    </>
  );
};

export default Home;
