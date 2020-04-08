import constants from '../../constants';
import { loading } from './loadingActions';
import { API } from '../../api/api';

export const fetchUserClear = () => ({
  type: constants.FETCH_USER_CLEAR,
});

export const fetchUserStart = () => ({
  type: constants.FETCH_USER_START,
});

export const fetchUserCompleted = data => ({
  type: constants.FETCH_USER_COMPLETED,
  payload: data,
});

export const fetchUserFail = err => ({
  type: constants.FETCH_USER_FAIL,
  payload: err,
});

export const fetchUserAction = (id, token) => async dispatch => {
  dispatch(fetchUserStart());
  dispatch(loading(true));
  try {
    const data = await API.fetchUserById(id, token);
    dispatch(fetchUserCompleted(data));
  } catch (e) {
    dispatch(fetchUserFail(e));
  }
  dispatch(loading(false));
};
