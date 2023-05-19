import React from 'react'

import bibimbap from '../assets/img/bibimbap.png'
import porkcutlet from '../assets/img/cutlet.png'
import chicken from '../assets/img/chicken.png'
import beefbowl from '../assets/img/beef-bowl.png'

import Box from '@mui/material/Box'
import { Typography, Button, Grid, Paper } from '@mui/material'

const OurSpecialties = () => {

    const foods = [
      {
          id: 1,
          name: "Bibimbap",
          price: "$14.99",
          img: bibimbap
      },
      {
          id: 2,
          name: "Fried Chicken",
          price: "$7.99",
          img: chicken
      },
      {
          id: 3,
          name: "Beef Bowl",
          price: "$8.99",
          img: beefbowl
      },
      {
          id: 4,
          name: "Pork Cutlet",
          price: "$16.99",
          img: porkcutlet
      }
  ];

  const styles = {
    paperContainer: {
        width: 465,
        height: 1080,
    }
  }

  return (
    <Paper style={styles.paperContainer}>
   Hello
 </Paper>
  )
}

export default OurSpecialties