import { all, call } from 'redux-saga/effects';
import { fetchCollectionsStartListener } from './shop.sagas';
import { userSagas } from './user.sagas';
import { cartSagas } from './cart.sagas';

export default function* rootSaga() {
  yield all([
    call(fetchCollectionsStartListener),
    call(userSagas),
    call(cartSagas),
  ]);
}
