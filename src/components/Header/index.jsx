import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../logo.png';
import './index.scss';

const Header = () => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <img src={Logo} className='logo' alt='logo' />
        <p>Cloathing CO.</p>
      </Link>

      <div className='options'>
        <Link className='option' to='shop'>
          Shop
        </Link>
        <Link className='option' to='contact'>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
