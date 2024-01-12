import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.jpg';
import '../App.css';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Adjust the value based on when you want the scrolling effect to trigger
      const scrollThreshold = 50;

      setScrolled(scrollTop > scrollThreshold);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={isScrolled ? 'nav-scroll' : ''}>
        <div className='left'>
          <div className='left'>
            <img src={Logo} alt='logo' />
            <p className={isScrolled ? 'txt-black' : ''}>MCHA-Express</p>
          </div>
          <div className='right'>
            <button onClick={toggleMenu} className={isScrolled ? 'txt-black' : ''}>☰</button>
          </div>
        </div>
        <div className={`right phone ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link 
                to=''
                className={isScrolled ? 'txt-black' : ''}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to=''
                className={isScrolled ? 'txt-black' : ''}
              >
                Book
              </Link>
            </li>
            <li>
              <Link 
                to=''
                className={isScrolled ? 'txt-black' : ''}
              >
                E-Waybill
              </Link>
            </li>
            <li>
              <Link 
                to=''
                className={isScrolled ? 'txt-black' : ''}
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link 
                to=''
                className={isScrolled ? 'txt-black' : ''}
              > 
                Track
              </Link>
            </li>
            <li>
              <Link className='portal'>Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
