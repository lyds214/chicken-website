import React from "react";
import beefbowl from "../assets/img/beef-bowl.png";
import bibimbap from "../assets/img/bibimbap.png";
import chicken from "../assets/img/chicken.png";
import cutlet from "../assets/img/cutlet.png";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Card, Grid, Button } from "@mui/material";
import { red } from "@mui/material/colors";

import "../pages/styles/OurSpecialties.css";

const images = [
  {
    url: beefbowl,
    title: "Beef Bowl",
    price: "$14.99",
    width: "25%",
  },
  {
    url: bibimbap,
    title: "Bibimbap",
    price: "$14.99",
    width: "25%",
  },

  {
    url: chicken,
    title: "Chicken",
    price: "$14.99",
    width: "25%",
  },
  {
    url: cutlet,
    title: "Cutlet",
    price: "$14.99",
    width: "25%",
  },
];

const ImageButton = styled(Card)(({ theme }) => ({
  position: "relative",
  height: 929,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const CustomButton = styled(Button)(({ theme }) => ({
  width: 215,
  height: 46,
  borderRadius: 20,
  backgroundColor: "red",
  "&:hover": {
    backgroundColor: red[500],
  },
}));

const OurSpecialties = () => {
  return (
    <section id="specialty">
      <div className="wrapper">
        <div class="gradient">
          <Typography variant="h2" sx={{ fontWeight: "bold", color: "white" }}>
            Our Specialties
          </Typography>
        </div>
      </div>
      <Box
        sx={{ display: "flex", flexWrap: "wrap", minWidth: 300, width: "100%" }}
      >
        {images.map((image) => (
          <ImageButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <ImageBackdrop className="MuiImageBackdrop-root" />
            <Image>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
              >
                <Grid item>
                  <Typography
                    component="span"
                    variant="h3"
                    color="inherit"
                    sx={{
                      position: "relative",
                      p: 4,
                      pt: 2,
                      pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      fontWeight: "bold",
                    }}
                  >
                    {image.title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography component="span" variant="h4">
                    {image.price}
                  </Typography>
                </Grid>
                <Grid item>
                  <CustomButton
                    variant="contained"
                    disableElevation
                    size="large"
                    sx={{ fontWeight: "bold", fontSize: "1em" }}
                  >
                    ORDER NOW
                  </CustomButton>
                </Grid>
              </Grid>
            </Image>
          </ImageButton>
        ))}
      </Box>
    </section>
  );
};

export default OurSpecialties;
