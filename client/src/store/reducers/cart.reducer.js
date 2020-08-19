import {
  TOGGLE_CART_DISPLAY,
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_ITEM,
  CLEAR_CART,
} from '../actions/types';
import { addItemToCart, decreaseItemFromCart } from '../cart.utils';

const initialState = {
  display: false,
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  const { payload, type } = action;
  const { display, cartItems } = state;

  switch (type) {
    case TOGGLE_CART_DISPLAY:
      return {
        ...state,
        display: !display,
      };
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(cartItems, payload),
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cartItems: cartItems.filter((item) => item.id !== payload.id),
      };
    case DECREASE_ITEM:
      return {
        ...state,
        cartItems: decreaseItemFromCart(cartItems, payload),
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
