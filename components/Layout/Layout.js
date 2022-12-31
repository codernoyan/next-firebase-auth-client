import React from 'react';
import Navbar from '../Navbar/Navbar';

const Layout = ({children}) => {
  return (
    <section className="max-w-7xl mx-auto px-2 md:px-0">
      <Navbar />
      {children}
    </section>
  );
};

export default Layout;