// import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Avatar from '../Avatar/Avatar';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <SearchBar />

      <div className="header-right">
        <div className="icon-tray">
          <i className="fa-solid fa-bell"></i>
          <i className="fa-solid fa-gear"></i>
        </div>
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
