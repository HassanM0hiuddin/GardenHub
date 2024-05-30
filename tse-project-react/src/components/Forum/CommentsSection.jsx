// components/CommentSection.js
import React, { useState } from 'react';
import { Typography, TextField, Button } from '@mui/material';

const CommentSection = ({ comments, onAddComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim()) {
      onAddComment({
        author: 'Current User',
        content: newComment,
        date: new Date().toLocaleDateString(),
      });
      setNewComment('');
    }
  };

  return (
    <div className="comment-section mt-4 ">
      <Typography variant="h6" className="font-bold mb-2">Comments</Typography>
      <div className="mb-4 h-32 overflow-scroll">
        {comments.map((comment, index) => (
          <div key={index} className="mb-2">
            <Typography variant="body2" className="font-semibold">{comment.author}</Typography>
            <Typography variant="body2" className="text-gray-700">{comment.content}</Typography>
            <Typography variant="body2" className="text-gray-500">{comment.date}</Typography>
          </div>
        ))}
      </div>
      <div className="add-comment">
        <TextField
          variant="outlined"
          label="Add a comment"
          fullWidth
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="mb-2"
        />
        <Button variant="contained" color="primary" onClick={handleAddComment}>
          Post Comment
        </Button>
      </div>
    </div>
  );
};

export default CommentSection;
