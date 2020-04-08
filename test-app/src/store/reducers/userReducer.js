import constants from '../../constants';

export const initialState = {
  Id: null,
  Firstname: null,
  Surname: null,
  Nationality: null,
  Rank: null,
  DateOfBirth: null,
  Address: null,
};

const actions = {
  [constants.FETCH_USER_CLEAR]: () => ({}),
  [constants.FETCH_USER_START]: state => state,
  [constants.FETCH_USER_COMPLETED]: (state, action) => ({
    ...action.payload.data,
  }),
  [constants.FETCH_USER_FAIL]: (state, action) => {
    return {
      ...state,
      Error: action.payload,
    };
  },
};

const userReducer = (state = initialState, action) =>
  actions[action.type] ? actions[action.type](state, action) : state;

export default userReducer;
