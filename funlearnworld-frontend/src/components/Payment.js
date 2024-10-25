import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, CircularProgress } from '@mui/material';

const Payment = () => {
  const { gameTitle } = useParams(); // Lấy tên trò chơi từ URL
  const navigate = useNavigate(); // Sử dụng để điều hướng sau khi thanh toán
  const [loading, setLoading] = useState(true); // Trạng thái loading

  useEffect(() => {
    // Giả lập quá trình thanh toán
    const simulatePayment = () => {
      setTimeout(() => {
        // Sau 3 giây, giả lập thanh toán thành công
        setLoading(false); // Ngừng loading
        navigate(`/play/${gameTitle}`); // Điều hướng đến trang chơi game
      }, 3000);
    };

    simulatePayment();
  }, [gameTitle, navigate]);

  return (
    <Box sx={{ p: 3, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Đang xử lý thanh toán cho trò chơi: {gameTitle}
      </Typography>
      {loading ? (
        <>
          <Typography variant="body1">Xin chờ trong khi chúng tôi xử lý thanh toán...</Typography>
          <CircularProgress sx={{ mt: 2 }} /> {/* Biểu tượng loading */}
        </>
      ) : (
        <Typography variant="body1" sx={{ mt: 2 }}>Thanh toán thành công!</Typography>
      )}
    </Box>
  );
};

export default Payment;
