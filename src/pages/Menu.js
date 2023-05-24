import React, { useState } from "react";
import Calendar from "react-calendar";
import styled from "styled-components";
import "./styles/Calendar.css";

const Menu = () => {
  const CalendarContainer = styled.div`
    /* ~~~ container styles ~~~ */
    /* ~~~ navigation styles ~~~ */
    /* ~~~ label styles ~~~ */
    /* ... */

    /* ~~~ button styles ~~~ */
    button {
      border: 0;
      border-radius: 3px;
      color: white;
    }

    .react-calendar__month-view__days__day--neighboringMonth {
      opacity: 0.5;
      color: #818589;
    }
  `;
  return (
    <div>
      <CalendarContainer>
        <Calendar
          prevLabel={null}
          nextLabel={null}
          next2Label={null}
          prev2Label={null}
          calendarType="US"
          maxDetail="month"
          style={{ color: "white" }}
        />
      </CalendarContainer>
    </div>
  );
};

export default Menu;
