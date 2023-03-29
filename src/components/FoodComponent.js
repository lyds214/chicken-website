import React, { useState } from "react";
import chicken from "../assets/img/chicken.png";
import "./FoodComponent.css";

const FoodComponent = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div style={{ width: "29.063em", height: "67.5em" }}>
      <img
        src={chicken}
        alt="chicken"
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      />
      {isShown && <div>Hello</div>}
    </div>
  );
};

export default FoodComponent;
