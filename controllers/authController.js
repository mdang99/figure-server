const authService = require('../services/authService');

const SignUp = async (req, res) => {
    try {
        const user = await authService.SignUp(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const SignIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await authService.SignIn(email, password);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    SignUp,
    SignIn,
};
