import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField, Button, Typography } from '@mui/material';
import '../estilos/AdministracionDia.css';

function AdministracionDia() {
  const [gastos, setGastos] = useState([]);
  const [descripcion, setDescripcion] = useState('');
  const [monto, setMonto] = useState('');
  const [totalGastos, setTotalGastos] = useState(0);

  useEffect(() => {
    let total = 0;
    gastos.forEach((gasto) => {
      total += parseFloat(gasto.monto);
    });
    setTotalGastos(total);
  }, [gastos]);

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };

  const handleMontoChange = (event) => {
    setMonto(event.target.value);
  };

  const handleAgregarGasto = () => {
    const nuevoGasto = {
      descripcion: descripcion,
      monto: monto
    };

    setGastos([...gastos, nuevoGasto]);

    setDescripcion('');
    setMonto('');
  };

  const handleGuardarGastos = () => {
    localStorage.setItem('gastos', JSON.stringify(gastos));
    alert('Los gastos se han guardado correctamente.');
  };

  return (
    <Container maxWidth="md" className="administracion-container">
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="h3" align="center" gutterBottom>
            Administración del Día
          </Typography>
          <Typography variant="subtitle1" align="center" gutterBottom>
            Administra tus compras diarias
          </Typography>

          <div className="gastos-form">
            <TextField
              label="Descripción"
              value={descripcion}
              onChange={handleDescripcionChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Monto"
              value={monto}
              onChange={handleMontoChange}
              fullWidth
              margin="normal"
            />
            <Button variant="contained" onClick={handleAgregarGasto}>
              Agregar Compra
            </Button>
            <Button variant="contained" onClick={handleGuardarGastos}>
              Guardar Compras
            </Button>
          </div>

          <Typography variant="h5" align="center" gutterBottom>
            Total de Compras: ${totalGastos.toFixed(2).replace(/\.00$/, '')}
          </Typography>

          <Grid container spacing={2}>
            {gastos.length === 0 ? (
              <Typography variant="body1" align="center">
                No hay compras registradas.
              </Typography>
            ) : (
              gastos.map((gasto, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <div className="gasto-card">
                    <Typography variant="body2" className="gasto-descripcion">
                      {gasto.descripcion}
                    </Typography>
                    <Typography variant="body2" className="gasto-monto">
                      ${gasto.monto}
                    </Typography>
                  </div>
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AdministracionDia;
