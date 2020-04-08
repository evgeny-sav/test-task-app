import React, { Fragment, useEffect } from 'react';
import Helmet from 'react-helmet/es/Helmet';
import { useHistory, useParams } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import Navbar from '../../components/Navbar';
import GoBackButon from '../../components/GoBackButton';
import './userPage.scss';
import { fetchUserAction } from '../../store/actions/userActions';
import Loading from '../../components/Loading';

// eslint-disable-next-line react/prop-types
const UserPage = () => {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();
  const { auth, user, isLoading } = useSelector(
    state => ({
      isLoading: state.loading.isLoading,
      auth: state.auth,
      user: state.user,
    }),
    shallowEqual,
  );

  useEffect(() => {
    if (!auth.Token || user.Error) {
      history.push('/login');
    }

    dispatch(fetchUserAction(params.id, auth.Token));
  }, []);

  return (
    <>
      <Helmet>
        <title>{`Test App`}</title>
      </Helmet>
      <div className="UserPage">
        <Navbar />
        <GoBackButon />
        <h1>
          {user.Firstname} {user.Surname}
        </h1>

        {isLoading ? (
          <Loading />
        ) : (
          <Fragment>
            <p>
              <span className="text-primary">Address:</span> {user.Address}
            </p>
            <p>
              <span className="text-primary">Date of birth:</span>{' '}
              {user.DateOfBirth}
            </p>
          </Fragment>
        )}
      </div>
    </>
  );
};

export default UserPage;
