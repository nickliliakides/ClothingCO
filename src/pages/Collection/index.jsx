import React from 'react';
import { connect } from 'react-redux';
import { selectCollection } from '../../store/selectors/shop.selectors';
import PreviewItem from '../../components/Preview/PreviewItem';
import {
  CollectionPageContainer,
  CollectionPageTitleContainer,
  CollectionPageItemsContainer,
} from './collection.styles';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionPageTitleContainer>{title}</CollectionPageTitleContainer>
      <CollectionPageItemsContainer>
        {items.map((item) => (
          <PreviewItem key={item.id} item={item} />
        ))}
      </CollectionPageItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
