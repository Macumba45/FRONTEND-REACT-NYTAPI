import { MainFormContainer, LoginTitle, Form, EmailContainer, PasswordContainer, LabelContainer, Label, Input, LinkSignupContainer, LinkSignupText, ButtonLoginContainer, ButtonLogin, LoginBackImg, Error, ErrorFirebaseContainer, ErrorFirebaseText } from './styles'
import { FC, useCallback, useState } from "react";
import { Props } from "./type"
import NavBar from '../../components/NavBar';
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../services/firebase/firebase";
import { useNavigate } from 'react-router-dom';
import { setAuthenticatedToken } from '../../services/storage/storage';
import { Field, Formik } from 'formik';
import { validationSchema, initialValues } from './constants';


const Login: FC<Props> = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const [firebaseErrorMessage, setFirebaseErrorMessage] = useState('');

    const handleSubmit = useCallback(
        async (values: typeof initialValues, { setErrors }: any) => {

            try {

                const { email, password } = values;
                const userCredentialsLogin = await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

                const token = await userCredentialsLogin.user.getIdToken()
                setAuthenticatedToken(token)
                navigate('/books')

            } catch (error: any) {
                setFirebaseErrorMessage(error.code);

                if (error.code === 'auth/user-not-found') {
                    setErrors({ error: 'Usuario no encontrado' });
                } else if (error.code === 'auth/wrong-password') {
                    setErrors({ error: 'Contraseña incorrecta' });
                } else {
                    setErrors({ error: 'Error de inicio de sesión, inténtalo de nuevo.' });
                }

            }

        }, [navigate]
    );


    return (
        <>
            <NavBar />
            <LoginBackImg>
                <MainFormContainer>
                    <Formik
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                        initialValues={initialValues}
                    >
                        <Form  >
                            <LoginTitle>SignIn</LoginTitle>
                            <Field name="email">
                                {({ field, meta }: { field: any, meta: any }) => (
                                    <EmailContainer>
                                        <LabelContainer>
                                            <Label>Email* </Label>
                                        </LabelContainer>
                                        <Input
                                            $hasError={!!meta?.error}
                                            value={email}
                                            type="email"
                                            placeholder="Insert your email"
                                            autoComplete="email"
                                            onChange={(e => setEmail(e.target.value))}
                                            {...field}
                                        />
                                        {!!meta?.error && <Error>{meta.error}</Error>}
                                    </EmailContainer>
                                )}
                            </Field>
                            <Field name="password">
                                {({ field, meta }: { field: any, meta: any }) => (
                                    <PasswordContainer>
                                        <LabelContainer>
                                            <Label>Password* </Label>
                                        </LabelContainer>
                                        <Input
                                            $hasError={!!meta?.error}
                                            value={password}
                                            type="password"
                                            autoComplete="current-password"
                                            placeholder="Insert password"
                                            onChange={e => setPassword(e.target.value)}
                                            {...field}
                                        />
                                        {meta?.error && <Error>{meta.error}</Error>}
                                    </PasswordContainer>
                                )}
                            </Field>
                            <LinkSignupContainer>
                                <LinkSignupText to="/signUp">If you are not SignUp, click here!</LinkSignupText>
                            </LinkSignupContainer>
                            <ButtonLoginContainer>
                                <ButtonLogin type="submit" >Log in</ButtonLogin>
                            </ButtonLoginContainer>
                            <ErrorFirebaseContainer>{firebaseErrorMessage && (
                                <ErrorFirebaseText>
                                    {firebaseErrorMessage === 'auth/user-not-found' ? 'User not found' :
                                        firebaseErrorMessage === 'auth/wrong-password' ? 'Incorrect Password' :
                                            'Error de inicio de sesión, inténtalo de nuevo.'}
                                </ErrorFirebaseText>
                            )}</ErrorFirebaseContainer>

                        </Form>

                    </Formik>
                </MainFormContainer>
            </LoginBackImg>
        </>
    )
}

export default Login;





