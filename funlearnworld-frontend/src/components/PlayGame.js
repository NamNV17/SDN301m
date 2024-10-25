import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const PlayGame = ({ addRevenue }) => {
    const { gameTitle } = useParams(); // Lấy tên trò chơi từ URL

    useEffect(() => {
        // Giả lập quá trình chơi trò chơi và thêm doanh thu
        const simulatePlayGame = () => {
            // Giả sử mỗi trò chơi có giá trị doanh thu là 10.000 VNĐ
            const gameRevenue = 10000; // Thay đổi giá trị doanh thu
            addRevenue(gameRevenue); // Thêm doanh thu
        };

        simulatePlayGame();
    }, [addRevenue]);

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
                Chơi trò chơi: {gameTitle}
            </Typography>
            <Typography variant="body1">
                Đây là nơi bạn sẽ bắt đầu trò chơi {gameTitle}. Chúc bạn chơi vui!
            </Typography>
            {/* Tích hợp logic trò chơi tại đây */}
        </Box>
    );
};

export default PlayGame;
