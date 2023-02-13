import { MainFormContainer, LoginTitle, Form, EmailContainer, PasswordContainer, LabelContainer, Label, Input, LinkSignupContainer, LinkSignupText, ButtonLoginContainer, ButtonLogin } from './styles'
import React, { FC, useCallback, useState } from "react";
import { Props } from "./type"
import NavBar from "../NavBar";
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../services/firebase/firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';



const Login: FC<Props> = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onSubmitLogin = () => {
        // check if email is empty
        if (email === '') {
            toast.error('Email is required', {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return;
        }

        // check if password is empty
        if (password === '') {
            toast.error('Password is required', {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
            return;
        }

        try {
            signInWithEmailAndPassword(auth, email, password);
            toast.success(`Login successful with this ${email}`, {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        } catch (error: unknown) {
            toast.error(String(`Login error with this ${email}`), {
                position: toast.POSITION.BOTTOM_RIGHT,
            });
        }
    }


    const handleSubmit = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {

            e.preventDefault();
            const userCredentialsLogin = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            const token = await userCredentialsLogin.user.getIdToken()
            window.localStorage.setItem("userInfo", JSON.stringify(token));
            navigate('/books')
        },
        [email, password, navigate]
    );



    return (

        <MainFormContainer>
            <NavBar />

            <Form onSubmit={handleSubmit}>

                <LoginTitle>SignIn</LoginTitle>

                <EmailContainer>
                    <LabelContainer>
                        <Label>Email* </Label>
                    </LabelContainer>
                    <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Insert your email"
                        value={email}
                        autoComplete="email"
                        onChange={(e => setEmail(e.target.value))}
                    />
                </EmailContainer>

                <PasswordContainer>
                    <LabelContainer>
                        <Label>Password* </Label>
                    </LabelContainer>
                    <Input
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        placeholder="Insert password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </PasswordContainer>

                <LinkSignupContainer>
                    <LinkSignupText to="/signUp">If you are not SignUp, click here!</LinkSignupText>
                </LinkSignupContainer>

                <ButtonLoginContainer>
                    <ButtonLogin type="submit" onClick={
                        () => onSubmitLogin()
                    }
                    >Log in
                    </ButtonLogin>
                </ButtonLoginContainer>
                <ToastContainer />
            </Form>
        </MainFormContainer>

    )


}

export default Login;




