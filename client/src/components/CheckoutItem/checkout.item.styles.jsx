import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const CheckoutItemImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const CheckoutItemImage = styled.img`
  width: 100%;
  // height: 100%;
  max-height: 120px;
`;

export const CheckoutItemNameContainer = styled.span`
  width: 23%;
`;

export const CheckoutItemQuantityContainer = styled.span`
  width: 23%;
  display: flex;
`;

export const CheckoutItemQuantityArrowContainer = styled.div`
  cursor: pointer;
`;

export const CheckoutItemQuantityValueContainer = styled.span`
  margin: 0 10px;
`;

export const CheckoutItemPriceContainer = styled.span`
  width: 23%;
`;

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
  color: red;
  font-size: 24px;
`;
