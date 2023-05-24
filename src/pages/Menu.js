import React, { useState } from "react";
import Calendar from "react-calendar";
import "./styles/Calendar.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import chickencard from "../assets/img/chickencard.jpg";
import { red } from "@mui/material/colors";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    height: 330,
    // p: 4,
  };

  return (
    <section id="menu">
      <Box
        sx={{
          backgroundColor: "black",
          paddingTop: "3em",
          paddingBottom: "1.5em",
        }}
      >
        <Typography
          variant="h4"
          style={{ color: "white", fontWeight: "bold", marginLeft: "3em" }}
        >
          This month's special menu
        </Typography>
      </Box>
      <Calendar
        prevLabel={null}
        nextLabel={null}
        next2Label={null}
        prev2Label={null}
        calendarType="US"
        style={{ color: "white" }}
        onClickDay={handleOpen}
        tileClassName="tile-class"
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card sx={style}>
          <CardMedia
            component="img"
            height="140"
            image={chickencard}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ fontWeight: "600" }}
            >
              Chicken
            </Typography>
            <Typography variant="paragraph" color="text.secondary">
              Chicken with honey sauce, sprinkled with seed and green onion.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "red",
                "&:hover": {
                  backgroundColor: red[500],
                },
                borderRadius: 8,
              }}
            >
              ORDER NOW
            </Button>
          </CardActions>
        </Card>
      </Modal>
    </section>
  );
};

export default Menu;
