import { takeLatest, call, put, all } from 'redux-saga/effects';

import { FETCH_COLLECTIONS_START } from '../actions/types';
import {
  fetchCollectionsSuccess,
  fetchCollectionsError,
} from '../actions/shop.actions';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';

export function* fetchCollectionsStartAsync() {
  try {
    const collectiosRef = firestore.collection('collections');
    const snapshot = yield collectiosRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsError(error.message));
  }
}

export function* fetchCollectionsStartListener() {
  yield takeLatest(FETCH_COLLECTIONS_START, fetchCollectionsStartAsync);
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStartListener)]);
}
