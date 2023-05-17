import React from "react";
import cafe from "../../assets/img/cafe.png";
import "./About.css";

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';


const About = () => {
  return (
   <Grid container spacing={2}>
        <Grid item>
          <img src={cafe} alt="cafe" />
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container spacing={2}>
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
    // <Grid container spacing={2}>
    //   <Grid item>
    //     <img src={cafe} alt="cafe" />
    //   </Grid>
    //   <Grid item container>
    //     <Typography variant="h2">About Chick In The Box</Typography>
    //   </Grid>
    //   <Grid item>
    //     <Typography variant="p">Chick in the Box is a locally owned business that is quality driven to provide the best products to our customers.</Typography>
    //   </Grid>
    //   <Grid item>
    //     <Typography variant="p">We enjoy offering our customers with classic dishes as well as creative and playful dishes that we have conceptualized while keeping fresh and seasonal ingredients in mind.</Typography>
    //   </Grid>
    // </Grid>

  );
};

export default About;
