import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const LoginForm = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: '',
    password: ''
  });
  const history = useHistory();

  const handleChange = e => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = axiosWithAuth().post('/api/login', userCredentials);
      localStorage.setItem('token', res.data.payload);
      history.push('/friends');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          value={userCredentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={userCredentials.password}
          onChange={handleChange}
        />
        <button> Log In </button>
      </form>
    </div>
  );
};

export default LoginForm;
