import React from "react";
import styled from "styled-components";
//icons
import clock from "../images/clock.svg";
//image
import home2 from "../images/home2.png";

//styles
import { About, Description, Image } from "../styles";

const ServicesSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          High <span>Quality</span> services
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="home2" />
              <h3> Efficient</h3>
            </div>
            <p>Lorem ipsum, </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={clock} alt="home2" />
              <h3> Efficient</h3>
            </div>
            <p>Lorem ipsum, </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={clock} alt="home2" />
              <h3> Efficient</h3>
            </div>
            <p>Lorem ipsum, </p>
          </Card>
          <Card>
            <div className="icon">
              <img src={clock} alt="home2" />
              <h3> Efficient</h3>
            </div>
            <p>Lorem ipsum, </p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img src={home2} alt="" />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
  }
  h3 {
    margin-left: 1rem;
    background: #edf2f4;
    color: #2b2d42;
    padding: 1rem;
  }
`;

export default ServicesSection;
