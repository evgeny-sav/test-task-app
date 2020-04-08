import constants from '../../constants';
import { loading } from './loadingActions';
import { API } from '../../api/api';
import { fetchUserClear } from './userActions';

export const fetchUserListStart = () => ({
  type: constants.FETCH_USERLIST_START,
});

export const fetchUserListCompleted = data => ({
  type: constants.FETCH_USERLIST_COMPLETED,
  payload: data,
});

export const fetchUserListFail = err => ({
  type: constants.FETCH_USERLIST_FAIL,
  payload: err,
});

export const fetchUserListAction = token => async dispatch => {
  dispatch(fetchUserListStart());
  dispatch(fetchUserClear());
  dispatch(loading(true));
  try {
    const data = await API.fetchUserList(token);
    dispatch(fetchUserListCompleted(data));
  } catch (e) {
    dispatch(fetchUserListFail(e));
  }
  dispatch(loading(false));
};
