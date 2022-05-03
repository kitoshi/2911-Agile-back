const mongoose = require('mongoose')

const { Schema } = mongoose

const movieModel = new Schema({
  title: { type: String },
  votes: { type: Number },
  rating: { type: String },
  year: { type: String }
})

module.exports = mongoose.model('Movie', movieModel)
