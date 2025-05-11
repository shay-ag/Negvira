import React from 'react';
import './NavBar.css';

const navItems = [
  { label: 'Home', icon: <i className="fa-solid fa-house"></i> },
  { label: 'Courses', icon: <i className="fa-solid fa-clock"></i> },
];

const NavBar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <nav className={`nav-links ${isOpen ? 'visible' : ''}`}>
      <ul>
        {navItems.map((item, idx) => (
          <li key={idx} className="nav-item">
            <span className="icon">{item.icon}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
