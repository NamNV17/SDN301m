const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Route mẫu
app.get('/', (req, res) => {
  res.send('Welcome to FunLearnWorld API!');
});

// API mẫu cho các trò chơi học tập
app.get('/api/games', (req, res) => {
  const games = [
    { id: 1, title: 'Săn tìm kho báu từ vựng', description: 'Giải các câu đố và tìm các từ tiếng Anh.' },
    { id: 2, title: 'Ghép cặp từ và hình ảnh', description: 'Kéo và thả từ vựng vào hình ảnh tương ứng.' },
    { id: 3, title: 'Thế giới phiêu lưu', description: 'Khám phá thế giới và mở khóa các địa điểm bí ẩn.' }
  ];
  res.json(games);
});

// Endpoint xử lý thanh toán
app.post('/api/payment', (req, res) => {
  const { amount, orderId } = req.body;

  // Kiểm tra thông tin thanh toán (giả lập)
  if (!amount || !orderId) {
    return res.status(400).json({ message: 'Missing payment information' });
  }

  // Tạo thông tin thanh toán
  const paymentData = {
    vnp_Version: '2.0.0',
    vnp_Command: 'pay',
    vnp_TmnCode: 'YOUR_TMN_CODE', // Mã cửa hàng của bạn
    vnp_Amount: amount * 100, // Số tiền tính bằng đồng
    vnp_CurrCode: 'VND',
    vnp_TxnRef: orderId,
    vnp_OrderInfo: 'Thanh toán cho trò chơi FunLearnWorld',
    vnp_Locale: 'vn',
    vnp_BankCode: 'NCB',
    vnp_CreateDate: new Date().toISOString().replace(/\..+/, ''),
    vnp_ReturnUrl: 'http://localhost:3000/payment/callback', // Đường dẫn trả về
  };

  // Tạo chuỗi ký từ paymentData và ký theo hướng dẫn của VNPAY
  // (Chi tiết cách thực hiện sẽ phụ thuộc vào cách bạn triển khai)
  
  // Giả lập trả về thông tin thanh toán
  res.json({
    status: 'success',
    message: 'Payment created successfully',
    data: paymentData
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
