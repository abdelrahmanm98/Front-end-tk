import React, { useState } from 'react';
import navbarLinks from '../../../utils/navbarLinks';
import NavbarLink from '../../molecules/NavbarLinks';
import { Fade } from 'react-awesome-reveal';
import './Navbar.scss';
import Hamburger from './components/Hamburger';
import NavbarLinksComponent from './components/NavbarLinks';
import { NavItems } from './navbar.data';

const Navbar = () => {
  const [mobiledrawer, setMoblieDrawer] = useState(false);
  const [startScrolling, setStartScrolling] = useState(false);
  const [visitOptions, setVisitOptions] = useState([]);

  // Drawer
  const toggleDrawer = () => {
    setMoblieDrawer((prevState) => !prevState);
    document.body.classList.toggle('overflowNone');
  };

  const removeOverFlow = () => {
    setMoblieDrawer(() => false);
    setIsMenuOpen(false);
    document.body.classList.remove('overflowNone');
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('overflowNone', !isMenuOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className='navbar relative lg:fixed lg:top-5 lg:left-[2.5%] rounded-[4px] w-[95%] mx-auto bg-white lg:shadow-md z-50'>
        <div className='container overflow-hidden mx-auto px-6 py-4 flex justify-between items-center min-h-[90px]'>
          {/* Hamburger Button */}
          <Hamburger mobiledrawer={isMenuOpen} toggleDrawer={toggleMenu} />

          {/* Main Nav Links */}
          <ul className='hidden lg:flex space-x-8'>
            <Fade cascade triggerOnce>
              {navbarLinks.map((link) => (
                <NavbarLink key={link.id} href={link.link}>
                  {link.name}
                </NavbarLink>
              ))}
            </Fade>
          </ul>

          {/* Contact Button */}
          <Fade direction='right' cascade triggerOnce>
            <button className='contact-us-button px-6 py-3 flex items-center space-x-4 border border-black bg-[#FFFCFA] hover:text-white transition duration-300'>
              <span className='text-black transition'>Contact us</span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M14 5l7 7m0 0l-7 7m7-7H3'
                />
              </svg>
            </button>
          </Fade>
        </div>
      </nav>

      {/* SideNav */}
      <div className={`side-nav ${isMenuOpen ? 'active' : ''}`}>
        <div className='overlay' onClick={toggleMenu}></div>

        <div className='side-nav-container overflow-hidden'>
          <Fade direction='left' cascade>
            <div
              className='flex items-center'
              style={{
                direction: 'rtl',
              }}
            >
              <button type='button' className='close' onClick={toggleMenu}>
                X
              </button>
              <a href='/' className='logo-sidebar' onClick={toggleMenu}>
                <img
                  src='/assets/icons/smallLogo.svg'
                  width={148}
                  height={42}
                  alt='logo'
                />
              </a>{' '}
            </div>
          </Fade>
          <NavbarLinksComponent
            removeOverFlow={removeOverFlow}
            startScrolling={startScrolling}
            NavItems={NavItems}
            toggleMenu={toggleMenu}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
