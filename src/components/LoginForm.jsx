import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from '../login'; // Import the login function from login.js
import UserPage from './UserPage';
import AdminPage from "./AdminPage"

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // Call the login function to check credentials against db.json
      const result = await login(email, password);

      if (result.success) {
        // Successful login, call the onLoginSuccess callback with user data
        onLoginSuccess(result.user);

        // Redirect to the appropriate page (Admin or User)
        result.user.role === 'Admin' ? <AdminPage/> : <UserPage/>;
      } else {
        setError(result.message); // Show error if login fails
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className='w-[500px] m-auto bg-gray-800 rounded-lg'>
      <h1 className='text-3xl text-white text-center my-auto' >Login Form</h1>
      <form onSubmit={handleLogin} className="space-y-[30px] mt-[30px] rounded-lg bg-gray-500 text-black">
        <div>
          <label htmlFor="email" className="block text-white text-center text-2xl">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className=" p-2 w-[80%] mt-[10px] mx-[50px] border-[2px] border-black bg-transparent text-white rounded-lg"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-white text-center text-2xl ">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className=" p-2 w-[80%] mx-[50px] border-[2px] mt-[10px] border-black bg-transparent rounded-lg text-white"
            required
          />
        </div>

        {error && <div className="text-red-500">{error}</div>}

        <div className='flex justify-center items-center rounded-lg'>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded w-[100px] border-[1px] border-black  my-[20px]">
          Login
        </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
