import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartDisplay } from '../../store/selectors/cart.selectors';
import { selectCurrentUser } from '../../store/selectors/user.selectors';
import Logo from '../../assets/logo.png';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  LogoImg,
} from './header.styles';

const Header = ({ currentUser, display }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <LogoImg src={Logo} alt='logo' />
        <p>Cloathing CO.</p>
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to='/shop'>Shop</OptionLink>
        <OptionLink to='/contact'>Contact</OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={() => auth.signOut()}>
            Sign Out
          </OptionLink>
        ) : (
          <OptionLink to='/signin'>Sign In</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {display && <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  display: selectCartDisplay,
});

export default connect(mapStateToProps)(Header);
