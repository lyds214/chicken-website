import React, { useState } from "react";
import chicken from "../assets/img/chicken.png";
import "./FoodComponent.css";

const FoodComponent = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="container" style={{ width: "29.063em", height: "67.5em" }}>
      <img src={chicken} alt="chicken" onMouseEnter={() => setIsShown(true)} />
      {isShown && (
        <div className="centered">
          <p>Chicken</p>
          <p style={{ fontWeight: "bold" }}>$14.99</p>
          <button>ORDER NOW</button>
        </div>
      )}
    </div>
  );
};

export default FoodComponent;
