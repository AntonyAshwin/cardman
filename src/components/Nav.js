import React from 'react';
import './Nav.css'; // Import the CSS file for styling

const Nav = () => {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
      <div style={{ fontFamily: 'Copperplate, Papyrus, fantasy' }}>
      <p style={{ fontSize: '10px', textAlign: 'center'  }}>Stupid Logo<br />with<br />zero meaning  &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;</p>
      </div>
        <li className="navigation-item"><a href="../">Home</a></li>
        <li className="navigation-item"><a href="about">About</a></li>
        <li className="navigation-item"><a href="admin">Admin</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
