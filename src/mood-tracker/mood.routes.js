const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const { findExistingMoods, addNewMood } = require('./mood.controller');

const router = express.Router();
router.use(bodyParser.json());

// GET EXISTING MOODS
router.get(
  '/:userId', 
  passport.authenticate('jwt', { session: false }),
  findExistingMoods
);

// ADD MOOD
router.post(
  '/:userId',
  passport.authenticate('jwt', { session: false }),
  addNewMood
);

module.exports = router;
