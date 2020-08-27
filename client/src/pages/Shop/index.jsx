import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../store/actions/shop.actions';
import {
  SpinnerOverlay,
  SpinnerContainer,
} from '../../components/Spinner/spinner.styles';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/CollectionsOverview/collections.overview.container')
);
const CollectionContainer = lazy(() =>
  import('../Collection/collection.container')
);

const Shop = ({ match, fetchCollectionsStart }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Suspense
        fallback={
          <SpinnerOverlay>
            <SpinnerContainer />
          </SpinnerOverlay>
        }
      >
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
