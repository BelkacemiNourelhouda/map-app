import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar({ username, removeToken }) {
  return (
    <div className="navbar">
      <h2>Navbar</h2>
      <p style={{marginLeft: '1100px'}}> Welcome, {username}</p>
      <button style={{width: '100px', height: '30px', padding: '5px', backgroundColor: '#f0f0f0'}} onClick={removeToken}>Disconnect</button>
    </div>
  );
}

Navbar.propTypes = {
  username: PropTypes.string.isRequired,
  removeToken: PropTypes.func.isRequired
};
