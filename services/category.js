const Category = require('./models/Category');

// Mảng chứa các danh mục cần thêm
const categories = [
  { name: 'Electronics', description: 'All kinds of electronic devices and gadgets' },
  { name: 'Fashion', description: 'Clothing, shoes, and accessories' },
  { name: 'Home Appliances', description: 'Appliances and tools for home use' },
  { name: 'Books', description: 'Wide variety of books and magazines' },
  { name: 'Toys', description: 'Toys and games for all ages' }
];

// Sử dụng insertMany để thêm tất cả các danh mục cùng lúc
Category.insertMany(categories)
  .then(() => {
    console.log('Categories added successfully');
  })
  .catch((err) => {
    console.error('Error adding categories:', err);
  });
