const mongoose = require('mongoose');

// Define a schema for your data
const postSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  employeeid: {
    type:  String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  
  description: {
    type: String,
    required: true,
  },
  picturePath: {
    type: String,
    required: true,
  },
  profilePhotoURL: {
    type: String,
  },
  likes: {
    type: Object,
    default: {},
  },
});

// Create a MongoDB model using the schema
const Post = mongoose.model('post', postSchema);

module.exports ={Post} ;
