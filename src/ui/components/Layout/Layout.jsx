import React from 'react';
import Calculator from './../Calculator/Calculator';
import Header from '../Header';
import Footer from '../Footer';

const Layout = () => {
    return (
        <div className="h-screen w-screen flex flex-col overflow-hidden">
            <Header />
            
                <Calculator />
            
            <Footer />
        </div>
    );
};

export default Layout;
