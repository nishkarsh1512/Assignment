const mongoose = require('mongoose')
const Schema = mongoose.Schema
const CardSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    unique: true,
  },
  lastName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  available: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  graduated: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  resume: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model('Card', CardSchema)
