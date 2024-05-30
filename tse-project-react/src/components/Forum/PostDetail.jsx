// components/PostDetails.js
import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import LikeButton from './LikeButton';
import CommentsSection from './CommentsSection';
import { BackwardIcon } from '@heroicons/react/16/solid';

const PostDetails = ({ post ,  handleClosePostDetails }) => {
  const [comments, setComments] = useState(post.comments || []);

  const handleAddComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="fixed inset-0  flex items-center justify-center z-1 p-4 ">
      <Card className=" shadow-md rounded-lg p-6 mb-4 w-full max-w-3xl bg-slate-700">
      <svg 
      onClick={()=>{
        handleClosePostDetails(null)
      }}
      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
</svg>

      <h2 className="text-center font-bold text-3xl py-8 text-black">Post Details</h2>
        <CardContent className=''>
          <Typography variant="h5" className="font-bold mb-2">
            {post.title}
          </Typography>
          <Typography variant="body1" className="text-gray-700 mb-4">
            {post.content}
          </Typography>
          <div className="flex items-center justify-between text-gray-600 mb-4">
            <Typography variant="body2">Posted by {post.author} on {post.date}</Typography>
            <LikeButton likes={post.likes} />
          </div>
          <CommentsSection comments={comments} onAddComment={handleAddComment} />
        </CardContent>
      </Card>
    </div>
  );
};

export default PostDetails;
