import React from 'react';
import { connect } from 'react-redux';
import {
  removeItem,
  decreaseItem,
  addItem,
} from '../../store/actions/cart.actions';
import './index.scss';

const CheckoutItem = ({ item, removeItem, decreaseItem, addItem }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => decreaseItem(item)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className='price'>£{price}</span>
      <div className='remove-button' onClick={() => removeItem(item)}>
        &#10008;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  decreaseItem: (item) => dispatch(decreaseItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
