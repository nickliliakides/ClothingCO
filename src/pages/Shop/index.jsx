import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverview from '../../components/CollectionsOverview';
import Collection from '../Collection';
import Spinner from '../../components/Spinner';
import { updateCollections } from '../../store/actions/shop.actions';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

const CollectionsOverviewWithSpinner = Spinner(CollectionsOverview);
const CollectionWithSpinner = Spinner(Collection);

const Shop = (props) => {
  const { match, updateCollections } = props;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const collectiosRef = firestore.collection('collections');

    collectiosRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setLoading(false);
    });
  }, [updateCollections, loading]);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner loading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionWithSpinner loading={loading} {...props} />
        )}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collectionsMap) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(Shop);
