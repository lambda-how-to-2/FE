import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import axios from 'axios';
import Input from './Input';
import './Login.css';
import { useHistory } from 'react-router-dom'
import { axiosWithAuth } from '../utils/axiosWithAuth';

export default function Login(props) {
  const { push } = useHistory();
  const defaultState = {
    "email": "",
    "password": ""
  };

  const [formState, setFormState] = useState(defaultState);
  const [errors, setErrors] = useState(defaultState);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // formState schema
  const formSchema = yup.object().shape({
    "email": yup
      .string()
      .required("Please enter your email.")
      .email("This is not a valid email."),
    "password": yup
      .string()
      .required("Please enter your password.")
  });

  useEffect(() => {
    formSchema.isValid(formState).then(valid => setButtonDisabled(!valid));
  }, [formState]);

  // onSubmit function
  const formSubmit = e => {
    e.preventDefault();
    axios.post('https://how-to-2-team-win.herokuapp.com/api/auth/login', formState)
    .then(response => {
        console.log(response);
        localStorage.setItem('token', response.data.token);
        push('/howtos');
    })
    .catch(error => console.log(error))
  };

  // validate whether value meets schema
  const validateChange = e => {
    e.persist();
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(valid =>
        setErrors({
          ...errors,
          [e.target.name]: ""
        })
      )
      .catch(error =>
        setErrors({
          ...errors,
          [e.target.name]: error.errors[0]
        })
      );
  };

  // onChange function
  const inputChange = e => {
    const value = e.target.value;
    setFormState({...formState, [e.target.name]: value});
    validateChange(e);
  };

  return (
    <form className="login-form" onSubmit={formSubmit}>
      <div className='welcome-back'>
        <h1>Welcome Back</h1>
      </div>
      <div className='inputs'>
        <Input
          type="text"
          name="email"
          placeholder="Email"
          onChange={inputChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={inputChange}
        />
      </div>
      <button id="loginBtn" disabled={buttonDisabled}>Log in</button>
      <div className='errors'>
        {Object.keys(errors).map((key, i) => {
          if (errors[key].length > 0) {
            return <p key={i}>{errors[key]}</p>
          }
        })}
      </div>
    </form>
  );
}