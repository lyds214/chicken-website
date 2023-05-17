import React from 'react'


import Box from '@mui/material/Box'
import { Typography, Button, Grid } from '@mui/material'

// picture dimension: 465 x 1080

const Food = ({name, price, img}) => {
  return (
    <Box sx={{width: 465, height: 1080, backgroundColor: 'primary.light'}}>
        <Grid container direction='column' justifyContent='center' alignItems='center'>
            <Grid item>
                <Typography>{name}</Typography>
            </Grid>
            <Grid item>
                <Typography>{price}</Typography>
            </Grid>
            <Grid>
                <Button variant="contained">ORDER NOW</Button>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Food