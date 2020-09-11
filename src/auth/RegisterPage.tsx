import React, { useState } from 'react';
import {AuthForm } from './Auth.components';


const RegisterPage = () => {


const [{username, password, passwordrepeat}, setRegisterData] = useState({
    username: '',
    password: '',
    passwordrepeat: ''
})

const [error, setError] = useState('')

const register = (event: React.FormEvent) => {
    event.preventDefault();
    if(password === passwordrepeat) {
        //Api
    } else {
        setError('password & password repeat mus be the same')
    }

}

    return (
        <AuthForm onSubmit={register}>
          <label htmlFor="username">Username</label>
          <input value={username} name="username" onChange={(event) => setRegisterData ({
              username: event.target.value,
              password,
              passwordrepeat
            })}/>
          <label htmlFor="password">Password</label>
          <input value={password} name="password" type="password" onChange={(event) => setRegisterData ({
              username,
              password: event.target.value,
              passwordrepeat
            })}/>
             <label htmlFor="passwordrepeat">Password</label>
          <input value={passwordrepeat} name="passwordrepetat"  onChange={(event) => setRegisterData ({
              username,
              password,
              passwordrepeat: event.target.value,
            })}/>
          <button type="submit">Register</button>
         {error.length > 0 && <p>{error}</p>}
      </AuthForm>
    )
}

export default RegisterPage;