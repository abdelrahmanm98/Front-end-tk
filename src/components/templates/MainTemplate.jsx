import React from 'react';
import Navbar from '../organisms/Navbar/Navbar';

const MainTemplate = ({ children }) => {
  return (
    <main>
      <Navbar />

      <div>{children}</div>
    </main>
  );
};

export default MainTemplate;
