import React, { useState, useEffect, useRef } from 'react';
import LogoBar from '../LogoBar/LogoBar';
import NavBar from '../Navbar/NavBar';
import './Sidebar.css';

const Sidebar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false); // Close the menu if clicked outside
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <aside ref={sidebarRef} className={`sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
      <LogoBar />
      <button className="hamburger" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
        ☰
      </button>
      <NavBar isOpen={isMobileMenuOpen} />
    </aside>
  );
};

export default Sidebar;
