const express = require('express');
const router = express.Router();

const authorize = require('../../helpers/authorize');
const Role = require('../../helpers/role');

const userController = require('../controllers/user');

router.post('/authenticate', userController.authenticate);

router.post('/register', userController.register);

router.get('/', authorize(Role.Admin), userController.getAll);

module.exports = router;