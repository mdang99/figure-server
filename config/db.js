const mongoose = require('mongoose');

const connectToDatabase = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/figure', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Kết nối đến cơ sở dữ liệu thành công!');
    } catch (error) {
        console.error('Kết nối đến cơ sở dữ liệu thất bại:', error.message);
        process.exit(1); // Dừng ứng dụng nếu không thể kết nối
    }
};

module.exports = connectToDatabase;
