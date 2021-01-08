import React from 'react';
import Footer from './Footer';

const Layout = (props) => {
  const { children } = props;
  return (
    <div className='App'>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
