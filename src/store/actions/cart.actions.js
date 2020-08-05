import {
  TOGGLE_CART_DISPLAY,
  ADD_ITEM,
  REMOVE_ITEM,
  DECREASE_ITEM,
} from './types';

export const toggleCartDisplay = () => ({
  type: TOGGLE_CART_DISPLAY,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const decreaseItem = (item) => ({
  type: DECREASE_ITEM,
  payload: item,
});
