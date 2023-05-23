import React from "react";
import Business from "../components/Business";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import map from "../assets/img/map.png";

const Location = () => {
  return (
    <section id="location">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{ ml: 30 }}
      >
        <Grid container spacing={20} justify="center" alignItems="center">
          <Grid item>
            <Typography
              variant="h2"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Location
            </Typography>
            <Box sx={{ paddingTop: 2 }}>
              <Business />
            </Box>
          </Grid>
          <Grid item></Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container>
              <Grid item xs>
                <img src={map} alt="cafe" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default Location;
