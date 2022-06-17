import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//images
import home2 from "../images/home.png";

const OurWork = () => {
  return (
    <Wrok>
      <Projects>
        <h2>Musically</h2>
        <div className="line"></div>
        <Link>
          <img src={home2} alt="Musically" />
        </Link>
      </Projects>
      <Projects>
        <h2>Musically</h2>
        <div className="line"></div>
        <Link>
          <img src={home2} alt="Musically" />
        </Link>
      </Projects>
      <Projects>
        <h2>Musically</h2>
        <div className="line"></div>
        <Link>
          <img src={home2} alt="Musically" />
        </Link>
      </Projects>
      <Projects>
        <h2>Musically</h2>
        <div className="line"></div>
        <Link>
          <img src={home2} alt="Musically" />
        </Link>
      </Projects>
    </Wrok>
  );
};

const Wrok = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 2rem;
  }
`;
const Projects = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #edf2f4;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default OurWork;
