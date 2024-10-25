import React, { useState } from 'react';
import {
    Box, Button, Typography, Card, CardContent,
    CardMedia, Grid, Dialog, DialogActions,
    DialogContent, DialogTitle, TextField, Snackbar, Alert
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Link, useNavigate } from 'react-router-dom';

const Home = ({ addRegistration }) => {
    const [open, setOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);
    const [formValues, setFormValues] = useState({ name: '', email: '', phone: '' });
    const [error, setError] = useState('');
    const [successOpen, setSuccessOpen] = useState(false);
    const navigate = useNavigate();

    const packages = [
        {
            id: 1,
            title: 'Gói 1 ngày',
            duration: '1 ngày',
            price: '39,000 VND',
            days: 1,
            icon: <AccessTimeIcon fontSize="large" color="primary" />,
            image: 'https://png.pngtree.com/png-vector/20220525/ourlarge/pngtree-exclusivity-vip-premium-gift-gold-png-image_4728964.png',
        },
        {
            id: 2,
            title: 'Gói 1 tháng',
            duration: '1 tháng',
            price: '199,000 VND',
            days: 30,
            icon: <CalendarMonthIcon fontSize="large" color="primary" />,
            image: 'https://media.istockphoto.com/id/464517192/vi/vec-to/th%C3%A0nh-vi%C3%A1n-vip.jpg?s=612x612&w=is&k=20&c=4QDV-3L2e29dSiv6E28759qwfZAzUPzFXSmzcx-ZPfI=',
        },
        {
            id: 3,
            title: 'Gói 1 năm',
            duration: '1 năm',
            price: '699,000 VND',
            days: 365,
            icon: <EventAvailableIcon fontSize="large" color="primary" />,
            image: 'https://media.istockphoto.com/id/464517192/vi/vec-to/th%C3%A0nh-vi%C3%A1n-vip.jpg?s=612x612&w=is&k=20&c=4QDV-3L2e29dSiv6E28759qwfZAzUPzFXSmzcx-ZPfI=',
        }
    ];

    const handlePurchase = (pkg) => {
        setSelectedPackage(pkg);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedPackage(null);
        setFormValues({ name: '', email: '', phone: '' });
        setError('');
    };

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    };

    const handleConfirmPurchase = () => {
        // Xác thực dữ liệu
        const { name, email, phone } = formValues;
        if (!name || !email || !phone) {
            setError('Tất cả các trường đều bắt buộc!');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError('Email không hợp lệ!');
            return;
        }

        const phoneRegex = /^\d{10}$/; // Chỉ cho phép số điện thoại 10 chữ số
        if (!phoneRegex.test(phone)) {
            setError('Số điện thoại không hợp lệ! Phải là 10 chữ số.');
            return;
        }

        const data = {
            ...formValues,
            package: selectedPackage,
        };
        addRegistration(data); // Gọi hàm để thêm đăng ký
        console.log('Đăng ký thành công với dữ liệu: ', data);
        setSuccessOpen(true); // Hiện thông báo thành công
        handleClose(); // Đóng form đăng ký
        navigate('/games'); // Điều hướng đến trang game.js
    };

    return (
        <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Box sx={{ backgroundColor: '#2196f3', color: '#fff', padding: 5, borderRadius: 2, boxShadow: 3, mb: 4 }}>
                <Typography variant="h3" component="h1" gutterBottom>
                    Chào mừng đến với FunLearnWorld
                </Typography>
                <Typography variant="h5" gutterBottom>
                    Nơi trẻ em khám phá thế giới và học tập qua những hoạt động vui nhộn!
                </Typography>
                <Typography variant="h6" gutterBottom>
                    Hãy sẵn sàng cho những cuộc phiêu lưu cùng từ vựng, câu chuyện, và những trò chơi thú vị!
                </Typography>
                <Box sx={{ mt: 4 }}>
                    <Button variant="contained" color="secondary" sx={{ mr: 2, px: 4, py: 1.5, fontSize: '1.2rem' }}>
                        Bắt đầu ngay
                    </Button>
                    <Button variant="outlined" color="inherit" component={Link} to="/games" sx={{ px: 4, py: 1.5, fontSize: '1.2rem', borderColor: '#fff', color: '#fff' }}>
                        Khám phá trò chơi
                    </Button>
                </Box>
            </Box>

            {/* Giới thiệu về FunLearnWorld */}
            <Box sx={{ maxWidth: 800, margin: '0 auto', backgroundColor: '#e3f2fd', padding: 4, borderRadius: 2, boxShadow: 2 }}>
                <Typography variant="h4" gutterBottom>
                    Giới thiệu về FunLearnWorld
                </Typography>
                <Typography variant="body1" paragraph>
                    FunLearnWorld là trang web giáo dục tiếng Anh độc đáo dành cho trẻ em từ 3-12 tuổi, với mục tiêu giúp các em học tập qua những trải nghiệm tương tác.
                </Typography>
                <Typography variant="body1">
                    Thay vì học qua bài giảng truyền thống, trẻ sẽ vừa chơi vừa học trong thế giới phiêu lưu đầy màu sắc và sáng tạo.
                </Typography>
            </Box>

            {/* Các thẻ gói đăng ký */}
            <Typography variant="h3" gutterBottom sx={{ mt: 5 }}>
                Chọn Gói Đăng Ký của Bạn
            </Typography>
            <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
                {packages.map((pkg) => (
                    <Grid item xs={12} sm={6} md={4} key={pkg.id}>
                        <Card sx={{ maxWidth: 345, mx: 'auto', boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                alt={pkg.title}
                                height="140"
                                image={pkg.image}
                                sx={{ borderRadius: '50%', width: '140px', height: '140px', margin: '0 auto', mt: 2 }}
                            />
                            <CardContent>
                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 2 }}>
                                    {pkg.icon}
                                </Box>
                                <Typography gutterBottom variant="h5" component="div">
                                    {pkg.title}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                    {pkg.duration}
                                </Typography>
                                <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                                    {pkg.price}
                                </Typography>
                            </CardContent>
                            <Box sx={{ textAlign: 'center', mb: 2 }}>
                                <Button variant="contained" color="secondary" onClick={() => handlePurchase(pkg)}>
                                    Mua
                                </Button>
                            </Box>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Form đăng ký */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Đăng Ký Gói: {selectedPackage?.title}</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Tên"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="Gmail"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="Số điện thoại"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        label="Giá tiền"
                        value={selectedPackage?.price || ''}
                        fullWidth
                        disabled
                    />
                    <TextField
                        margin="dense"
                        label="Số ngày sử dụng"
                        value={selectedPackage?.days || ''}
                        fullWidth
                        disabled
                    />
                    {error && <Typography color="error">{error}</Typography>}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Hủy</Button>
                    <Button onClick={handleConfirmPurchase} color="primary">
                        Xác nhận
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Thông báo thành công */}
            <Snackbar open={successOpen} autoHideDuration={10000} onClose={() => setSuccessOpen(false)}>
                <Alert onClose={() => setSuccessOpen(false)} severity="success">
                    Đăng ký thành công!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Home;
