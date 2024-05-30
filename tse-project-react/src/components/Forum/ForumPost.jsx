import React from 'react';
import { ThumbUp, Comment } from '@mui/icons-material';

const ForumPost = ({ title, content, author, date, comments, likes, image }) => {
  return (
    <div className="bg-white shadow-lg hover:cursor-pointer
     rounded-lg p-6 mb-6 transition-transform transform 
     hover:scale-105 hover:shadow-2xl"
  
     >
      
      <img src={image} alt="post" className="w-full h-48 object-cover mb-4 rounded-lg" />
      <h2 className="text-2xl font-bold text-green-600 mb-2">{title}</h2>
      <p className="text-gray-800 mb-4">{content}</p>
      <div className="flex items-center justify-between text-gray-600">
        <p className="text-sm text-gray-500">Posted by <span className="font-semibold">{author}</span> on <span className="font-semibold">{date}</span></p>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Comment fontSize="small" className="text-green-500" />
            <span>{comments.length}</span>
          </div>
          <div className="flex items-center space-x-1">
            <ThumbUp fontSize="small" className="text-green-500" />
            <span>{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForumPost;
