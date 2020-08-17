import { takeLatest, put, all, call } from 'redux-saga/effects';

import { CLEAR_CART, SIGNOUT_SUCCESS } from '../actions/types';
import { clearCart } from '../actions/cart.actions';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSucess() {
  yield takeLatest(SIGNOUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSucess)]);
}
