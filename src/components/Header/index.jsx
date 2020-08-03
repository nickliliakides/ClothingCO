import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../logo.png';
import './index.scss';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => {
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
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            Sign Out
          </div>
        ) : (
          <Link className='option' to='signin'>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
