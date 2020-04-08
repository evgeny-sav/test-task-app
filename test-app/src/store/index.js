import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import thunk from 'redux-thunk';
import loadingReducer from './reducers/loadingReducer';
import authReducer from './reducers/authReducer';
import userReducer from './reducers/userReducer';
import userListReducer from './reducers/userListReducer';

const composeEnhancers = composeWithDevTools({});
const reducers = combineReducers({
  loading: loadingReducer,
  auth: authReducer,
  user: userReducer,
  userList: userListReducer,
});
const middleware = applyMiddleware(thunk);
const store = createStore(reducers, composeEnhancers(middleware));

export default store;
