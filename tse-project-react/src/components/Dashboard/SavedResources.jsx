// components/SavedResources.js
import React from 'react';
import Resource from '../Resource/Resource';
import { Typography } from '@mui/material';

const SavedResources = ({ resources }) => {
    console.log(resources);
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <Typography variant="h6" className="font-bold mb-4">Saved Resources</Typography>
      {resources.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {resources.map((resource, index) => (
            <Resource key={index} {...resource} />
          ))}
        </div>
      ) : (
        <Typography variant="body2" className="text-gray-600">No saved resources.</Typography>
      )}
    </div>
  );
};

export default SavedResources;
