import React, { useState, useEffect } from 'react';
import { Container, Grid, TextField, Button } from '@mui/material';
import '../estilos/AdministracionMes.css';

function AdministracionMes() {
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
          <h1 className="administracion-title">Administración Mes</h1>
          <p className="administracion-description">Administra tus gastos mes a mes</p>

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
              Agregar Gasto
            </Button>
            <Button variant="contained" onClick={handleGuardarGastos}>
              Guardar Gastos
            </Button>
          </div>

          <h2>Total de Gastos: ${totalGastos.toFixed(2).replace(/\.00$/, '')}</h2>


          <Grid container spacing={2}>
            {gastos.length === 0 ? (
              <p>No hay gastos registrados.</p>
            ) : (
              gastos.map((gasto, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <div className="gasto-card">
                    <p className="gasto-descripcion">{gasto.descripcion}</p>
                    <p className="gasto-monto">${gasto.monto}</p>
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

export default AdministracionMes;
