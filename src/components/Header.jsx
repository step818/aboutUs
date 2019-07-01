import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <div>
      <h3>Subscribe to NASA's Newsletter</h3>
      <Link to="/">Home</Link> | <Link to="/about">About Us</Link>
    </div>
  );
}

export default Header;