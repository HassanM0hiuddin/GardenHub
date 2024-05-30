// components/ActivityTracker.js
import React from 'react';
import { Typography } from '@mui/material';

const ActivityTracker = ({ activities }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <Typography variant="h6" className="font-bold mb-4">Activity Tracker</Typography>
      {activities.length > 0 ? (
        <ul className="list-disc list-inside">
          {activities.map((activity, index) => (
            <li key={index} className="mb-2 text-gray-700">{activity}</li>
          ))}
        </ul>
      ) : (
        <Typography variant="body2" className="text-gray-600">No activities yet.</Typography>
      )}
    </div>
  );
};

export default ActivityTracker;
