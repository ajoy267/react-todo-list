import React from 'react';
import classNames from 'classnames';
import './Header.css';

export default function Header({ type, setType }) {
  return (
    <div className="login">
      <h3
        onClick={() => {
          setType('signin');
        }}
        className={classNames({ active: type === 'signin' })}
      >
        Sign In
      </h3>
      <h3
        onClick={() => {
          setType('signup');
        }}
        className={classNames({ active: type === 'signup' })}
      >
        Sign Up
      </h3>
    </div>
  );
}
