const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,   // Bắt buộc phải có tên danh mục
        unique: true,     // Tên danh mục phải là duy nhất, không được trùng lặp
    },
    description: {
        type: String,     // Mô tả danh mục, kiểu chuỗi
        required: true,   // Bắt buộc phải có
    },
    createdAt: {
        type: Date,
        default: Date.now // Mặc định là ngày hiện tại khi tạo mới
    },
    updatedAt: {
        type: Date,
        default: Date.now // Ngày cập nhật sẽ tự động cập nhật nếu có thay đổi
    }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
