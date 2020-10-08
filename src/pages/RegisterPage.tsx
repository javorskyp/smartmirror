import React, { useState } from 'react';
import { Link } from 'react-navi';
import { AxiosError } from 'axios';
import { AuthForm, Input, Button, UpperLeftCorner, ULCTitle, TitleLineUp, TitleLineDown } from '../components/Auth.components';
import * as firebaseService from '../services/firebase-serivce';
import { CredentialsDto } from '../interfaces/dto/credentials-dto.interface';
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
    <div>
    <UpperLeftCorner>
        <ULCTitle>REGISTER</ULCTitle>
        <TitleLineUp/>
        <TitleLineDown/>
      </UpperLeftCorner>
    <AuthForm onSubmit={register}>
      <Input placeholder="Email" value={username} name="username" onChange={(event: { target: { value: any; }; }) => setRegisterData({
        username: event.target.value,
        password,
        passwordrepeat
      })} />
      <Input placeholder="password" value={password} name="password" type="password" onChange={(event: { target: { value: any; }; }) => setRegisterData({
        username,
        password: event.target.value,
        passwordrepeat
      })} />
      <Input placeholder="confirm password" value={passwordrepeat} name="confirm password" type="password" onChange={(event: { target: { value: any; }; }) => setRegisterData({
        username,
        password,
        passwordrepeat: event.target.value,
      })} />
      <Button type="submit">Register</Button>
      {error && <p>{error}</p>}
      <p>Have an account? <Link href="/login">Sign in</Link></p>
    </AuthForm>
    </div>
  )
}

export default RegisterPage;