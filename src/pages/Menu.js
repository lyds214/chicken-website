import React, { useState } from "react";
import Calendar from "react-calendar";
import "./styles/Calendar.css";
import { Box, Typography } from "@mui/material";

const Menu = () => {
  return (
    <div>
      <Box
        sx={{
          backgroundColor: "black",
          paddingTop: "3em",
          paddingBottom: "1.5em",
        }}
      >
        <Typography
          variant="h4"
          style={{ color: "white", fontWeight: "bold", marginLeft: "3em" }}
        >
          This month's special menu
        </Typography>
      </Box>
      <Calendar
        prevLabel={null}
        nextLabel={null}
        next2Label={null}
        prev2Label={null}
        calendarType="US"
        maxDetail="month"
        style={{ color: "white" }}
      />
    </div>
  );
};

export default Menu;
