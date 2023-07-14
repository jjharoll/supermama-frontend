import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          SuperMAMA
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Inicio
        </Button>
        <Button color="inherit" component={Link} to="/administracionMes">
          Administración Mes
        </Button>
        <Button color="inherit" component={Link} to="/administracionDia">
          Administración Dia
        </Button>
        <Button color="inherit" component={Link} to="/receta">
          Recetas
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
