import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div className="app-header">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/statistics">Statistics</NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default React.memo(Header);
