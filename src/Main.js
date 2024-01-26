import React from 'react';
import { Container, Typography, Button } from '@mui/material';

import TextField from '@mui/material/TextField';

const Main = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
        jusiifyContent: 'center',
        height: '100vh',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Centered Content
      </Typography>
      <Button variant="contained" color="primary">
        Click Me
      </Button>

      <TextField/>

      <TextField/>

      <TextField/>

      <TextField/>

      
      <TextField/>

      <TextField/>


      <TextField/>




    </Container>
  );
};

export default Main;
