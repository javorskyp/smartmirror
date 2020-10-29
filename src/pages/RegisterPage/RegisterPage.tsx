import React from 'react';
import { Link } from 'react-router-dom';
import { StyledForm, UpperLeftCorner, ULCTitle, TitleLineUp, TitleLineDown } from '../LoginPage/styled';
import * as firebaseService from '../../services/firebase-serivce';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FormWrapper } from './styled';

const RegisterPage = () => {
    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    return (
        <StyledForm>
            <UpperLeftCorner>
                <ULCTitle>SIGN UP</ULCTitle>
                <TitleLineUp />
                <TitleLineDown />
            </UpperLeftCorner>

            <FormWrapper>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                        firebaseService.createUserWithEmailAndPassword(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <Field name="email" type="email" placeholder="Email" />
                            {errors.email && touched.email ? <div>{errors.email}</div> : null}
                            <Field name="password" placeholder="Password" type="password" />
                            {errors.password && touched.password ? <div>{errors.password}</div> : null}
                            <button type="submit">Sign up</button>
                        </Form>
                    )}
                </Formik>

                <p>
                    Have an account? <Link to="/login">Sign in</Link>
                </p>
            </FormWrapper>
        </StyledForm>
    );
};

export default RegisterPage;
