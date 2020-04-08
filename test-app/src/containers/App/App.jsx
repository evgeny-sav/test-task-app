import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Loading from '../../components/Loading';

import './App.scss';
import Table from 'react-bootstrap/Table';

const userListToArray = list => {
  const usersArray = [];
  for (let index in list) {
    const user = list[index];
    usersArray.push(user);
  }

  return usersArray;
};

const App = () => {
  const history = useHistory();
  const { isLoading, userList } = useSelector(state => {
    return {
      isLoading: state.loading.isLoading,
      userList: state.userList,
    };
  }, shallowEqual);
  const handleUserClick = user => {
    history.push(`/users/${user.Id}`);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      <div className="App">
        <h1>App</h1>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Id</th>
              <th>Firstname</th>
              <th>Surname</th>
            </tr>
          </thead>
          <tbody>
            {userListToArray(userList).map(user => (
              <tr
                key={user.Id}
                onClick={e => {
                  handleUserClick(user);
                }}
              >
                <td>{user.Id}</td>
                <td>{user.Firstname}</td>
                <td>{user.Surname}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default App;
