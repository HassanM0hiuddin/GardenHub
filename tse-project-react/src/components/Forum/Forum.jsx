import React, { useState, useEffect } from 'react';
import ForumPost from './ForumPost';
import NewPostForm from './NewPostForm';
import Loader from "../Loader/Loader";
import PostDetails from './PostDetail';

const Forum = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);

  const link = "https://images.unsplash.com/photo-1590253053697-6084dbc9ff78?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const forumPosts = [
    {
      id: 1,
      title: 'How to Start a Community Garden?',
      content: 'Looking for tips on starting a community garden in my neighborhood. Any advice?',
      author: 'John Doe',
      date: '2024-05-01',
      comments: [
        { author: 'Jane Smith', content: 'Great question!', date: '2024-05-01' },
        { author: 'Alice Johnson', content: 'You should start by...', date: '2024-05-02' },
      ],
      likes: 15,
    },
    {
      id: 2,
      title: 'Best Plants for Urban Farming',
      content: 'What are the best plants to grow in an urban farming setting?',
      author: 'Jane Smith',
      date: '2024-05-02',
      comments: [
        { author: 'John Doe', content: 'Tomatoes and peppers work well...', date: '2024-05-02' },
        { author: 'Bob Brown', content: 'Consider herbs too!', date: '2024-05-03' },
      ],
      likes: 25,
    },
    {
      id: 3,
      title: 'Organic Pest Control Methods',
      content: 'Can anyone share effective organic pest control methods?',
      author: 'Alice Johnson',
      date: '2024-05-03',
      comments: [
        { author: 'Charlie Davis', content: 'Neem oil is great...', date: '2024-05-03' },
        { author: 'Eve Wilson', content: 'Try companion planting...', date: '2024-05-04' },
      ],
      likes: 30,
    },
    {
      id: 4,
      title: 'Success Stories: Transforming Vacant Lots',
      content: 'Share your success stories of transforming vacant lots into thriving gardens!',
      author: 'Bob Brown',
      date: '2024-05-04',
      comments: [
        { author: 'Henry Black', content: 'We turned an old lot into...', date: '2024-05-04' },
        { author: 'Grace White', content: 'Our community garden started with...', date: '2024-05-05' },
      ],
      likes: 40,
    },
    {
      id: 5,
      title: 'Watering Schedule for Raised Beds',
      content: 'What is the best watering schedule for raised beds?',
      author: 'Charlie Davis',
      date: '2024-05-05',
      comments: [
        { author: 'John Doe', content: 'I water every morning...', date: '2024-05-05' },
        { author: 'Alice Johnson', content: 'Depends on the weather...', date: '2024-05-06' },
      ],
      likes: 18,
    },
    {
      id: 6,
      title: 'Composting Tips and Tricks',
      content: 'Looking for tips and tricks to improve my composting process.',
      author: 'Eve Wilson',
      date: '2024-05-06',
      comments: [
        { author: 'Jane Smith', content: 'Make sure to balance greens and browns...', date: '2024-05-06' },
        { author: 'Charlie Davis', content: 'Turn the compost regularly...', date: '2024-05-07' },
      ],
      likes: 22,
    },
    {
      id: 7,
      title: 'Urban Farming Grants and Funding',
      content: 'Any advice on finding grants and funding for urban farming projects?',
      author: 'Frank Green',
      date: '2024-05-07',
      comments: [
        { author: 'Alice Johnson', content: 'Check local government programs...', date: '2024-05-07' },
        { author: 'Henry Black', content: 'Look for nonprofit organizations...', date: '2024-05-08' },
      ],
      likes: 28,
    },
    {
      id: 8,
      title: 'Seasonal Planting Guide',
      content: 'Does anyone have a good guide for seasonal planting?',
      author: 'Grace White',
      date: '2024-05-08',
      comments: [
        { author: 'Bob Brown', content: 'Here’s a link to a great guide...', date: '2024-05-08' },
        { author: 'Frank Green', content: 'I follow this schedule...', date: '2024-05-09' },
      ],
      likes: 35,
    },
    {
      id: 9,
      title: 'Building Raised Garden Beds',
      content: 'Looking for instructions or tips on building raised garden beds.',
      author: 'Henry Black',
      date: '2024-05-09',
      comments: [
        { author: 'Grace White', content: 'Use untreated wood...', date: '2024-05-09' },
        { author: 'Jane Smith', content: 'Here’s a step-by-step guide...', date: '2024-05-10' },
      ],
      likes: 27,
    },
    {
      id: 10,
      title: 'Connecting with Local Gardeners',
      content: 'How can I connect with other gardeners in my area?',
      author: 'Ivy Clark',
      date: '2024-05-10',
      comments: [
        { author: 'John Doe', content: 'Check out local gardening clubs...', date: '2024-05-10' },
        { author: 'Alice Johnson', content: 'Join online communities...', date: '2024-05-11' },
      ],
      likes: 33,
    },
  ];

  const addNewPost = (newPost) => {
    const post = {
      ...newPost,
      date: new Date().toISOString().split('T')[0],
      comments: [],
      likes: 0,
    };
    setPosts([post, ...posts]);
  };
  
  useEffect(() => {
    if (selectedPost) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [selectedPost]);
  
  useEffect(() => {
    // Fetch forum posts from the backend and set them to the state
    const fetchPosts = async () => {
      //   try {
      //     const response = await fetch('API_ENDPOINT_HERE');
      //     const data = await response.json();
      //     setPosts(data.posts);
      //   } catch (error) {
      //     console.error('Error fetching forum posts:', error);
      //   }
      setTimeout(() => {
        setPosts(forumPosts);
        setLoading(false);
      }, 3000);
    };

    fetchPosts();
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost(post);
  };


  return (
    <div className={`post-page min-h-screen bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 p-10`}>
      <h1 className="text-4xl font-bold my-4 mb-10 text-center text-green-950">Community Forum</h1>
      <div className='flex justify-start'>
        {loading && <Loader />}
        <div className='pl-72'>
          {posts.map((post) => (
            <div onClick={() => handlePostClick(post)}>
            <ForumPost
              
              key={post.id}
              title={post.title}
              content={post.content}
              author={post.author}
              date={post.date}
              comments={post.comments}
              likes={post.likes}
              image={link}
            />
            </div>
          ))}
        </div>
        <NewPostForm onSubmit={addNewPost} />
      </div>
      {selectedPost && (
        <div className="fixed inset-0 backdrop-blur bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative">
        
            <PostDetails post={selectedPost} handleClosePostDetails={setSelectedPost} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Forum;
