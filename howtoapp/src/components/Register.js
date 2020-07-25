import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Input from './Input';
import * as yup from 'yup';
import axios from 'axios';
import './Register.css';

export default function Register(props) {
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
      .required("Please enter a password.")
      .min(8, "Password must be at least 8 characters long.")
  });

  useEffect(() => {
    formSchema.isValid(formState).then(valid => setButtonDisabled(!valid));
  }, [formState]);



  // onSubmit function
  const formSubmit = e => {
    e.preventDefault();
    console.log(formState);
    axios.post('https://how-to-2-team-win.herokuapp.com/api/auth/register', formState)
      .then((res) => {
        console.log("form submitted success!", res);
      })
      .catch((err) => console.log(err))
      setFormState(defaultState)
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
    setFormState({ ...formState, [e.target.name]: value });
    validateChange(e);
  };

  return (
    <form onSubmit={formSubmit}>
      <div className="welcome">
        <h1>Welcome</h1>
      </div>
      <div className="inputs">
        <Input
          type="text"
          name="email"
          onChange={inputChange}
          value={formState["email"]}
          placeholder="email"
        />
        <Input
          type="password"
          name="password"
          onChange={inputChange}
          value={formState["password"]}
          placeholder="Password"
        />
      </div>
      <div className="already-member">
        <p>Already a member?</p>
        <Link to="/login">Log In</Link>
      </div>
      <button disabled={buttonDisabled}>Sign up</button>
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