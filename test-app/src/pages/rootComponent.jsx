import React, { Suspense } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from 'react-router-dom';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';

import store from '../store';
// import App from '../containers/App/async';
import Home from './Home/async';
import Login from './Login/async';
import UserPage from './UserPage/async';
import Loading from '../components/Loading/Loading';

const RootComponent = () => {
  return (
    <Provider store={store}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Test App</title>
      </Helmet>
      <Router>
        <div className="RootComponent">
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/users/:id">
                <UserPage />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Redirect from="/*" to="/" />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </Provider>
  );
};

export default RootComponent;
