import React, { useState } from 'react';
import { signInUser, signUpUser } from '../../services/users';
import './Auth.css';
import AuthForm from '../../components/AuthForm/AuthForm';
import Header from '../../components/Header/Header';

export default function Auth({ setCurrentUser }) {
  const [type, setType] = useState('signin');
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp;
      if (type === 'signin') {
        resp = await signInUser(email, password);
      } else {
        resp = await signUpUser(email, password);
      }
      setCurrentUser(resp);
    } catch {
      setErrorMessage('Something is not correct. Try Again.');
    }
  };
  return (
    <div>
      <Header type={type} setType={setType} />
      <AuthForm
        errorMessage={errorMessage}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
