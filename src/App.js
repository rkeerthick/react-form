import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [values, setValues] = useState({
    userName: '',
    email: '',
    dob: '',
    password: '',
    confirmPassword: ''
  })

  const inputs = [
    {
      id:1,
      name: 'userName',
      type: 'text',
      placeholder: 'user name',
      error: 'Invalid user name',
      label: 'UserName',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true
    },
    {
      id:2,
      name: 'email',
      type: 'email',
      placeholder: 'email',
      error: 'Invalid email',
      label: 'email',
      pattern: '^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$',
      required: true
    },
    {
      id:3,
      name: 'dob',
      type: 'date',
      placeholder: 'dob',
      label: 'dob',
      required: true
    },
    {
      id:4,
      name: 'password',
      type: 'password',
      placeholder: 'password',
      error: 'Invalid password',
      label: 'password',
      pattern: "^(?=.*[0-9])(?=.*[A-Za-z])(?=.*[@$!%*#?&])[A-Za-z0-9!@$%*#?&]{8,20}$",
      required: true
    },
    {
      id:5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'confirm password',
      error: 'Password doesn\'t match',
      label: 'confirm password',
      pattern: values.password,
      required: true
    }
  ]

  const handleClick = (e) => {
    e.preventDefault();
    
    console.log(values);
  }

  const handleChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  return (
    <div className="App">
      <form onSubmit={handleClick}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <Input key={input.id} {...input} value={values[input.name]} handleChange={handleChange} />
        )) }
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
