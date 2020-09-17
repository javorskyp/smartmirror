import React, { useState } from 'react';
import {AuthForm } from '../auth/Auth.components';
import { Link } from 'react-navi';

const RegisterPage = () => {


const [{username, password, passwordrepeat}, setRegisterData] = useState({
    username: '',
    password: '',
    passwordrepeat: ''
})

const [error, setError] = useState('')

const register = async (event: React.FormEvent) => {
    event.preventDefault();
    if(password === passwordrepeat) {
        //not finished register
     
    } else {
        setError('Password & password confirm must be the same')
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
             <label htmlFor="passwordrepeat">Confirm password</label>
          <input value={passwordrepeat} name="passwordrepetat" type="password" onChange={(event) => setRegisterData ({
              username,
              password,
              passwordrepeat: event.target.value,
            })}/>
          <button type="submit">Register</button>
         {error.length > 0 && <p>{error}</p>}
         <p>Have an account? <Link href="/">Sign in</Link></p>
      </AuthForm>
    )
}

export default RegisterPage;