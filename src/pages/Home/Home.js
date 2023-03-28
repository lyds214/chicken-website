import React from "react";
import background from "../../assets/img/landing.png";
import "./Home.css";

function Home() {
  return (
    <div>
      <img src={background} alt="background" className="background-img" />
      <div>
        <h1 className="title">
          EXPERIENCE THE PLAYFUL DISHES WITH CHICK IN THE BOX
        </h1>
      </div>
    </div>
  );
}

export default Home;
