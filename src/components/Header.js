import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { styled } from "@mui/material/styles";

import Slide from "@mui/material/Slide";

const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "red",
  "&:hover": {
    backgroundColor: "#f44336",
  },
  borderRadius: 16,
  padding: 10,
}));

const Header = (props) => {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "black",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          CHICK IN THE BOX
        </Typography>
        <Button variant="text" sx={{ color: "white" }}>
          MENU
        </Button>
        <Button variant="text" sx={{ color: "white" }}>
          ABOUT US
        </Button>
        <Button variant="text" sx={{ color: "white" }}>
          SPECIALTY
        </Button>
        <ColorButton color="inherit">ORDER ONLINE</ColorButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
