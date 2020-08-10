import React from 'react';
import PreviewItem from './PreviewItem';
import {
  CollectionPreviewContainer,
  CollectionPreviewTitleContainer,
  CollectionPreviewItemsContainer,
} from './preview.styles';

const Preview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <CollectionPreviewTitleContainer>
        {title.toUpperCase()}
      </CollectionPreviewTitleContainer>
      <CollectionPreviewItemsContainer>
        {items
          .filter((item, i) => i < 4)
          .map((item) => (
            <PreviewItem key={item.id} item={item} />
          ))}
      </CollectionPreviewItemsContainer>
    </CollectionPreviewContainer>
  );
};

export default Preview;
