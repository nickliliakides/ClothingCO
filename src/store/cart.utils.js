import CartItem from '../components/CartItem';

export const addItemToCart = (cartItems, itemToAdd) => {
  const existing = cartItems.find((item) => item.id === itemToAdd.id);

  if (existing) {
    return cartItems.map((item) =>
      item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const decreaseItemFromCart = (cartItems, itemToDeduct) => {
  const existing = cartItems.find((item) => item.id === itemToDeduct.id);

  if (existing.quantity === 1) {
    return cartItems.filter((item) => item.id !== itemToDeduct.id);
  }

  return cartItems.map((item) =>
    item.id === itemToDeduct.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
