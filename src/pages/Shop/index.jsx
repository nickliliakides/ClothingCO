import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../store/actions/shop.actions';
import CollectionsOverviewContainer from '../../components/CollectionsOverview/collections.overview.container';
import CollectionContainer from '../Collection/collection.container';
// import { fetchCollectionsStart } from '../../store/sagas/shop.sagas';

const Shop = (props) => {
  const { match, fetchCollectionsStart } = props;

  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
