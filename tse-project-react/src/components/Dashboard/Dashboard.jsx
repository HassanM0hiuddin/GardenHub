// components/Dashboard.js
import React from 'react';
import UserProfile from './UserProfile';
import SavedResources from './SavedResources';
import ActivityTracker from './ActivityTracker';

const Dashboard = () => {
    const link = "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  // Dummy data for user, resources, and activities
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: 'https://via.placeholder.com/150',
    gardeningExperience: '5 years',
    interests: 'Urban farming, Hydroponics',
    location: 'New York, USA',
  };


  const resources = [
    {
      title: 'Urban Farming Guide',
      description: 'A comprehensive guide to starting your urban farm.',
      author: 'Jane Doe',
      date: '2023-04-01',
      image: link,
      link: link,
    },
    // Add more dummy resources if needed
  ];

  const activities = [
    'Joined "Community Garden Project"',
    'Posted in "Gardening Tips" forum',
    'Saved a resource: "Urban Farming Guide"',
    // Add more dummy activities if needed
  ];

  return (
    <div className="dashboard-page min-h-screen bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 p-10">
      <h2 className="text-center font-bold text-4xl py-8 text-white">User Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <UserProfile user={user} />
        <SavedResources resources={resources} />
        <ActivityTracker activities={activities} />
      </div>
    </div>
  );
};

export default Dashboard;
