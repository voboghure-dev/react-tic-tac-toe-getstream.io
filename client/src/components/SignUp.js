import React, { useState } from 'react';

export default function SignUp() {
  const [user, setUser] = useState(null);

  const signUp = () => {

  }

  return (
    <div className='signUp'>
      <label>Sign Up</label>
      <input
        placeholder='First Name'
        onChange={(event) => {
          setUser({ ...user, firstName: event.target.value });
        }}
      />
      <input
        placeholder='Last Name'
        onChange={(event) => {
          setUser({ ...user, lastName: event.target.value });
        }}
      />
      <input
        placeholder='Username'
        onChange={(event) => {
          setUser({ ...user, username: event.target.value });
        }}
      />
      <input
        placeholder='Password'
        onChange={(event) => {
          setUser({ ...user, password: event.target.value });
        }}
      />

      <button onClick={signUp}>Sign Up</button>
    </div>
  );
}
