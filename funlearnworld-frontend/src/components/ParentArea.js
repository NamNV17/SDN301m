import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

function ParentArea() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Parent's Area
      </Typography>
      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6">Progress Reports</Typography>
        <Typography>Track your child's progress and achievements.</Typography>
      </Paper>
      <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6">Educational Tips</Typography>
        <Typography>Learn how to help your child with fun English activities at home.</Typography>
      </Paper>
    </Box>
  );
}

export default ParentArea;
