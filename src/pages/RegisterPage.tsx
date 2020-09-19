import React, { useState } from 'react';
import { AuthForm } from '../auth/Auth.components';
import { Link } from 'react-navi';
import * as firebaseService from '../services/firebase-serivce';
import { CredentialsDto } from '../interfaces/dto/credentials-dto.interface';
import { AxiosError } from 'axios';
import { ErrorRo } from '../interfaces/ro/error-ro.interface';

const RegisterPage = () => {


  const [{ username, password, passwordrepeat }, setRegisterData] = useState({
    username: '',
    password: '',
    passwordrepeat: ''
  })

  const [error, setError] = useState<string | null>('')

  const register = async (event: React.FormEvent) => {
    event.preventDefault();
    if (password === passwordrepeat) {
      const credentialsDto: CredentialsDto = {
        email: username,
        password: password
      };

      try {
        const response = await firebaseService.createUserWithEmailAndPassword(credentialsDto);
        console.log(response);
      } catch (error) {
        if (error?.isAxiosError) {
          const errorResponse = (error as AxiosError<ErrorRo>).response;
          if (errorResponse) {
            setError(errorResponse.data.name);
            console.log((error as AxiosError).response?.data.name);
          }

          setTimeout(() => {
            setError(null)
          }, 2000);
        }
      }
    } else {
      setError('Password & password confirm must be the same')
    }
  }

  return (
    <AuthForm onSubmit={register}>
      <label htmlFor="username">Username</label>
      <input value={username} name="username" onChange={(event) => setRegisterData({
        username: event.target.value,
        password,
        passwordrepeat
      })} />
      <label htmlFor="password">Password</label>
      <input value={password} name="password" type="password" onChange={(event) => setRegisterData({
        username,
        password: event.target.value,
        passwordrepeat
      })} />
      <label htmlFor="passwordrepeat">Confirm password</label>
      <input value={passwordrepeat} name="passwordrepetat" type="password" onChange={(event) => setRegisterData({
        username,
        password,
        passwordrepeat: event.target.value,
      })} />
      <button type="submit">Register</button>
      {error && <p>{error}</p>}
      <p>Have an account? <Link href="/">Sign in</Link></p>
    </AuthForm>
  )
}

export default RegisterPage;