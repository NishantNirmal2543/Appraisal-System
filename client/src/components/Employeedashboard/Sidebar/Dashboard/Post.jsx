import React from 'react';
import { Button, Box, Typography } from '@mui/material';

const Post = ({ name, title, content, timestamp }) => {
  return (
    <Box
      border="1px solid #ddd"
      borderRadius="5px"
      padding="16px"
      margin="16px"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      background="#fff"
      boxShadow="0 2px 4px rgba(0, 0, 0, 0.1)"
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src="https://via.placeholder.com/40"
          alt="User Profile"
          style={{
            borderRadius: '50%',
            marginRight: '12px',
            width: '40px',
            height: '40px',
          }}
        />
        <div>
          <h3 style={{ margin: '0', fontSize: '18px' }}>{name}</h3>
          <p style={{ margin: '0', fontSize: '14px', color: '#555' }}>{title}</p>
        </div>
      </div>
      <Typography style={{ marginTop: '16px', fontSize: '16px' }}>{content}</Typography>
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
          <Button
            style={{
              border: 'none',
              background: 'none',
              color: '#0073b1',
              marginRight: '16px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Like
          </Button>
          <Button
            style={{
              border: 'none',
              background: 'none',
              color: '#0073b1',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Comment
          </Button>
        </div>
        <Typography style={{ fontSize: '14px', color: '#555', marginLeft: 'auto' }}>{timestamp}</Typography>
      </div>
    </Box>
  );
};

export default Post;
