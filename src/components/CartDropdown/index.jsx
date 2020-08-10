import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CustomButton from '../CustomButton';
import CartItem from '../CartItem';
import { selectCartItems } from '../../store/selectors/cart.selectors';
import { toggleCartDisplay } from '../../store/actions/cart.actions';
import {
  CartDropdownContainer,
  CartItemsContainer,
  EmptyMesageContainer,
} from './cart.dropdown.styles';

const CartDropdown = ({ cartItems, history, toggleCartDisplay }) => {
  const handleGoToCheckout = () => {
    toggleCartDisplay();
    history.push('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <EmptyMesageContainer className='empty-message'>
            Your cart is empty
          </EmptyMesageContainer>
        )}
      </CartItemsContainer>
      <CustomButton onClick={handleGoToCheckout}>Go To Checkout</CustomButton>
    </CartDropdownContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartDisplay: () => dispatch(toggleCartDisplay()),
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
