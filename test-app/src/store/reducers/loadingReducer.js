import constants from '../../constants';

export const initialState = {
  isLoading: false,
};

const actions = {
  [constants.LOADING]: (state, action) => ({
    ...state,
    isLoading: action.payload,
  }),
};

const loadingReducer = (state = initialState, action) =>
  actions[action.type] ? actions[action.type](state, action) : state;

export default loadingReducer;
