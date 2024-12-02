import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (e) => {
    const { id, value } = e.target;

    if (id === 'email') {
      setEmail(value);
      setEmailError(''); // Clear email error when user starts typing
    } else if (id === 'password') {
      setPassword(value);
      setPasswordError(''); // Clear password error when user starts typing
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setEmailError('');
    setPasswordError('');

    // Basic validation before checking localStorage
    if (!email) {
      setEmailError('Email is required');
      return;
    }

    if (!password) {
      setPasswordError('Password is required');
      return;
    }

    // Check if password length is sufficient
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      toast.error('Password must be at least 8 characters long');
      return;
    }

    // Get data from localStorage
    const users = JSON.parse(localStorage.getItem('UserLoginInfo')) || [];

    // If there are no users in localStorage, prevent showing the error
    if (users.length === 0) {
      toast.error('No users registered!');
      setPasswordError('No users registered yet. Please register first.');
      return;
    }

    // Check if the email exists and the password matches
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
      toast.success('Login successful!');
      navigate('/'); // Redirect to the home page (or any other page) after successful login
    } else {
      toast.error('Invalid credentials!');
      setPasswordError('Invalid email or password!');
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div>
      <div className="min-h-screen bg-[#FFF8EE] flex justify-center items-center">
        <div className="w-full animate__animated animate__fadeIn max-w-sm bg-[#FFF8EE] p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleInput}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              {emailError && <p className="text-red-500 text-xs mt-2">{emailError}</p>}
            </div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'} // Toggle input type
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={handleInput}
                className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <div className="absolute top-4 right-4 flex items-center">
                <button
                  onClick={togglePasswordVisibility}
                  className="h-8 w-8 flex items-center justify-center text-[#cc3333] rounded-full focus:outline-none"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
              {passwordError && <p className="text-red-500 text-xs mt-2">{passwordError}</p>}
            </div>
            <div className="flex justify-between items-center">
              <label className="flex items-center text-gray-700">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-red-600 hover:text-indigo-800 text-sm">Forgot password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-[#cc3333] text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Login
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600 text-sm">
              Don't have an account?{' '}
              <a href="/register" className="text-indigo-600 hover:text-indigo-800">
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
