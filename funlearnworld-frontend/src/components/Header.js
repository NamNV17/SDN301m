import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          FunLearnWorld
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/games">
          Games
        </Button>
        <Button color="inherit" component={Link} to="/stories">
          Stories
        </Button>
        <Button color="inherit" component={Link} to="/creative-activities">
          Creative Activities
        </Button>
        <Button color="inherit" component={Link} to="/songs">
          Songs
        </Button>
        <Button color="inherit" component={Link} to="/parents">
          Parent Area
        </Button>
        <Button color="inherit" component={Link} to="/admin/login">
          Admin
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
