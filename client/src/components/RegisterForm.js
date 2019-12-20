import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const RegisterForm = () => {
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
      const res = await axiosWithAuth().post(
        '/api/auth/register',
        userCredentials
      );
      console.log(res.data);
      history.push('/login');
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
        <button> Register </button>
      </form>
    </div>
  );
};

export default RegisterForm;
