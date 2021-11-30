import { createAction } from '@reduxjs/toolkit';

export const loginRequest = createAction('auth/loginRequest');
export const loginSuccess = createAction('auth/loginSuccess');
export const loginError = createAction('auth/loginError');

export const logoutSuccess = createAction('auth/logoutSuccess');

const actions = {
  loginRequest,
  loginSuccess,
  loginError,
  logoutSuccess,
};

export default actions;
