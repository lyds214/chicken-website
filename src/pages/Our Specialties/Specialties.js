import React from "react";
import "../Our Specialties/Specialties.css";

// https://www.w3schools.com/howto/howto_css_three_columns.asp

const Specialties = () => {
  return (
    <div className="row">
      <div className="column" style={{ "background-color": "#aaa" }}>
        {/* <img src={bibimbap} alt="bibimbap-image" /> */}
        <h1>Hello</h1>
      </div>
      <div className="column" style={{ "background-color": "#bbb" }}>
        <h1>HEllo</h1>
      </div>
      <div className="column" style={{ "background-color": "#ccc" }}>
        <h1>Hello</h1>
      </div>
      <div className="column" style={{ "background-color": "red" }}>
        <h1>HEllo</h1>
      </div>
    </div>
  );
};

export default Specialties;
