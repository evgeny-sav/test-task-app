import React, { Fragment, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { loginAction } from '../../store/actions/authActions';

const LoginForm = () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const { auth } = useSelector(state => {
    return {
      auth: {
        ...state.auth,
      },
    };
  }, shallowEqual);
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginAction(form));
  };
  const handleInputChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (auth.Token) {
      history.push('/');
    }
  }, []);

  return (
    <Fragment>
      <h1>Login</h1>
      {auth.Error ? (
        <p className="small text-danger">
          {auth.Error.ErrorMessage}
          {auth.Error.ErrorContent
            ? ` Missing ${auth.Error.ErrorContent} name`
            : null}
        </p>
      ) : null}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="Company"
            placeholder="Company name"
            required
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="User"
            placeholder="Username"
            required
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="Password"
            placeholder="Password"
            required
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Fragment>
  );
};

export default LoginForm;
