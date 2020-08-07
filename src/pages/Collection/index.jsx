import React from 'react';
import './index.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../store/selectors/shop.selectors';
import PreviewItem from '../../components/Preview/PreviewItem';

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map((item) => (
          <PreviewItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(Collection);
