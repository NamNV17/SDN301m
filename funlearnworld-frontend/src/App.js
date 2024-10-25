import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Games from './components/Games';
import Stories from './components/Stories';
import CreativeActivities from './components/CreativeActivities';
import Songs from './components/Songs';
import ParentArea from './components/ParentArea';
import { Container, Box } from '@mui/material';
import StoryDetail from './components/StoryDetail';
import Footer from './components/Footer';
import Payment from './components/Payment';
import PlayGame from './components/PlayGame';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';

function App() {
  const [isAdmin, setIsAdmin] = useState(false); // Trạng thái quản trị viên đăng nhập
  const [revenue, setRevenue] = useState(0); // Doanh thu tổng
  const [registrations, setRegistrations] = useState([]); // Lưu trữ danh sách đăng ký

  const addRevenue = (amount) => {
    setRevenue(prevRevenue => prevRevenue + amount); // Cộng doanh thu
  };

  const addRegistration = (registration) => {
    setRegistrations(prev => [...prev, registration]); // Thêm đăng ký mới vào danh sách
  };

  return (
    <Router>
      <Box display="flex" flexDirection="column" minHeight="100vh">
        <Header />
        <Box component="main" flexGrow={1} sx={{ mt: 5 }}>
          <Container maxWidth="lg">
            <Routes>
              <Route path="/" element={<Home addRegistration={addRegistration} />} />
              <Route path="/games" element={<Games />} />
              <Route path="/play/:gameTitle" element={<PlayGame addRevenue={addRevenue} />} />
              <Route path="/stories" element={<Stories />} />
              <Route path="/story/:storyId" element={<StoryDetail />} />
              <Route path="/creative-activities" element={<CreativeActivities />} />
              <Route path="/songs" element={<Songs />} />
              <Route path="/parents" element={<ParentArea />} />
              <Route path="/payment/:gameTitle" element={<Payment />} />
              <Route path="/admin/login" element={<AdminLogin setIsAdmin={setIsAdmin} />} />
              {isAdmin ? (
                <Route path="/admin/dashboard" element={<AdminDashboard registrations={registrations} revenue={revenue} />} />
              ) : (
                <Route path="/admin/dashboard" element={<Navigate to="/admin/login" />} />
              )}
            </Routes>
          </Container>
        </Box>
        <Footer /> {/* Thêm Footer */}
      </Box>
    </Router>
  );
}

export default App;
