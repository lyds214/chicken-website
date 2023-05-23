import React from "react";
import background from "../../src/assets/img/landing.png";
import "./styles/Home.css";

import { Box, Container, Typography } from "@mui/material";

function Home() {
  return (
    <Container maxWidth={false} disableGutters className="wrapper">
      <Typography className="text" variant="h2" sx={{ fontWeight: "bold" }}>
        EXPERIENCE THE PLAYFUL
      </Typography>
      <Typography className="text-2" variant="h2" sx={{ fontWeight: "bold" }}>
        DISHES WITH CHICK IN THE BOX
      </Typography>
      <img src={background} alt="background" />
    </Container>
  );
}

export default Home;
