const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.SignUp);
router.post('/signin', authController.SignIn);

module.exports = router;
