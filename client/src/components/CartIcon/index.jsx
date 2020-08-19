import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { toggleCartDisplay } from '../../store/actions/cart.actions';
import { selectCartItemsCount } from '../../store/selectors/cart.selectors';
import {
  ShoppingIconContainer,
  CartIconContainer,
  ItemCountContainer,
} from './cart.icon.styles';

const CartIcon = ({ toggleCartDisplay, itemCount }) => {
  return (
    <CartIconContainer onClick={toggleCartDisplay}>
      <ShoppingIconContainer />
      <ItemCountContainer className='item-count'>
        {itemCount}
      </ItemCountContainer>
    </CartIconContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartDisplay: () => dispatch(toggleCartDisplay()),
});

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
