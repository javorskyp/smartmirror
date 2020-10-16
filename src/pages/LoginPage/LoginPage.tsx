import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth-actions';
import { useHistory } from "react-router-dom";
import { Button, UpperLeftCorner, ULCTitle, TitleLineUp, TitleLineDown, ButtonTitleDiv, StyledForm } from './styled';
import * as firebaseService from '../../services/firebase-serivce';
import { CredentialsDto } from '../../interfaces/dto/credentials-dto.interface';
import { GoogleIcon } from '../../assets/GoogleIcon';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Spinner from '../../assets/Spinner';
const LoginPage = (props) => {
  let history = useHistory();

  async function handleGoogleSignIn() {
    try {
      await firebaseService.fetchGoogleToken();
      history.push("/");
    } catch (e) {

    }
  }

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required')
  });

  return (
    <StyledForm>
      <UpperLeftCorner>
        <ULCTitle>LOGIN</ULCTitle>
        <TitleLineUp />
        <TitleLineDown />
      </UpperLeftCorner>

      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          props.login(values);
        }}
      >
        {({ errors, touched }) => (

          <Form>
            <Field name="email" type="email" placeholder="Email" />
            {errors.email && touched.email ? <label>{errors.email}</label> : null}
            <Field name="password" placeholder="Password" type="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button type="submit">Login</button>
            {props.isLoading && <Spinner/>}
          </Form>
        )}
      </Formik>

      <Button onClick={handleGoogleSignIn}>
        <ButtonTitleDiv>
          
          <GoogleIcon />
              Google Signin
          </ButtonTitleDiv>
      </Button>
      <p>Don't have an account? <Link to="/register">Sign up</Link></p>
    </StyledForm>
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
