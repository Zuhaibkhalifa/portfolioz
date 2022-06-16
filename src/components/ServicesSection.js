import React from "react";
//icons
import clock from "../images/clock.svg";
//image
import home2 from "../images/home2.png";

const ServicesSection = () => {
  return (
    <div className="service">
      <div className="description">
        <h2>
          High <span>Quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="home2" />
              <h3> Efficient</h3>
            </div>
            <p>Lorem ipsum, </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={clock} alt="home2" />
              <h3> Efficient</h3>
            </div>
            <p>Lorem ipsum, </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={clock} alt="home2" />
              <h3> Efficient</h3>
            </div>
            <p>Lorem ipsum, </p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={clock} alt="home2" />
              <h3> Efficient</h3>
            </div>
            <p>Lorem ipsum, </p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="" />
      </div>
    </div>
  );
};

export default ServicesSection;
