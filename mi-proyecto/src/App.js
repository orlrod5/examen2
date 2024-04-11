import React from 'react';
import ButtonComponent from './ButtonComponent';
import { CssBaseline } from '@mui/material';

const App = () => {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', padding: '20px' }}>
      <CssBaseline />
      <ButtonComponent />
    </div>
  );
};

export default App;

