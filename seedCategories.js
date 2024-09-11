const mongoose = require('mongoose');
const Category = require('./models/category');

// Kết nối MongoDB
mongoose.connect('mongodb://localhost:27017/figure', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
  process.exit(1);
});

// Mảng các danh mục cần thêm
const categories = [
  { name: 'One Piece', description: 'One Piece is a Japanese manga series written and illustrated by Eiichiro Oda' },
  { name: 'Dragon Ball', description: 'Dragon Ball is a Japanese media franchise created by Akira Toriyama in 1984' },
  { name: 'Jujutsu Kaisen', description: 'Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami' },
  { name: 'Demon Slayer', description: 'Demon Slayer: Kimetsu no Yaiba is a Japanese manga series written and illustrated by Koyoharu Gotouge' }
];

// Hàm để thêm các danh mục chỉ một lần
const seedCategories = async () => {
  try {
    // Kiểm tra xem đã có danh mục nào chưa
    const existingCategories = await Category.find();
    if (existingCategories.length > 0) {
      console.log('Categories already exist in the database. Skipping seeding.');
      return;
    }

    // Thêm các danh mục
    await Category.insertMany(categories);
    console.log('Categories added successfully');
  } catch (error) {
    console.error('Error adding categories:', error);
  } finally {
    mongoose.connection.close(); // Đóng kết nối sau khi hoàn thành
  }
};

// Gọi hàm seedCategories để chạy
seedCategories();
