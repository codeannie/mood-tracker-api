const express = require('express');
const bodyParser = require('body-parser');
const { createNewUser } = require('./user.controller');

const router = express.Router();

router.use(bodyParser.json());

// CREATE NEW USER
router.post('/', createNewUser);

module.exports = router; 