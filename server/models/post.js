const mongoose = require('mongoose') 
const {ObjectId} = mongoose.Schema 

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    min: 2,
    max: 140, 
    required: true
  }, 

  slug: {
    type: String, 
    unique: true, 
    index: true, 
    lowercase: true
  }, 

  content: {
    type: {}, 
    required: true,
    min: 5, 
    max: 100000
  }, 

  user: {
    type: String, 
    default: 'Admin'
  }
}, {timestamps: true}); 

module.exports = mongoose.model('Post', postSchema)