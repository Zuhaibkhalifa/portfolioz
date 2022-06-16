import React from "react";
import home from "../images/home.png";
import styled from "styled-components";

const AboutSection = () => {
  return (
    <About>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>WE work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>Dream</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>True</h2>
          </div>
        </div>
        <p>Contact me on related to any web development </p>
        <button>contact me</button>
      </div>
      <div className="image">
        <img src={home} alt="the laptop" />
      </div>
    </About>
  );
};

//styles here javascript

const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

export default AboutSection;
