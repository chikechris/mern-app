const mongoose = require('mongoose') 
const {ObjectId} = mongoose.Schema 

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    min: 3,
    max: 160, 
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
    min: 25, 
    max: 3000000
  }, 

  user: {
    type: String, 
    default: 'Admin'
  }
}, {timesstamps: true}); 

module.exports = mongoose.model('Post', postSchema
)