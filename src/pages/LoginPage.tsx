import React, { useState } from 'react';
import { Link } from 'react-navi';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import * as actionTypes from '../store/actionTypes/action-types';
import { AuthForm, Input, Button, UpperLeftCorner, ULCTitle, TitleLineUp, TitleLineDown } from '../components/Auth.components';
import * as firebaseService from '../services/firebase-serivce';
import { CredentialsDto } from '../interfaces/dto/credentials-dto.interface';
import { GoogleIcon } from '../assets/GoogleIcon';

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
      <UpperLeftCorner>
        <ULCTitle>LOGOWANIE</ULCTitle>
        <TitleLineUp />
        <TitleLineDown />
      </UpperLeftCorner>
      <AuthForm onSubmit={submit}>
        <Input placeholder="Email" value={email} onChange={(event: { target: { value: any; }; }) => setCredentials({
          email: event.target.value,
          password
        })} />
        <Input placeholder="Password" type="password" value={password} onChange={(event: { target: { value: any; }; }) => setCredentials({
          email,
          password: event.target.value,
        })} />
        {error && <div>Jakiś błąd... {error}</div>}
        <Button type="submit">Login</Button>
        <p>Don't have an account? <Link href="/register">Sign up</Link></p>
        <Button onClick={handleGoogleSignIn} >
          <GoogleIcon />
        Google signin
        </Button>
      </AuthForm>
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