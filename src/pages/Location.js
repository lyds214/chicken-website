import React from "react";
import Business from "../components/Business";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import map from "../assets/img/map.png";

// const Location = () => {
//   return (
//     <Grid
//       container
//       direction="column"
//       justifyContent="center"
//       alignItems="flex-start"
//       spacing={2}
//     >
//       <Grid item>
//         <Typography variant="h3">Location</Typography>
//       </Grid>
//       <Grid item>
//         <Business />
//       </Grid>
//     </Grid>
//   );
// };

// export default Location;

const Location = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      sx={{ ml: 30 }}
    >
      <Grid container spacing={20} justify="center" alignItems="center">
        <Grid item>
          <Typography
            variant="h2"
            style={{ color: "white", fontWeight: "bold" }}
          >
            Location
          </Typography>
          <Box sx={{ paddingTop: 2 }}>
            <Business />
          </Box>
        </Grid>
        <Grid item></Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container>
            <Grid item xs>
              <img src={map} alt="cafe" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Location;
