import React from 'react';
import { Button, Typography } from '@mui/material';

const ButtonComponent = () => {
  const handleClick = async () => {
    // Aquí realizarás la llamada al backend
    try {
      const response = await fetch('/tu-endpoint');
      const data = await response.json();
      console.log(data); // Esto es para depuración, puedes cambiarlo por el manejo de estado si prefieres
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Obtener texto del backend
      </Button>
      <Typography variant="body1" style={{ color: 'white', marginTop: '20px' }}>
        Respuesta del Backend: {/* Aquí mostrarás la respuesta del backend */}
      </Typography>
    </div>
  );
};

export default ButtonComponent;
