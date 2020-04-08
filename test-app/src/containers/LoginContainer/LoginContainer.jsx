import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

import Loading from '../../components/Loading';

import './LoginContainer.scss';
import LoginForm from '../../components/LoginForm';

const LoginContainer = () => {
  const { isLoading } = useSelector(state => {
    return {
      isLoading: state.loading.isLoading,
    };
  }, shallowEqual);

  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      <div className="LoginContainer">
        <LoginForm />
      </div>
    </Container>
  );
};

export default LoginContainer;
