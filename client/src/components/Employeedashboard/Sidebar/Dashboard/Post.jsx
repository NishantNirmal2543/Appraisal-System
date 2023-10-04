import React, { useState } from 'react';
import { IconButton, Box, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import profilePhoto from "../Dashboard/profile.jpg";

const Post = ({ employeeName, description, designation, picturePath, profilePhotoURL }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [commentCount, setCommentCount] = useState();

  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
    setLikeCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const renderDescription = () => {
    if (showFullDescription) {
      return (
        <div>
          <Typography variant="body1" style={{ marginTop: '16px', color: 'black' }}>
            {description}
          </Typography>
          <button
            onClick={toggleDescription}
            style={{ border: 'none', background: 'none', color: '#4CC713', cursor: 'pointer' }}
          >
            Read Less
          </button>
        </div>
      );
    } else {
      // Show a truncated description with a "Read More" button
      const truncatedDescription = description.length > 200 ? `${description.slice(0, 200)}...` : description;
      return (
        <div>
          <Typography variant="body1" style={{ marginTop: '16px', color: 'black' }}>
            {truncatedDescription}
          </Typography>
          {description.length > 200 && (
            <button
              onClick={toggleDescription}
              style={{ border: 'none', background: 'none', color: '#4CC713', cursor: 'pointer' }}
            >
              Read More
            </button>
          )}
        </div>
      );
    }
  };

  return (
    <Box
      border="1px solid #ddd"
      borderRadius="30px"
      padding="16px"
      margin="16px"
      width="900px"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      background={'#fff'}
      backgroundColor="white"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
      marginTop='40px'
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        
        <img
          src={profilePhotoURL || profilePhoto}
          alt="User Profile"
          style={{
            borderRadius: '50%',
            marginRight: '12px',
            width: '40px',
            height: '40px',
          }}
        />
        <div>
          <Typography variant="h6" style={{ marginBottom: '4px', color: 'black' }}>
            {employeeName}
          </Typography>
          <Typography variant="subtitle2" style={{ color: '#555' }}>
            {designation}
          </Typography>
        </div>
      </div>
      {renderDescription()}

      <img
        src={picturePath}
        width="100%"
        height="500px"
        style={{
          borderRadius: '15px',
          marginRight: '12px',
          
        }}></img>

      <div
        style={{
          marginTop: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            onClick={handleLikeClick}
            style={{
              border: 'none',
              background: 'none',
              color: '#4CC713',
              marginRight: '16px',
              cursor: 'pointer',
            }}
          >
            {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <Typography variant="subtitle1" style={{ color: '#4CC713' }}>
            Like ({likeCount})
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            style={{
              border: 'none',
              background: 'none',
              color: '#4CC713',
              marginRight: '16px',
              cursor: 'pointer',
            }}
          >
            <ChatBubbleOutlineIcon />
          </IconButton>
          <Typography variant="subtitle1" style={{ color: '#4CC713' }}>
            Comment ({commentCount})
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            style={{
              border: 'none',
              background: 'none',
              color: '#4CC713',
              cursor: 'pointer',
            }}
          >
            <ShareIcon />
          </IconButton>
          <Typography variant="subtitle1" style={{ color: '#4CC713' }}>
            Share
          </Typography>
        </div>
        <Typography variant="body2" style={{ color: '#555' }}>
        </Typography>
      </div>
    </Box>
  );
};

export default Post;
