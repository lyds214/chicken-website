import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import AnchorLink from "react-anchor-link-smooth-scroll";

const ColorButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "red",
  "&:hover": {
    backgroundColor: "#f44336",
  },
  borderRadius: 16,
  padding: 10,
}));

const Header = () => {
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
        <AnchorLink href="#about">
          {" "}
          <Button variant="text" sx={{ color: "white" }}>
            ABOUT US
          </Button>
        </AnchorLink>
        <AnchorLink href="#specialty">
          <Button variant="text" sx={{ color: "white" }}>
            OUR SPECIALTIES
          </Button>
        </AnchorLink>
        <AnchorLink href="#location">
          <Button variant="text" sx={{ color: "white" }}>
            LOCATION
          </Button>
        </AnchorLink>
        <ColorButton color="inherit">ORDER ONLINE</ColorButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
