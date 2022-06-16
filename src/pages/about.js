import React from "react";

import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import Nav from "../components/Nav";

const About = () => {
  return (
    <>
      <Nav />;
      <AboutSection />;
      <ServicesSection />;
      <FaqSection />;
    </>
  );
};

export default About;
