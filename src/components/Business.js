import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const Business = () => {
  return (
    <Box
      sx={{
        width: 429,
        height: 340,
        backgroundColor: "primary.dark",
      }}
    >
      <Box
        sx={{
          paddingTop: 2,
          paddingLeft: 2,
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item>
            <Typography variant="h4">Chick in the Box</Typography>
          </Grid>
          <Grid item>
            <Box>
              <Typography variant="h6">(626) 698 - 3150</Typography>
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
          paddingTop: 2,
          paddingLeft: 2,
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Grid item>
            <Typography variant="h4">Hours</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">Sun: 11AM - 8PM</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">Tues-Sat: 11AM - 9PM</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">Closed on Mondays</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Business;
