import React, { useState } from 'react';
import { AuthForm } from '../auth/Auth.components';
import * as firebaseService from '../services/firebase-serivce';
import { CredentialsDto } from '../interfaces/dto/credentials-dto.interface';
import { Link } from 'react-navi';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import * as actionTypes from '../store/actionTypes/action-types';

const LoginPage = (props) => {
  let history = useHistory();
  const [error, setError] = useState<string | null>()
  const [{ email, password }, setCredentials] = useState<CredentialsDto>({
    email: '',
    password: ''
  })

  async function handleGoogleSignIn() {
    try {
      await firebaseService.fetchGoogleToken();
      history.push("/");
    } catch (e) {

    }
  }

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();

    props.login(email, password);
    /*       firebaseService.loginUserWithEmailAndPassword({
            email,
            password
          }) */
  }

  return (
    <div>
      <span>{props.loggedIn}</span>
      <button onClick={submit}>Dispatch</button>

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

      <button onClick={handleGoogleSignIn}>
        Google signin
      </button>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (email: string, password: string) => dispatch({ type: actionTypes.LOGIN, email: email, password: password })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);