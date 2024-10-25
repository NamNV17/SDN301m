import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const Footer = () => {
  return (
    <Box 
    component="footer"
    sx={{
      py: 2,
      backgroundColor: '#3f51b5', // Màu xanh dương
      color: 'white',
      textAlign: 'center',
      mt: 'auto'
    }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" gutterBottom textAlign="center">
          © 2024 FunLearnWorld. All Rights Reserved.
        </Typography>
        <Typography variant="body2" textAlign="center">
          Liên hệ: support@funlearnworld.com | Hotline: 1800-123-456
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
