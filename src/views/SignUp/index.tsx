import { FC, useCallback } from "react";
import { MainFormContainer, Form, SignUpTitle, EmailContainer, PasswordContainer, LabelContainer, Label, Input, ButtonSignUpContainer, LinkLoginContainer, LinkLoginText, ButtonSignUp, LoginBackImg, Error } from "./styles"
import { Props } from "./type"
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase/firebase";
import NavBar from '../../components/NavBar';
import { useNavigate } from "react-router-dom";
import { initialValues } from "../Login/constants";
import { Field, Formik } from "formik";
import { validationSchema } from "./constants";
// import 'react-toastify/dist/ReactToastify.css';


const SignUp: FC<Props> = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = useCallback(
        async (values: typeof initialValues) => {

            const { email, password } = values;
            const userCredentialsLogin = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            window.localStorage.setItem(
                "token",
                JSON.stringify(userCredentialsLogin.user)
            );
            navigate("/books");

        },
        [navigate]
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
                            <SignUpTitle>SignUp</SignUpTitle>
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
                            <LinkLoginContainer>
                                <LinkLoginText to="/login">If you are already SignUp, click here to login!</LinkLoginText>
                            </LinkLoginContainer>
                            <ButtonSignUpContainer>
                                <ButtonSignUp type="submit">Log in</ButtonSignUp>
                            </ButtonSignUpContainer>
                        </Form>
                    </Formik>
                </MainFormContainer>
            </LoginBackImg>
        </>
    )


}

export default SignUp;


