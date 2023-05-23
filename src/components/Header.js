import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button, Box } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { red } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

import Slide from "@mui/material/Slide";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(red[500]),
  backgroundColor: red[500],
  "&:hover": {
    backgroundColor: red[700],
  },
  borderRadius: 16,
  padding: 10,
}));

function HideOnScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Header = (props) => {
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
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
            <Button variant="text">MENU</Button>
            <Button variant="text">ABOUT US</Button>
            <Button variant="text">SPECIALTY</Button>
            <ColorButton color="inherit">ORDER ONLINE</ColorButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
};

export default Header;
