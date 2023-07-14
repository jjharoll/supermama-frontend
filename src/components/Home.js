import React from 'react';
import { Container, Grid, Switch } from '@mui/material';
import '../estilos/Home.css';

function Home() {
  return (
    <Container maxWidth="md" className="home-container">
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <h1 className="home-title">SuperMAMA App</h1>
          <p className="home-description">Una aplicación hecha para amas de casa</p>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Home;
