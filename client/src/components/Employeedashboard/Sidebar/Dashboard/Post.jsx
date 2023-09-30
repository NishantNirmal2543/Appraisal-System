
import React, { useState } from 'react';
import { IconButton, Box, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';

const Post = ({ employeeName, description, designation, picturePath, profilePhotoURL }) => {
  // const { pfp ,name, title, content, image, timestamp, likes, comments } = attributes;
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [commentCount, setCommentCount] = useState();
  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
    setLikeCount((prevCount) => (isLiked ? prevCount - 1 : prevCount + 1));
  };

  return (
    <Box
      border="1px solid #ddd"
      borderRadius="5px"
      padding="16px"
      margin="16px"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      background={'#fff'}
      // color={isLiked ? '#fff' : '#000'}
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={profilePhotoURL}
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
      <Typography variant="body1" style={{ marginTop: '16px', color: 'black' }}>
        {description}
      </Typography>

      <img
        src={picturePath}
        alt="Post Image"
        style={{
          width: '300px',
          borderRadius: '5px',
          marginTop: '16px',
        }}
      />

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
              color: '#0073b1',
              marginRight: '16px',
              cursor: 'pointer',
            }}
          >
            {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
          <Typography variant="subtitle1" style={{ color: '#0073b1' }}>
            Like ({likeCount})
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            style={{
              border: 'none',
              background: 'none',
              color: '#0073b1',
              marginRight: '16px',
              cursor: 'pointer',
            }}
          >
            <ChatBubbleOutlineIcon />
          </IconButton>
          <Typography variant="subtitle1" style={{ color: '#0073b1' }}>
            Comment ({commentCount})
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            style={{
              border: 'none',
              background: 'none',
              color: '#0073b1',
              cursor: 'pointer',
            }}
          >
            <ShareIcon />
          </IconButton>
          <Typography variant="subtitle1" style={{ color: '#0073b1' }}>
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






