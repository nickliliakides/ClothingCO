import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { selectCartDisplay } from '../../store/selectors/cart.selectors';
import { selectCurrentUser } from '../../store/selectors/user.selectors';
import Logo from '../../assets/logo.png';
import './index.scss';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';

const Header = ({ currentUser, display }) => {
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
        <CartIcon />
      </div>
      {display && <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  display: selectCartDisplay,
});

export default connect(mapStateToProps)(Header);
