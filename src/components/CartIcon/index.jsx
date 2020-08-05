import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './index.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartDisplay } from '../../store/actions/cart.actions';
import { selectCartItemsCount } from '../../store/cart.selectors';

const CartIcon = ({ toggleCartDisplay, itemCount }) => {
  return (
    <div className='cart-icon' onClick={toggleCartDisplay}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartDisplay: () => dispatch(toggleCartDisplay()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
