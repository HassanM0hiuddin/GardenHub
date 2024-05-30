// pages/ResourceLibraryPage.js

import React, { useState, useEffect } from 'react';
import ResourceList from '../components/Resource/ResourceList';

const ResourcePage = () => {
  const [resources, setResources] = useState([]);
  const dummyResources = [
    {
      title: "Introduction to Community Gardening",
      description: "Learn the basics of community gardening and its benefits.",
      author: "John Doe",
      date: "2024-05-28",
      image: " https://random.imagecdn.app/500/150"
    },
    {
      title: "Urban Farming Techniques",
      description: "Discover innovative urban farming techniques for small spaces.",
      author: "Jane Smith",
      date: "2024-05-25",
      image: " https://random.imagecdn.app/500/150"
    },
    {
      title: "Organic Gardening Tips",
      description: "Explore tips for growing organic produce in your backyard.",
      author: "Alice Johnson",
      date: "2024-05-23",
      image: " https://random.imagecdn.app/500/150"
    },
    // Add more dummy resource objects here...
    {
      title: "Sustainable Agriculture Practices",
      description: "Learn about sustainable agriculture practices for a greener future.",
      author: "Michael Brown",
      date: "2024-05-20",
      image: " https://random.imagecdn.app/500/150"
    },
    {
      title: "Community Garden Design Ideas",
      description: "Get inspired by creative community garden design ideas from around the world.",
      author: "Emily Wilson",
      date: "2024-05-18",
      image: " https://random.imagecdn.app/500/150"
    },
    {
      title: "Urban Beekeeping Guide",
      description: "Discover the joys of urban beekeeping and how to get started.",
      author: "David Martinez",
      date: "2024-05-15",
      image: " https://random.imagecdn.app/500/150"
    },
    {
      title: "Permaculture Principles",
      description: "Learn about permaculture principles and their application in urban environments.",
      author: "Sarah Lee",
      date: "2024-05-12",
      image: " https://random.imagecdn.app/500/150"
    },
    {
      title: "Hydroponic Gardening Basics",
      description: "Explore the basics of hydroponic gardening for growing plants without soil.",
      author: "Robert Garcia",
      date: "2024-05-10",
      image: " https://random.imagecdn.app/500/150"
    },
    {
      title: "Composting at Home",
      description: "Discover how to compost at home and reduce waste while enriching your soil.",
      author: "Emma Davis",
      date: "2024-05-08",
      image: " https://random.imagecdn.app/500/150"
    },
    {
      title: "Vertical Gardening Ideas",
      description: "Get creative with vertical gardening ideas for maximizing space in small areas.",
      author: "Daniel Wilson",
      date: "2024-05-05",
      image: " https://random.imagecdn.app/500/150"
    }
  ];
  useEffect(() => {
    // Fetch resources from API or provide dummy data
    const fetchedResources = dummyResources; // Fetch or dummy data
    setResources(fetchedResources);
  }, []);

  return (
    <div className="resource-library-page min-h-screen bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 p-20">
      <h2 className="text-center font-bold text-3xl py-8 text-white">Resource Library</h2>
      <ResourceList resources={resources} />
    </div>
  );
};

export default ResourcePage;
