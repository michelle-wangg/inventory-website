import React from 'react';
import '../styles.css';

function Navbar() {
  return (
    <nav className="navbar">
       <a href="#about" style={{ float: 'right', display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>
        About
      </a>
      <a href="#home" style={{ float: 'right', display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>
        Home
      </a>
      <a href="/" style={{ float: 'left', display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>
        StorageManager
      </a>
    </nav>
  );
}

export default Navbar;
