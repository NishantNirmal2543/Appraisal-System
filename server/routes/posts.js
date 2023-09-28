const express = require('express');
const router = express.Router();
const { Post } = require('../models/post'); // Update the path
const { v4: uuidv4 } = require('uuid'); // for generating unique IDs

// Define a route for creating a new post
router.post('/', async (req, res) => {
    try {
      const { employeeid,  description, picturePath } = req.body;
  
      // You can add validation here if needed
  
      // Create a new post
      const newPost = new Post({
        _id: uuidv4(), // Generate a unique ID for the post
        employeeid,
       
        description,
        picturePath,
      
      });
  
      // Save the post to the database
      const savedPost = await newPost.save();
  
      res.status(201).json(savedPost);
    } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

  
// Get feed posts
// router.get('/getFeedPosts', async (req, res) => {
//   try {
//     const feedPosts = await Post.find().sort({ _id: -1 }); // Sort by most recent first
//     res.status(200).json(feedPosts);
//   } catch (error) {
//     res.status(500).json({ error: 'Could not fetch feed posts' });
//   }
// });

// // Get user posts by employeeid
// router.get('/getUserPosts/:employeeid', async (req, res) => {
//   try {
//     const { employeeid } = req.params;
//     const userPosts = await Post.find({ employeeid }).sort({ _id: -1 }); // Sort by most recent first
//     res.status(200).json(userPosts);
//   } catch (error) {
//     res.status(500).json({ error: 'Could not fetch user posts' });
//   }
// });

// // Like a post
// router.post('/likePost/:postId', async (req, res) => {
//   try {
//     const { postId } = req.params;
//     const post = await Post.findById(postId);
    
//     if (!post) {
//       return res.status(404).json({ error: 'Post not found' });
//     }

//     // Update the likes object in the post
//     const { userId } = req.body;
//     post.likes[userId] = true;

//     const updatedPost = await post.save();
//     res.status(200).json(updatedPost);
//   } catch (error) {
//     res.status(500).json({ error: 'Could not like the post' });
//   }
// });

module.exports = router;
