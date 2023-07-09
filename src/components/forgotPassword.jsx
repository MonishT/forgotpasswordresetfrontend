import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const backendInstance = axios.create({
  baseURL: "https://forgotpasswordbackend-k0eg.onrender.com",
  timeout: 5000,
});
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await backendInstance.post('/forgotPassword/forgotPassword', { email });
      console.log("Response: "+response.data.msg);
      setMessage(response.data.msg);
    } catch (error) {
      setMessage(error.response.data.msg);
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <br/><br/>
        <button type="submit">Submit</button>{" "}
        <Link to="/">
            <button>Back</button>
        </Link>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
