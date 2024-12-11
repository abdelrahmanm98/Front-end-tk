import React from 'react';

const Hamburger = ({ mobiledrawer, toggleDrawer }) => {
  return (
    <div
      className={`hamburger ${mobiledrawer ? 'active' : ''}`}
      onClick={toggleDrawer}
    >
      <span className='line'></span>
      <span className='line'></span>
      <span className='line'></span>
    </div>
  );
};

export default Hamburger;
