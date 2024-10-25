import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

function CreativeActivities() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Creative Activities
      </Typography>
      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6">Create Your Own Story</Typography>
        <Typography>Write your own story by selecting characters and settings.</Typography>
      </Paper>
      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6">Crafting with Videos</Typography>
        <Typography>Watch instructional videos and learn new vocabulary while crafting.</Typography>
      </Paper>
    </Box>
  );
}

export default CreativeActivities;
