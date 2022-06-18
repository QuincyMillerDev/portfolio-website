import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import LandingSection from '../components/LandingSection/index';
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
    <Navbar toggle={toggle} />
    <LandingSection />
    <InfoSection {...homeObjOne}/>
    </>
  );
};

export default Home;