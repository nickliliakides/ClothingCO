import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './index.scss';
import CustomButton from '../CustomButton';
import CartItem from '../CartItem';
import { selectCartItems } from '../../store/cart.selectors';
import { toggleCartDisplay } from '../../store/actions/cart.actions';

const CartDropdown = ({ cartItems, history, toggleCartDisplay }) => {
  const handleGoToCheckout = () => {
    toggleCartDisplay();
    history.push('/checkout');
  };

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={handleGoToCheckout}>Go To Checkout</CustomButton>
    </div>
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
