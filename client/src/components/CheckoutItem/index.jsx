import React from 'react';
import { connect } from 'react-redux';
import {
  removeItem,
  decreaseItem,
  addItem,
} from '../../store/actions/cart.actions';
import {
  CheckoutItemContainer,
  CheckoutItemImageContainer,
  CheckoutItemNameContainer,
  CheckoutItemQuantityContainer,
  CheckoutItemQuantityArrowContainer,
  CheckoutItemQuantityValueContainer,
  CheckoutItemPriceContainer,
  RemoveButtonContainer,
  CheckoutItemImage,
} from './checkout.item.styles';

const CheckoutItem = ({ item, removeItem, decreaseItem, addItem }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <CheckoutItemContainer>
      <CheckoutItemImageContainer>
        <CheckoutItemImage src={imageUrl} alt='item' />
      </CheckoutItemImageContainer>
      <CheckoutItemNameContainer>{name}</CheckoutItemNameContainer>
      <CheckoutItemQuantityContainer>
        <CheckoutItemQuantityArrowContainer onClick={() => decreaseItem(item)}>
          &#10094;
        </CheckoutItemQuantityArrowContainer>
        <CheckoutItemQuantityValueContainer>
          {quantity}
        </CheckoutItemQuantityValueContainer>
        <CheckoutItemQuantityArrowContainer onClick={() => addItem(item)}>
          &#10095;
        </CheckoutItemQuantityArrowContainer>
      </CheckoutItemQuantityContainer>
      <CheckoutItemPriceContainer>£{price}</CheckoutItemPriceContainer>
      <RemoveButtonContainer onClick={() => removeItem(item)}>
        &#10008;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  decreaseItem: (item) => dispatch(decreaseItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
