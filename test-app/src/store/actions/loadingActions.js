import constants from '../../constants';

export const loading = payload => ({
  type: constants.LOADING,
  payload,
});
