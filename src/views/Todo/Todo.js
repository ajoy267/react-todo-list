import React from 'react';
import { logout } from '../../services/users';
import { useHistory } from 'react-router-dom';

export default function Todo({ setCurrentUser }) {
  const history = useHistory();
  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
    history.push('/');
  };
  return (
    <div>
      <h2>You are Signed In</h2>
      <button onClick={logoutUser}>Log Out</button>
    </div>
  );
}
