import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

function Songs() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Learn Through Songs
      </Typography>
      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6">Animal Songs</Typography>
        <Typography>Sing about animals and learn new words!</Typography>
      </Paper>
      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6">Good Morning Song</Typography>
        <Typography>Start your day with a happy morning song and daily greetings.</Typography>
      </Paper>
    </Box>
  );
}

export default Songs;
