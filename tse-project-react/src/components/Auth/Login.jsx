import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Controller from '../../api/Auth'; // Import your Controller component
import { useDispatch } from 'react-redux';
import { login } from '../../redux/userSlice';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await Controller.login({
        email: formData.email,
        password: formData.password,
        role: 'user',
      });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        dispatch(
            login({
              _id: response.data.user.id,
                userName: response.data.user.userName,
              email: response.data.user.email,
              auth: true,
              role: response.data.user.role,
            })
          );
        navigate(`/user`);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('An error occurred during login.');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
        {error && <div className="text-red-600 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md font-bold hover:bg-green-600 focus:outline-none focus:bg-green-600 transition duration-300"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
