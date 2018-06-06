const mongoose = require('mongoose');

const moodSchema = mongoose.Schema({
  userId: { type: String },
  moodId: { type: Number, required: true },
  notes: { type: String, trim: true },
  createdDate: { type: Date, required: true},
  updatedDate: { type: Date },
});

moodSchema.methods.toClient = function() {
  return {
    id: this._id,
    userId: this.userId,
    moodId: this.mood,
    notes: this.notes,
    createdDate: this.loggedDate,
    updatedDate: this.updatedDate,
  };
};

const Mood = mongoose.model('mood', moodSchema);

module.exports = { Mood }
