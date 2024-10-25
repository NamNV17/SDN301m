import React, { useState } from 'react';
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Tabs,
    Tab,
    AppBar,
    Grid,
} from '@mui/material';

const AdminDashboard = ({ registrations }) => {
    const [selectedRegistration, setSelectedRegistration] = useState(null);
    const [open, setOpen] = useState(false);
    const [tabIndex, setTabIndex] = useState(0); // State để quản lý tab hiện tại

    // Hàm mở dialog xem chi tiết đăng ký
    const handleOpen = (registration) => {
        setSelectedRegistration(registration);
        setOpen(true);
    };

    // Hàm đóng dialog
    const handleClose = () => {
        setOpen(false);
        setSelectedRegistration(null);
    };

    // Hàm xử lý chuyển tab
    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    // Lọc các thành viên theo gói đăng ký
    const filteredRegistrations = () => {
        switch (tabIndex) {
            case 1: // Gói 1 ngày
                return registrations.filter((reg) => reg.package.title === 'Gói 1 ngày');
            case 2: // Gói 1 tháng
                return registrations.filter((reg) => reg.package.title === 'Gói 1 tháng');
            case 3: // Gói 1 năm
                return registrations.filter((reg) => reg.package.title === 'Gói 1 năm');
            default: // Tất cả thành viên
                return registrations;
        }
    };

  

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h4" gutterBottom align="center">
                Thành viên đăng kí
            </Typography>

            {/* Thanh điều hướng */}
            <AppBar position="static" color="default">
                <Tabs value={tabIndex} onChange={handleTabChange} centered>
                    <Tab label="Thành viên" />
                    <Tab label="Gói 1 ngày" />
                    <Tab label="Gói 1 tháng" />
                    <Tab label="Gói 1 năm" />
                </Tabs>
            </AppBar>

            {/* Bố cục Grid để chia đều không gian */}
            <Grid container spacing={2} justifyContent="center" sx={{ mt: 2 }}>
                <Grid item xs={12}>
                    {/* Bảng hiển thị danh sách đăng ký */}
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center"><strong>Tên</strong></TableCell>
                                    <TableCell align="center"><strong>Email</strong></TableCell>
                                    <TableCell align="center"><strong>Số điện thoại</strong></TableCell>
                                    <TableCell align="center"><strong>Gói đã mua</strong></TableCell>
                                    <TableCell align="center"><strong>Giá tiền</strong></TableCell>
                                    <TableCell align="center"><strong>Số ngày sử dụng</strong></TableCell>
                                    <TableCell align="center"><strong>Hành động</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {filteredRegistrations().map((registration, index) => (
                                    <TableRow key={index}>
                                        <TableCell align="center">{registration.name}</TableCell>
                                        <TableCell align="center">{registration.email}</TableCell>
                                        <TableCell align="center">{registration.phone}</TableCell>
                                        <TableCell align="center">{registration.package.title}</TableCell>
                                        <TableCell align="center">{registration.package.price.toLocaleString('vi-VN')} VND</TableCell>
                                        <TableCell align="center">{registration.package.days}</TableCell>
                                        <TableCell align="center">
                                            <Button variant="contained" color="primary" onClick={() => handleOpen(registration)}>
                                                Xem chi tiết
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

            
                </Grid>
            </Grid>

            {/* Dialog xem chi tiết đăng ký */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Chi tiết Đăng Ký</DialogTitle>
                <DialogContent>
                    {selectedRegistration && (
                        <>
                            <Typography variant="h6">Tên: <strong>{selectedRegistration.name}</strong></Typography>
                            <Typography variant="h6">Email: <strong>{selectedRegistration.email}</strong></Typography>
                            <Typography variant="h6">Số điện thoại: <strong>{selectedRegistration.phone}</strong></Typography>
                            <Typography variant="h6">Gói đã mua: <strong>{selectedRegistration.package.title}</strong></Typography>
                            <Typography variant="h6">Giá tiền: <strong>{selectedRegistration.package.price.toLocaleString('vi-VN')} VND</strong></Typography>
                            <Typography variant="h6">Số ngày sử dụng: <strong>{selectedRegistration.package.days}</strong></Typography>
                        </>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">Đóng</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default AdminDashboard;
