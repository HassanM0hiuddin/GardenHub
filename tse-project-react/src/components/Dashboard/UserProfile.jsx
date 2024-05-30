// components/UserProfile.js
import React from 'react';
import { Avatar, Typography, Button } from '@mui/material';

const UserProfile = ({ user }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <div className="flex items-center mb-4">
        <Avatar src={user.avatar} alt={user.name} className="mr-4 w-20 h-20" />
        <div>
          <Typography variant="h6" className="font-bold">{user.name}</Typography>
          <Typography variant="body2" className="text-gray-600">{user.email}</Typography>
        </div>
      </div>
      <div className="mb-4">
        <Typography variant="body1" className="text-gray-800"><strong>Gardening Experience:</strong> {user.gardeningExperience || 'Not specified'}</Typography>
      </div>
      <div className="mb-4">
        <Typography variant="body1" className="text-gray-800"><strong>Interests:</strong> {user.interests || 'Not specified'}</Typography>
      </div>
      <div className="mb-4">
        <Typography variant="body1" className="text-gray-800"><strong>Location:</strong> {user.location || 'Not specified'}</Typography>
      </div>
      <Button variant="contained" color="primary">Edit Profile</Button>
    </div>
  );
};

export default UserProfile;
