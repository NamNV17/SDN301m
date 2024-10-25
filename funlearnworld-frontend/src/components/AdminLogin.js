import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Avatar, Grid, Paper } from '@mui/material';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const AdminLogin = ({ setIsAdmin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Xử lý đăng nhập
  const handleLogin = () => {
    if (username === 'admin' && password === 'admin123') {
      setIsAdmin(true); // Đặt trạng thái là admin đã đăng nhập
      setError(''); // Xóa lỗi
      navigate('/admin/dashboard'); // Chuyển đến trang dashboard
    } else {
      setError('Sai tài khoản hoặc mật khẩu!'); // Hiển thị lỗi
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng nhập Admin
          </Typography>
          <Box sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && (
              <Typography color="error" variant="body2">
                {error}
              </Typography>
            )}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              Đăng nhập
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AdminLogin;
