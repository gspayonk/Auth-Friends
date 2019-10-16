import React from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const Login = props => {

  // Creating state and handleChanges function
  const [form, setForm] = React.useState({ username: '', password: '' });
  const handleChanges = event => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const login = event => {
    event.preventDefault();
    axiosWithAuth()
      .post('/api/login', form)

      .then(response => {
        console.log(response);
        localStorage.setItem('token', response.data.payload);
        props.history.push('/');
      })

      .catch(error => {
        console.log(error.response);
        setForm({ username: '', password: '' });
      });
  };

  return (
    <div>
      <form onSubmit = {login}>

        {/* username */}
        <input
          type = 'text'
          name = 'username'
          placeholder = 'username'
          onChange = {handleChanges}
          value = {form.username}
        />

        {/* password */}
        <input
          type = 'password'
          name = 'password'
          placeholder = 'password'
          onChange = {handleChanges}
          value = {form.password}
        />

        {/* Submit button */}
        <button type = 'submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
