import React, { useState } from "react";
import chicken from "../assets/img/chicken.png";

const FoodComponent = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <img src={chicken} alt="chicken" onMouseEnter={() => setIsShown(true)} />
      {isShown && <div>Chicken</div>}
    </div>
  );
};

export default FoodComponent;
