import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const backendInstance = axios.create({
  baseURL: "http://localhost:5000",
  timeout: 5000,
});

const ResetPassword = () => {
  const {token} = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  console.log("match.params.token : "+token);
  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const response = await backendInstance.post(`resetPassword/${token}`, { password });
      setMessage(response.data.msg);
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      setMessage(error.response.data.msg);
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <label htmlFor="password">New Password:</label>
        {" "}
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {" "}
        <label htmlFor="confirmPassword">Confirm Password:</label>
        {" "}
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <br/><br/>
        <button type="submit">Reset Password</button>{" "}
        <Link to="/">
            <button>Back</button>
        </Link>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
