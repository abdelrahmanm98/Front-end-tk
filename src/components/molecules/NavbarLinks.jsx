import React from 'react';

const NavbarLink = ({ href, children }) => {
  return (
    <li>
      <a href={href} className='text-gray-700 hover:text-black'>
        {children}
      </a>
    </li>
  );
};

export default NavbarLink;
