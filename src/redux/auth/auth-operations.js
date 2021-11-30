import axios from 'axios';

import {
  loginRequest,
  loginSuccess,
  loginError,
  logoutSuccess,
} from './auth-actions';

axios.defaults.baseURL = 'https://site.ualegion.com/';

// const token = {
//   set(token) {
//     axios.defaults.headers.common.Authorization = `Bearer ${token}`;
//   },
//   unset() {
//     axios.defaults.headers.common.Authorization = '';
//   },
// };

export const logIn = body => async dispatch => {
  dispatch(loginRequest());

  try {
    const { data } = await axios.post('/api/v1/security/login', body);

    localStorage.setItem('auth', JSON.stringify(data.token));

    dispatch(loginSuccess(data));
  } catch (error) {
    dispatch(loginError(error));
  }
};

export const logOut = () => async dispatch => {
  localStorage.removeItem('auth');
  dispatch(logoutSuccess());
};
