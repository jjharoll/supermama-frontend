import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AdministracionMes from './components/AdministracionMes';
import AdministracionDia from './components/AdministracionDia';
import Receta from './components/Receta';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/administracionMes" element={<AdministracionMes />} />
          <Route path="/AdministracionDia" element={<AdministracionDia />} />
          <Route path="/receta" element={<Receta />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
