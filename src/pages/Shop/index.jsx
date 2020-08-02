import React, { useState } from 'react';
import SHOP_DATA from '../../shop.data';
import Preview from '../../components/Preview';

const Shop = () => {
  const [state, seatState] = useState({
    collections: SHOP_DATA,
  });

  const { collections } = state;
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherProps }) => (
        <Preview key={id} {...otherProps}></Preview>
      ))}
    </div>
  );
};

export default Shop;
