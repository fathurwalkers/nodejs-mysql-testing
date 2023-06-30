const express = require('express');

UserController = require('../controller/users.js');

const router = express.Router();

router.get('/', UserController.getAllUsers);

router.post('/create', UserController.createNewUser);

module.exports = router; 