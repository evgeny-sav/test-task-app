import React, { useEffect } from 'react';
import Helmet from 'react-helmet/es/Helmet';
import { useHistory } from 'react-router-dom';
import { shallowEqual, useSelector } from 'react-redux';

import Navbar from '../../components/Navbar';
import LoginContainer from '../../containers/LoginContainer';
import './login.scss';

// eslint-disable-next-line react/prop-types
const Login = () => {
  const history = useHistory();
  const auth = useSelector(state => state.auth, shallowEqual);

  useEffect(() => {
    if (auth.Token) {
      history.push('/');
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>{`Test App`}</title>
      </Helmet>
      <div className="Login">
        <Navbar />
        <LoginContainer />
      </div>
    </>
  );
};

export default Login;
