import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const Specialties = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid xs={8} style={{ backgroundColor: "red", width: "100%" }}>
          <h1>HEllo</h1>
        </Grid>
        <Grid xs={8} style={{ backgroundColor: "green" }}>
          <h1>bye</h1>
        </Grid>
        <Grid xs={8} style={{ backgroundColor: "blue" }}>
          <h1>bye</h1>
        </Grid>
        <Grid xs={8} style={{ backgroundColor: "purple" }}>
          <h1>bye</h1>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Specialties;
