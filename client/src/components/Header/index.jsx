import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartDisplay } from '../../store/selectors/cart.selectors';
import { selectCurrentUser } from '../../store/selectors/user.selectors';
import { signOutStart } from '../../store/actions/user.actions';
import Logo from '../../assets/logo.png';
import CartIcon from '../CartIcon';
import CartDropdown from '../CartDropdown';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  LogoImg,
} from './header.styles';

const Header = ({ currentUser, display, signOutStart }) => {
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
          <OptionLink as='div' onClick={signOutStart}>
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

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
