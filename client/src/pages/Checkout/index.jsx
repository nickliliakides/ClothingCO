import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/selectors/cart.selectors';
import CheckoutItem from '../../components/CheckoutItem';
import StripeButton from '../../components/StripeButton';
import {
  CheckoutPageContainer,
  CheckoutPageHeaderContainer,
  CheckoutPageHeaderBlockContainer,
  CheckoutPageTotalContainer,
} from './checkout.styles';

const ChechOut = ({ cartItems, total }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutPageHeaderContainer>
        <CheckoutPageHeaderBlockContainer>
          <span>Product</span>
        </CheckoutPageHeaderBlockContainer>
        <CheckoutPageHeaderBlockContainer>
          <span>Description</span>
        </CheckoutPageHeaderBlockContainer>
        <CheckoutPageHeaderBlockContainer>
          <span>Quantity</span>
        </CheckoutPageHeaderBlockContainer>
        <CheckoutPageHeaderBlockContainer>
          <span>Price</span>
        </CheckoutPageHeaderBlockContainer>
        <CheckoutPageHeaderBlockContainer>
          <span>Remove</span>
        </CheckoutPageHeaderBlockContainer>
      </CheckoutPageHeaderContainer>
      {cartItems.map((item) => (
        <CheckoutItem key={item.id} item={item} />
      ))}
      <CheckoutPageTotalContainer>
        <span>TOTAL: £{total}</span>
      </CheckoutPageTotalContainer>
      <StripeButton price={total} />
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(ChechOut);
