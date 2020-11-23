import React, { useContext, useState, ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {
    Button,
    UpperLeftCorner,
    ULCTitle,
    TitleLineUp,
    TitleLineDown,
    ButtonTitleDiv,
    StyledForm,
    FormWrapper,
} from './styled';
import * as firebaseService from '../../services/firebase-serivce';
import { GoogleIcon } from '../../assets/GoogleIcon';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Spinner from '../../components/Spinner/Spinner';
import { TokenRo } from '../../interfaces/ro/token-ro.interface';
import AuthContext from '../../context/auth-context';

const LoginPage: React.FC = (): ReactElement => {
    const history = useHistory();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const authContext = useContext(AuthContext);

    async function handleGoogleSignIn(): Promise<void> {
        setIsLoading(false);

        try {
            await firebaseService.fetchGoogleToken();
            history.push('/');
        } catch (e) {
        } finally {
            setIsLoading(false);
        }
    }

    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    });

    const login = async ({ email, password }) => {
        try {
            const response: TokenRo = await firebaseService.loginUserWithEmailAndPassword({
                email,
                password,
            });

            authContext.token = response.token;
            authContext.authenticated = true;

            history.push('/');
        } catch (e) {}
    };

    return (
        <StyledForm>
            <UpperLeftCorner>
                <ULCTitle>LOGIN</ULCTitle>
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
                        login(values);
                    }}
                >
                    {({ errors, touched }) => (
                        <Form>
                            <Field name="email" type="email" placeholder="Email" />
                            {errors.email && touched.email ? <label>{errors.email}</label> : null}
                            <Field name="password" placeholder="Password" type="password" />
                            {errors.password && touched.password ? <div>{errors.password}</div> : null}
                            <button type="submit">{isLoading ? <Spinner /> : 'Login'}</button>
                        </Form>
                    )}
                </Formik>

                <Button onClick={handleGoogleSignIn}>
                    <ButtonTitleDiv>
                        <GoogleIcon />
                        Google Signin
                    </ButtonTitleDiv>
                </Button>
                <p>
                    Don&apos;t have an account? <Link to="/register">Sign up</Link>
                </p>
            </FormWrapper>
        </StyledForm>
    );
};

export default LoginPage;
