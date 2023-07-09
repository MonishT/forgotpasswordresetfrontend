import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Link to="/createUser">
        <button>Create User</button>
      </Link>
      {"  "}
      <Link to="/forgotPassword">
        <button>Forgot Password</button>
      </Link>
    </div>
  );
};

export default MainPage;
