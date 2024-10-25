import React from 'react';
import { Box, Grid, Card, CardContent, Typography, CardActionArea, CardMedia } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const games = [
    {
        title: 'Săn tìm kho báu từ vựng',
        description: 'Bạn đã sẵn sàng trở thành thợ săn từ vựng giỏi nhất chưa? Trong trò chơi này, bạn sẽ giải các câu đố và tìm các từ tiếng Anh được giấu trong các hình ảnh đầy màu sắc.',
        instruction: 'Kéo từ vào đúng vị trí của nó trên hình ảnh để ghi điểm.',
        image: 'https://png.pngtree.com/element_our/20200702/ourmid/pngtree-shabby-treasure-hunt-map-image_2281262.jpg' // Link hình ảnh minh họa cho trò chơi
    },
    {
        title: 'Ghép cặp từ và hình ảnh',
        description: 'Chúng ta hãy ghép từ vựng với những bức hình tương ứng! Bạn có thể kéo và thả các từ tiếng Anh vào các hình ảnh liên quan để ghi điểm.',
        example: 'Ghép từ "Apple" với hình quả táo.',
        image: 'https://lh6.googleusercontent.com/MmfprstPv1sNWlFtTLhHPrG5opVhmkmSVofcW23ijvwKl63XzbmKWtw2KXJbu3yMWvOm_8zQenNFl442JPnCo3gP_o4Fn5sxLI1QGKTMBu7KSfULdjNHD2q-WesvwTjn1TYYPuu2DkQIa-UKt9DgKw' // Link hình ảnh minh họa
    },
    {
        title: 'Thế giới phiêu lưu',
        description: 'Khám phá thế giới rộng lớn cùng các nhân vật đáng yêu của chúng ta! Mỗi hành trình là một bài học mới về từ vựng, và bạn sẽ phải giải các câu đố để mở ra những địa điểm bí ẩn.',
        image: 'https://www.tuhocielts.vn/wp-content/uploads/2020/10/cach-hoc-tieng-anh-qua-viec-choi-game.jpg' // Link hình ảnh minh họa
    }
];

const Games = () => {
    const navigate = useNavigate(); // Khởi tạo useNavigate

    const handleGameClick = (gameTitle) => {
        // Điều hướng đến trang thanh toán với thông tin trò chơi
        navigate(`/payment/${gameTitle}`);
    };

    return (
        <Box sx={{ mt: 5, minHeight: '100vh' }}>
            <Box
                sx={{
                    backgroundImage: 'url(https://r73troypb4obj.vcdn.cloud/website02/uploads/pictures/6242d5ed1a1b854d4e90309c/content_game-brain-out.jpg)', // Hình nền
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    height: '150px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#3f73c4',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
                }}
            >
                <Typography variant="h4" align="center" gutterBottom>
                    Trò chơi học tập
                </Typography>
            </Box>

            <Grid container spacing={4}>
                {games.map((game, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#f0f4f7' }}>
                            <CardActionArea
                                sx={{ flexGrow: 1 }}
                                onClick={() => handleGameClick(game.title)} // Gọi hàm khi nhấp vào Card
                            >
                                <CardMedia
                                    component="img"
                                    height="160"
                                    image={game.image}
                                    alt={game.title}
                                />
                                <CardContent>
                                    <Typography variant="h5" component="div" sx={{ color: '#3f51b5', fontWeight: 'bold' }}>
                                        {game.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                                        {game.description}
                                    </Typography>
                                    {game.instruction && (
                                        <Typography variant="body2" sx={{ mt: 1 }}>
                                            <strong>Hướng dẫn:</strong> {game.instruction}
                                        </Typography>
                                    )}
                                    {game.example && (
                                        <Typography variant="body2" sx={{ mt: 1 }}>
                                            <strong>Ví dụ:</strong> {game.example}
                                        </Typography>
                                    )}
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Games;
