import React, { useState } from 'react';
import { AuthForm } from '../auth/Auth.components';
import { login } from '../services/auth-service';
import { AxiosError } from 'axios';
import { CredentialsDto } from '../interfaces/dto/credentials-dto.interface';
import { Link } from 'react-navi';

const LoginPage = () => {
  const [error, setError] = useState<string | null>()
  const [{ email, password }, setCredentials] = useState<CredentialsDto>({
    email: '',
    password: ''
  })

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await login({
        email,
        password
      })

      console.log(response);
    } catch (error) {
      if (error?.isAxiosError) {
        setError((error as AxiosError).name);

        setTimeout(() => {
          setError(null)
        }, 2000);
      }
    }
  }

  return (
    <AuthForm onSubmit={submit}>
      <label htmlFor="email">Email</label>
      <input placeholder="Email" value={email} onChange={(event) => setCredentials({
        email: event.target.value,
        password
      })} />
      <label htmlFor="password">Password</label>
      <input placeholder="Password" type="password" value={password} onChange={(event) => setCredentials({
        email,
        password: event.target.value,
      })} />
      {error && <div>Jakiś błąd... {error}</div>}
      <button type="submit">Login</button>
      <p>Don't have an account? <Link href="/register">Sign up</Link></p>
    </AuthForm>
  )

}

export default LoginPage;