import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Business = () => {
  return (
    <Box
      sx={{
        width: 429,
        height: 400,
        backgroundColor: "primary.dark",
        borderRadius: 4,
      }}
    >
      <Box
        sx={{
          paddingTop: 3,
          paddingLeft: 3,
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Chick in the Box
            </Typography>
          </Grid>
          <Grid item>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                (626) 698 - 3150
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="h6">950 E Colorado Blvd. Ste 101</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">Pasadena, CA 91106</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          width: 429,
          height: 368,
          paddingTop: 7,
          paddingLeft: 3,
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Hours
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">Sun: 11AM - 8PM</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">Tues-Sat: 11AM - 9PM</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Closed on Mondays
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Business;
