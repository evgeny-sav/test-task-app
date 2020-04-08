import constants from '../../constants';

export const initialState = {
  Error: null,
  Token: null,
};

const actions = {
  [constants.LOGIN_START]: state => state,
  [constants.LOGIN_COMPLETED]: (state, action) => ({
    ...action.payload,
  }),
  [constants.LOGIN_FAIL]: (state, action) => {
    console.log(action);
    return {
      ...state,
      Token: null,
      Error: action.payload,
    };
  },

  [constants.LOGOUT_START]: state => state,
  [constants.LOGOUT_COMPLETED]: state => ({ ...state, Token: null }),
  [constants.LOGOUT_FAIL]: (state, action) => ({
    ...state,
    Token: '',
    Error: action.payload,
  }),
};

const authReducer = (state = initialState, action) =>
  actions[action.type] ? actions[action.type](state, action) : state;

export default authReducer;
