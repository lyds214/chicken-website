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
        calendarType="US"
        maxDetail="month"
        // showNavigation={false}
        style={{ color: "white" }}
      />
    </div>
  );
};

export default Menu;
