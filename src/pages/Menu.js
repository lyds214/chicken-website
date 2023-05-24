import React, { useState } from "react";
import Calendar from "react-calendar";
import "./styles/Calendar.css";

const Menu = () => {
  return (
    <div>
      <Calendar
        prevLabel={null}
        nextLabel={null}
        next2Label={null}
        prev2Label={null}
        maxDetail="month"
      />
    </div>
  );
};

export default Menu;
