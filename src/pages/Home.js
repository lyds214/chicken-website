import React from "react";
import background from "../assets/landing-page.png";
import "./Home.css";

function Home() {
  return (
    <div className="image-container">
      <img className="image-container" src={background} alt="background" />
      <div className="text-container">
        <h1>experience the playful dishes with chick in the box</h1>
      </div>
    </div>
  );
}

export default Home;
