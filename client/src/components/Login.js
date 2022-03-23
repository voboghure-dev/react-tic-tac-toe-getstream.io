import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {};

  return (
    <div className='login'>
      <label>Login</label>
      <input
        placeholder='Username'
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        placeholder='Password'
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />

      <button onClick={login}>Login</button>
    </div>
  );
}
