const { Mood } = require('./mood.model');
// const moodTypes = require('../enums/mood.constants');

// GET ALL MOODS
const findExistingMoods = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json('not authorized');
  }

  // find by user id
  const userId = req.params.userId;
  Mood.find({ userId: userId })
    .then(moods => {
      return res.status(200).json({
        moods: moods.map(e => e.toClient())
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'cannot get moods - internal server error',
      });
    });
};

// ADD NEW MOOD 
const addNewMood = (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json('not authorized');
  }

  const requiredFields = ['moodId'];
  for (let i = 0; i < requiredFields.length; i++) {
    const field = requiredFields[i];

    if (!(field in req.body)) {
      const message = `Message \`${field}\` in request body`;
      console.error(message);
      return res.status(400).send(message);
    } 
  }

  Mood.create({
    userId: req.params.userId,
    moodId: req.body.moodId,
    notes: req.body.notes,
    createdDate: new Date(),
    updatedDate: new Date(), // ?
  })
    .then(mood => {
      res.status(201).json(mood.toClient());
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        message: 'add mood - internal server error',
      });
    });
};

module.exports = { findExistingMoods, addNewMood };
