// components/Resource.js
import React from 'react';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';

const Resource = ({ title, description, author, date, image }) => {
  return (
    <Card className="mb-6 shadow-lg transform transition duration-300 hover:scale-105">
      <CardMedia
        component="img"
        alt="Resource Image"
        height="200"
        image={image}
        className="rounded-t-lg"
      />
      <CardContent className="bg-white p-4">
        <Typography variant="h6" className="mb-2 font-bold text-gray-800">
          {title}
        </Typography>
        <Typography variant="body1" className="mb-2 text-gray-600">
          {description}
        </Typography>
        <Typography variant="body2" className="text-gray-500">
          Author: {author}
        </Typography>
        <Typography variant="body2" className="text-gray-500">
          Publication Date: {date}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Resource;
