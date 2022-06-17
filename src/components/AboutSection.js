import React from "react";
import home from "../images/home.png";
import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>I work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>Dream</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>True</h2>
          </Hide>
        </div>
        <p>Contact me on related to any web development </p>
        <button>contact me</button>
      </Description>
      <Image>
        <img src={home} alt="the laptop" />
      </Image>
    </About>
  );
};

export default AboutSection;
