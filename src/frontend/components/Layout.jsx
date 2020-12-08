import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => (

    <div className="App">
        {props.children}
        <Footer />
    </div>
);


export default Layout;