import React from "react";
import styled from "styled-components";
import { About } from "../styles";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Quetions <span>FAQ</span>
      </h2>
      <div className="quetion">
        <h4>How do i start</h4>
        <div className="ans">
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="quetion">
        <h4>How do i start</h4>
        <div className="ans">
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
      <div className="quetion">
        <h4>How do i start</h4>
        <div className="ans">
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="faq-line"></div>
      </div>
      <div className="quetion">
        <h4>How do i start</h4>
        <div className="ans">
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    width: 100%;
    background: #edf2f4;
    height: 0.2rem;
    margin: 2rem 0rem;
  }
  .quetion {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .ans {
    padding: 2rem 0rem;
  }
  p {
    padding: 2rem 1rem;
  }
`;

export default FaqSection;
