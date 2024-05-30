// components/LikeButton.js
import React, { useState } from 'react';
import { IconButton, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const LikeButton = ({ likes }) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLikeCount(likeCount + (liked ? -1 : 1));
    setLiked(!liked);
  };

  return (
    <div className="flex items-center">
      <IconButton onClick={handleLike} color={liked ? 'primary' : 'default'}>
        <ThumbUpIcon />
      </IconButton>
      <Typography variant="body2" className="ml-2">
        {likeCount} {likeCount === 1 ? 'Like' : 'Likes'}
      </Typography>
    </div>
  );
};

export default LikeButton;
