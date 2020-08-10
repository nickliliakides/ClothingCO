import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../../store/actions/cart.actions';
import {
  CollectionPreviewItemContainer,
  CollectionPreviewItemImageContainer,
  CollectionPreviewItemFooterContainer,
  CollectionPreviewItemFooterNameContainer,
  CollectionPreviewItemFooterPriceContainer,
  CollectionPreviewItemButtonContainer,
} from './preview.item.styles';

const PreviewItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionPreviewItemContainer>
      <CollectionPreviewItemImageContainer
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <CollectionPreviewItemFooterContainer className='collection-footer'>
        <CollectionPreviewItemFooterNameContainer className='name'>
          {name}
        </CollectionPreviewItemFooterNameContainer>
        <CollectionPreviewItemFooterPriceContainer className='price'>
          £{price}
        </CollectionPreviewItemFooterPriceContainer>
      </CollectionPreviewItemFooterContainer>
      <CollectionPreviewItemButtonContainer
        onClick={() => addItem(item)}
        inverted
      >
        Add To Cart
      </CollectionPreviewItemButtonContainer>
    </CollectionPreviewItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(PreviewItem);
