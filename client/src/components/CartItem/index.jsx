import React from 'react';
import {
  CartItemContainer,
  CartItemImgContainer,
  CartItemDetailsContainer,
  CartItemDetailsNameContainer,
  CartItemDetailsPriceContainer,
} from './cart.item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemContainer>
      <CartItemImgContainer src={imageUrl} alt={`${name} item`} />
      <CartItemDetailsContainer>
        <CartItemDetailsNameContainer>{name}</CartItemDetailsNameContainer>
        <CartItemDetailsPriceContainer>
          {quantity} x £{price}
        </CartItemDetailsPriceContainer>
      </CartItemDetailsContainer>
    </CartItemContainer>
  );
};

export default React.memo(CartItem);
