import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const backendInstance = axios.create({
    baseURL: "https://forgotpasswordbackend-k0eg.onrender.com",
    timeout: 5000,
  });

const CreateUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await backendInstance.post('/forgotPassword/createUser', { email, password });
      setMessage(response.data.msg);
      setEmail('');
      setPassword('');
    } catch (error) {
      setMessage(error.response.data.msg);
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>{" "}
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}required/>
        <br/>
        <br/>
        <label htmlFor="password">Password:</label>{" "}
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <br/>
        <br/>
        <button type="submit">Create User</button>{" "}
        <Link to="/">
            <button>Back</button>
        </Link>
      </form>
      <br/>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateUser;
