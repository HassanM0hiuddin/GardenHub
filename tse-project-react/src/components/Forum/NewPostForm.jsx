// components/Forum/NewPostForm.js
import React, { useState } from 'react';

const NewPostForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: '',
      content: '',
      author: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="fixed right-0 bg-white shadow-md rounded-lg w-1/5 h-fit p-6 mb-4 mr-10">
      <h2 className="text-xl font-bold mb-4">Create New Post</h2>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Content</label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="author" className="block text-gray-700 font-bold mb-2">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
          required
        />
      </div>
      <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-md font-bold hover:bg-green-600 focus:outline-none focus:bg-green-600 transition duration-300">Submit</button>
    </form>
  );
};

export default NewPostForm;
