const User = require('../models/User');

const SignUp = async (userData) => {
    try {
        const user = new User(userData);
        await user.save();
        return user;
    } catch (error) {
        throw new Error('Đăng ký thất bại');
    }
};

const SignIn = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            throw new Error('Email hoặc mật khẩu không đúng');
        }
        return user;
    } catch (error) {
        throw new Error('Đăng nhập thất bại');
    }
};

module.exports = {
    SignUp,
    SignIn,
};
