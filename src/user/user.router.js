const express = require('express');
const bodyParser = require('body-parser');
const { getAllUsers, createNewUser } = require('./user.controller');

const router = express.Router();

router.use(bodyParser.json());

// CREATE NEW USER
router.post('/', createNewUser);

// GET ALL USERS
router.get('/', getAllUsers);

module.exports = router;
