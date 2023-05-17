import React from "react";
import cafe from "../assets/img/cafe.png";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'

const About = () => {

  return (
    <Box   
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ml: 8}}
    >
    <Grid container spacing={8} justify="center" alignItems="center">
        <Grid item>
          <img src={cafe} alt="cafe" />
        </Grid>
        <Grid item xs={12} sm container >
          <Grid item xs container spacing={8}>
            <Grid item xs>
              <Typography variant="h2">About Chick In The Box</Typography>
              <Grid item xs>
                <Typography variant="p">Chick in the Box is a locally owned business that is quality driven to provide the best products to our customers.</Typography>
              </Grid>
              <Typography variant="p">We enjoy offering our customers with classic dishes as well as creative and playful dishes that we have conceptualized while keeping fresh and seasonal ingredients in mind.</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>


  );
};

export default About;
