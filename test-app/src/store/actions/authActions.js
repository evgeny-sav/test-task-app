import constants from '../../constants';
import { API } from '../../api/api';
import { loading } from './loadingActions';

export const loginStart = payload => ({
  type: constants.LOGIN_START,
  payload,
});

export const loginCompleted = payload => ({
  type: constants.LOGIN_COMPLETED,
  payload,
});

export const loginFail = payload => ({
  type: constants.LOGIN_FAIL,
  payload,
});

export const logoutStart = payload => ({
  type: constants.LOGOUT_START,
  payload,
});

export const logoutCompleted = payload => ({
  type: constants.LOGOUT_COMPLETED,
  payload,
});

export const logoutFail = payload => ({
  type: constants.LOGOUT_FAIL,
  payload,
});

export const loginAction = ({ Company, User, Password }) => async dispatch => {
  dispatch(loginStart());
  dispatch(loading(true));
  try {
    const { data } = await API.login({ Company, User, Password });
    localStorage.setItem('token', data.Token);
    dispatch(loginCompleted(data));
  } catch (e) {
    dispatch(loginFail(e.response.data.Error));
  }
  dispatch(loading(false));
};

export const logoutAction = (token, history) => async dispatch => {
  dispatch(logoutStart());
  dispatch(loading(true));
  try {
    const data = await API.logout(token);
    localStorage.setItem('token', '');
    dispatch(logoutCompleted(data));
  } catch (e) {
    dispatch(logoutFail(e.response.data.Error));
  }
  dispatch(loading(false));
  history.push('/login');
};
