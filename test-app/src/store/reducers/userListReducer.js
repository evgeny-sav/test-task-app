import constants from '../../constants';

export const initialState = {};

const actions = {
  [constants.FETCH_USERLIST_START]: state => state,
  [constants.FETCH_USERLIST_COMPLETED]: (state, action) => ({
    ...action.payload.data,
  }),
  [constants.FETCH_USERLIST_FAIL]: (state, action) => {
    return {
      ...state,
      Error: action.payload,
    };
  },
};

const userListReducer = (state = initialState, action) =>
  actions[action.type] ? actions[action.type](state, action) : state;

export default userListReducer;
