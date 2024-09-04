const express = require('express');
const connectToDatabase = require('./config/db');
const cors = require('cors'); // Import cors middleware
const authRouter = require('./routes/authRouter');

const app = express();
const PORT = 4000;

// Kết nối đến cơ sở dữ liệu
connectToDatabase();

// Middleware để phân tích JSON
app.use(express.json());
// Cấu hình cors để tránh lỗi CORS
app.use(cors({
    origin: 'http://localhost:3000', // URL của frontend React
    credentials: true // Cho phép gửi cookie qua request
}));

// Sử dụng router cho auth
app.use('/api/auth', authRouter);

// Định tuyến cơ bản
app.get('/', (req, res) => {
    res.send('API đang hoạt động!');
});

// Khởi động máy chủ
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
