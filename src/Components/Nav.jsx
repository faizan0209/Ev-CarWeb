import React, { useState, useEffect } from 'react';
import "./Nav.css";
import { Link } from 'react-router-dom';

function Nav() {
  const [activeLink, setActiveLink] = useState('/');
  const [scrolled, setScrolled] = useState(false);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const handleScroll = () => {
    const isScrolled = window.scrollY > 0;
    setScrolled(isScrolled);
    console.log('Scrolled:', isScrolled); // Debugging log
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`Nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="Nav-logo">Evolution</div>
      <ul className='Nav-menu'>
        <li className={`Nav-home ${activeLink === '/' ? 'active' : ''}`}>
          <Link to="/" onClick={() => handleLinkClick('/')}>Home</Link>
        </li>
        <li className={activeLink === '/collection' ? 'active' : ''}>
          <Link to="/collection" onClick={() => handleLinkClick('/collection')}>Collection</Link>
        </li>
        <li className={activeLink === '/about' ? 'active' : ''}>
          <Link to="/about" onClick={() => handleLinkClick('/about')}>About</Link>
        </li>
        <li className={activeLink === '/contacts' ? 'active' : ''}>
          <Link to="/contacts" onClick={() => handleLinkClick('/contacts')}>Contacts</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
