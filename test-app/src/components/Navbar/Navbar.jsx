import React, { useEffect } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import './Navbar.scss';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import { logoutAction } from '../../store/actions/authActions';

const Navbar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { auth } = useSelector(state => {
    return {
      auth: {
        ...state.auth,
      },
    };
  }, shallowEqual);

  const handleLogout = e => {
    e.preventDefault();
    dispatch(logoutAction(auth.Token, history));
  };

  return (
    <div className="Navbar">
      <div className="brand">
        <Link to="/">Seagull AS</Link>
      </div>
      <div className="menulist">
        <ul>
          {auth.Token ? (
            <li>
              <NavLink to="/" activeClassName="active">
                Home
              </NavLink>
            </li>
          ) : null}
          {!auth.Token ? (
            <li>
              <NavLink to="/login" activeClassName="active">
                Login
              </NavLink>
            </li>
          ) : null}
          {auth.Token ? (
            <li>
              <NavLink to="/logout" onClick={handleLogout}>
                Logout
              </NavLink>
            </li>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
