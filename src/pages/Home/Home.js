import React from "react";
import background from "../../assets/img/landing.png";
import "./Home.css";

function Home() {
  return (
    <div>
      <img src={background} alt="background" className="background-img" />
    </div>
  );
}

export default Home;
