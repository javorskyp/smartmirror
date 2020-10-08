import React, { useState } from 'react';
import { Link } from 'react-navi';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth-actions';
import { AuthForm, Input, Button, UpperLeftCorner, ULCTitle, TitleLineUp, TitleLineDown } from '../components/Auth.components';
import * as firebaseService from '../services/firebase-serivce';
import { CredentialsDto } from '../interfaces/dto/credentials-dto.interface';
import { GoogleIcon } from '../assets/GoogleIcon';

const LoginPage = (props) => {
  let history = useHistory();
  const [emailError, setEmailError] = useState<string>();
  const [credencials, setCredentials] = useState<CredentialsDto>({
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

  const handleInput = (event) => {
    props.error && props.clearResponseError();

    setCredentials({
      ...credencials,
      [event.target.name]: event.target.value
    })
  }

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!credencials.email.includes('@')) {
      return setEmailError('Email nie zawiera @');
    }

    props.login(credencials);
  }

  return (
    <div>
      <UpperLeftCorner>
        <ULCTitle>LOGOWANIE</ULCTitle>
        <TitleLineUp />
        <TitleLineDown />
      </UpperLeftCorner>
      <AuthForm onSubmit={submit}>
        <Input placeholder="Email" name="email" value={credencials.email} onChange={handleInput} />
        {emailError}
        <Input placeholder="Password" name="password" type="password" value={credencials.password} onChange={handleInput} />
        {props.error && <div>Błąd: {props.error}</div>}
        <Button type="submit">Login</Button>
        {props.isLoading && <div>Wczytywanie... Niewidzialny spinner</div>}
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
    loggedIn: state.authReducer.loggedIn,
    error: state.authReducer.loginFailureMessage,
    isLoading: state.authReducer.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (loginData: CredentialsDto) => dispatch(actions.login(loginData)),
    clearResponseError: () => dispatch(actions.clearResponseError())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);