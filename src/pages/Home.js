import { Container, Grid, Typography } from "@mui/material";
import TourCard from "../components/TourCard";
import React from "react";
import cities from "../data.json";

const Home = () => (
  <React.Fragment>
    <Container sx={{ marginY: 5 }}>
      {cities.map((city) => (
        <React.Fragment>
          <Typography
            variant="h4"
            component="h2"
            marginTop={5}
            marginBottom={3}
          >
            Top {city.name} tours
          </Typography>
          <Grid container spacing={5}>
            {city.tours.map((tour, index) => (
              <TourCard key={index} tour={tour} />
            ))}
          </Grid>
        </React.Fragment>
      ))}
    </Container>
  </React.Fragment>
);

export default Home;
