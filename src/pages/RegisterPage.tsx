import React from 'react';
import { Link } from 'react-router-dom';
import { StyledForm, UpperLeftCorner, ULCTitle, TitleLineUp, TitleLineDown } from './LoginPage/styled';
import * as firebaseService from '../services/firebase-serivce';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const RegisterPage = () => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(1, 'Too Short!')
      .required('Required')
  });


  return (
    <StyledForm>
      <UpperLeftCorner>
        <ULCTitle>SIGN UP</ULCTitle>
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
          console.log(values);

          firebaseService.createUserWithEmailAndPassword(values)
            .then(response => {
              console.log(response);
            })
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="email" type="email" placeholder="Email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="password" placeholder="Password" type="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button type="submit">Sign up</button>
          </Form>
        )}
      </Formik>

      <p>Have an account? <Link to="/login">Sign in</Link></p>
    </StyledForm>
  )
}

export default RegisterPage;