import styled from 'styled-components';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

export const CartIconContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIconContainer = styled(ShoppingIcon)`
  width: 32px;
  height: 32px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  padding: 0 4px;
  font-size: 15px;
  font-weight: bold;
  bottom: 10px;
  color: white;
  background-color: black;
  border-radius: 50px;
`;
