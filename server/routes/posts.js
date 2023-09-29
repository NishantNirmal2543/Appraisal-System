const express = require('express');
const router = express.Router();
const { Post } = require('../models/post'); 
const { v4: uuidv4 } = require('uuid'); 

router.post('/', async (req, res) => {
    try {
      const { employeeid,  description, picturePath ,profilePhotoURL ,designation ,employeeName} = req.body;
  
      const newPost = new Post({
        _id: uuidv4(),
        employeeid,
        profilePhotoURL,
        description,
        picturePath,
        designation,
        employeeName
      
      });
  
    
      const savedPost = await newPost.save();
  
      res.status(201).json(savedPost);
    } catch (error) {
      console.error('Error creating post:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

  

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
