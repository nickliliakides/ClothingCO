import {
  GOOGLE_SIGNIN_START,
  SIGNIN_START,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  SIGNOUT_START,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAILURE,
  CHECK_USER_SESSION,
} from './types';

export const googleSignInStart = () => ({
  type: GOOGLE_SIGNIN_START,
});

export const signInStart = (credentials) => ({
  type: SIGNIN_START,
  payload: credentials,
});

export const signInSuccess = (user) => ({
  type: SIGNIN_SUCCESS,
  payload: user,
});

export const signInFailure = (error) => ({
  type: SIGNIN_FAILURE,
  payload: error,
});

export const signUpStart = (credentials) => ({
  type: SIGNUP_START,
  payload: credentials,
});

export const signUpSuccess = ({ user, additionalData }) => ({
  type: SIGNUP_SUCCESS,
  payload: { user, additionalData },
});

export const signUpFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const signOutStart = () => ({
  type: SIGNOUT_START,
});

export const signOutSuccess = () => ({
  type: SIGNOUT_SUCCESS,
});

export const signOutFailure = (error) => ({
  type: SIGNIN_FAILURE,
  payload: error,
});

export const checkUserSession = () => ({
  type: CHECK_USER_SESSION,
});
