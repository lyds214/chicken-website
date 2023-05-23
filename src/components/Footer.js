import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Box sx={{ backgroundColor: "red", height: 56 }}>
        <Typography align="center" sx={{ paddingTop: 2, color: "white" }}>
          2022 All Rights Reserved
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;
