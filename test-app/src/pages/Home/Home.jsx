import React, { useEffect } from 'react';
import Helmet from 'react-helmet/es/Helmet';
import { useHistory } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import Navbar from '../../components/Navbar';
import App from '../../containers/App';
import './home.scss';
// import { fetchUserAction } from '../../store/actions/userActions';
import { fetchUserListAction } from '../../store/actions/userListActions';

// eslint-disable-next-line react/prop-types
const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth, shallowEqual);

  useEffect(() => {
    if (!auth.Token) {
      history.push('/login');
    } else {
      dispatch(fetchUserListAction(auth.Token));
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>{`Test App`}</title>
      </Helmet>
      <div className="Home">
        <Navbar />
        <App />
      </div>
    </>
  );
};

export default Home;
