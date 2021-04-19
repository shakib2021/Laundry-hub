import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from './Navbar/Navbar';
import './Header.css'
const Header = () => {
    return (
        <section className='header'>
          <Navbar></Navbar>  
          <HeaderMain></HeaderMain>
        </section>
    );
};

export default Header;