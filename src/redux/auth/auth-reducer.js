import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import { loginSuccess, loginError, logoutSuccess } from './auth-actions';

const initialStateToken = null;

const initialStateError = null;

const token = createReducer(initialStateToken, {
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => initialStateToken,
});

const error = createReducer(initialStateError, {
  [loginError]: (_, { payload }) => payload,
  [loginSuccess]: () => initialStateError,
  [logoutSuccess]: () => initialStateError,
});

const isAuthenticated = createReducer(false, {
  [loginSuccess]: () => true,
  [loginError]: () => false,
  [logoutSuccess]: () => false,
});

export default combineReducers({
  token,
  error,
  isAuthenticated,
});
