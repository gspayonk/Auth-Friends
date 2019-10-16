
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = props => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Log In</Link>
      <Link to="/protected">Dashboard</Link>
    </nav>
  );
};

export default Navigation;