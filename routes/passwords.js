const express = require('express');
const router = express.Router();

const {
    getPasswords,
    createPassword,
} = require('../controllers/passwordController');

router.route('/').get(getPasswords).post(createPassword);

module.exports = router;