import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="py-16 bg-gradient-to-b from-green-500 to-green-400">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-4">Welcome to the Community Garden and Urban Farming Network</h1> 
          <p className="text-lg md:text-xl text-white text-center mb-8">Connect with gardening enthusiasts and urban farmers. Find resources, events, and projects to get involved in sustainable agriculture.</p>
          <div className="text-center">
            <Link to="/signup" className="bg-white text-green-500 py-3 px-8 rounded-full font-bold text-lg hover:bg-green-600 hover:text-white transition duration-300 ease-in-out">Get Started</Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Find Gardening Events</h3>
              <p className="text-gray-600">Discover upcoming gardening workshops, volunteer opportunities, and community gatherings.</p>
            </div>
            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Learn from Resources</h3>
              <p className="text-gray-600">Access a library of articles, guides, and videos on community gardening and urban farming practices.</p>
            </div>
            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect with Others</h3>
              <p className="text-gray-600">Join forums, form gardening groups, and collaborate on projects with like-minded individuals.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-500 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Join Us Today!</h2>
          <p className="text-white text-lg md:text-xl mb-8">Start your journey towards sustainable agriculture.</p>
          <Link to={"/signup"} className="bg-white text-green-500 py-3 px-8 rounded-full font-bold text-lg hover:bg-green-600 hover:text-white transition duration-300 ease-in-out">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
