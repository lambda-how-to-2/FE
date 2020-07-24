import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Input from './Input';
import * as yup from 'yup';
import axios from 'axios';
import './Register.css';

export default function Register(props) {
  const defaultState = {
    "Full Name": "",
    "Email": "",
    "Username": "",
    "Password": ""
  };

  const [formState, setFormState] = useState(defaultState);
  const [errors, setErrors] = useState(defaultState);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  // formState schema
  const formSchema = yup.object().shape({
    "Full Name": yup.string().required('Please enter your name.'),
    "Email": yup
      .string()
      .required("Please enter your email.")
      .email("This is not a valid email."),
    "Username": yup
      .string()
      .required("Please enter a username.")
      .min(3, "Username must be at least 3 characters long."),
    "Password": yup
      .string()
      .required("Please enter a password.")
      .min(8, "Password must be at least 8 characters long.")
  });

  useEffect(() => {
    formSchema.isValid(formState).then(valid => setButtonDisabled(!valid));
  }, [formState]);

  const postNewUser = newUser => {
    console.log("form submitted!");
    axios
      .post('https://how-to-2-team-win.herokuapp.com/api/auth/login', newUser)
      .then((res) => {
        props.setUsers([...props.users, res.data]);
        console.log("form submitted success!");
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setFormState(defaultState);
      });
  };

  // onSubmit function
  const formSubmit = e => {
    e.preventDefault();
    const newUser = {
      "Full Name": formState["Full Name"],
      "Email": formState["Email"],
      "Username": formState["Username"],
      "Password": formState["Password"]
    };
    postNewUser(newUser);
    console.log(newUser);
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
    <form onSubmit={formSubmit}>
      <div className="welcome">
        <h1>Welcome</h1>
      </div>
      <div className="inputs">
        <Input
          type="text"
          name="Full Name"
          onChange={inputChange}
          value={formState["Full Name"]}
          placeholder="Full Name"
        />
        <Input
          type="text"
          name="Email"
          onChange={inputChange}
          value={formState["Email"]}
          placeholder="Email"
        />
        <Input
          type="text"
          name="Username"
          onChange={inputChange}
          value={formState["Username"]}
          placeholder="Username"
        />
        <Input
          type="password"
          name="Password"
          onChange={inputChange}
          value={formState["Password"]}
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