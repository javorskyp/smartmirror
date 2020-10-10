import React, { useState } from 'react';
import { Link } from 'react-navi';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth-actions';
import { useHistory } from "react-router-dom";
import { AuthForm, Input, Button, UpperLeftCorner, ULCTitle, TitleLineUp, TitleLineDown, ButtonTitleDiv } from '../components/Auth.components';
import * as firebaseService from '../services/firebase-serivce';
import { CredentialsDto } from '../interfaces/dto/credentials-dto.interface';
import { GoogleIcon } from '../assets/GoogleIcon';

const LoginPage = (props) => {
  let history = useHistory();
  const [emailError, setEmailError] = useState<string>();
  const [credencials, setCredentials] = useState({
    email: {
      value: '',
      touched: '',
      valid: true
    },
    password: {
      value: '',
      touched: '',
      valid: true
    }
  })

  async function handleGoogleSignIn() {
    try {
      await firebaseService.fetchGoogleToken();
      history.push("/");
    } catch (e) {

    }
  }

  const handleInput = (event) => {
    event.persist();
    props.error && props.clearResponseError();

    setCredentials((prevState) => ({
      ...prevState,
      [event.target.name]: {
        ...prevState[event.target.name],
        value: event.target.value
      }
    }));

    if (event.target.name === 'email' && !event.target.value.includes('@')) {
      setCredentials((prevState) => ({
        ...prevState,
        [event.target.name]: {
          ...prevState[event.target.name],
          valid: false
        }
      }));

      setEmailError('Email nie zawiera @');
    } else {
      setCredentials((prevState) => ({
        ...prevState,
        [event.target.name]: {
          ...prevState[event.target.name],
          valid: true
        }
      }));

      setEmailError('');
    }
  }

  const handleBlur = (event) => {
    event.persist();

    setCredentials((prevState) => ({
      ...prevState,
      [event.target.name]: {
        ...prevState[event.target.name],
        touched: true
      }
    }));
  }

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();

    props.login({
      email: credencials.email.value,
      password: credencials.password.value
    });
  }

  return (
    <div>
      <UpperLeftCorner>
        <ULCTitle>LOGIN</ULCTitle>
        <TitleLineUp />
        <TitleLineDown />
      </UpperLeftCorner>
      <AuthForm onSubmit={submit}>
        <Input placeholder="Email" name="email" value={credencials.email.value} onChange={handleInput} onBlur={handleBlur} valid={credencials.email.valid} />
        {(emailError && credencials.email.touched) && emailError}

        <Input placeholder="Password" name="password" type="password" value={credencials.password.value} onChange={handleInput} onBlur={handleBlur} valid={credencials.password.valid} />
        {props.error && <div>Błąd: {props.error}</div>}

        <Button type="submit">Login</Button>
        {props.isLoading && <div>Wczytywanie...</div>}

        <Button onClick={handleGoogleSignIn} >
          <ButtonTitleDiv>
            <GoogleIcon />
              Google Signin
          </ButtonTitleDiv>
        </Button>
        <p>Don't have an account? <Link href="/register">Sign up</Link></p>
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
