import React from "react";
import cafe from "../../assets/img/cafe.png";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <div className="image-container">
        <img src={cafe} alt="cafe" />
      </div>
      <div className="about-text">
        <h1 style={{ fontFamily: "Poppins-Semibold" }}>
          About Chick in the Box
        </h1>
        <p style={{ fontFamily: "Poppins" }}>
          Chick in the Box is a locally owned business that is quality driven to
          provide the best products to our customers.
        </p>
        <p style={{ fontFamily: "Poppins" }}>
          We enjoy offering our customers with classic dishes as well as
          creative and playful dishes that we have conceptualized while keeping
          fresh and seasonal ingredients in mind.
        </p>
      </div>
    </div>
  );
};

export default About;
