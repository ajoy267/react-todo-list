import React from 'react';
import { useHistory } from 'react-router-dom';
import { logout } from '../../services/users';
import './Logout.css';

export default function Logout({ setCurrentUser }) {
  const history = useHistory();

  const logoutUser = async () => {
    await logout();
    setCurrentUser(null);
    history.push('/');
  };

  return (
    <div className="logout">
      <h3 onClick={logoutUser}>Logout</h3>
    </div>
  );
}
