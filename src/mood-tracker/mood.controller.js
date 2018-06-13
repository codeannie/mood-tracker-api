const Mood = require('./mood.model');
const moodTypes = require('../enums/mood.constants');

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
        message: 'cannot get moods - internal server error'
      });
    });
};

