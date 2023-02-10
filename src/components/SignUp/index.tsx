import { FC, FormEventHandler, MouseEventHandler } from "react";
import { MainFormContainer, Form, SignUpTitle, EmailContainer, PasswordContainer, LabelContainer, Label, Input, ButtonSignUpContainer, LinkLoginContainer, LinkLoginText, ButtonSignUp } from "./styles"
import { Props } from "./type"
import { useState } from "react";

import NavBar from "../NavBar";
// import 'react-toastify/dist/ReactToastify.css';


const SignUp: FC<Props> = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handleSubmit = (e: Event) => {
    //     e.preventDefault();
    //     onSubmit(email, password);
    // }

    // const onSubmitLogin = () => {
    //     // check if email is empty
    //     if (email === '') {
    //         toast.error('Email is required');
    //         return;
    //     }

    //     // check if password is empty
    //     if (password === '') {
    //         toast.error('Password is required');
    //         return;
    //     }


    //     // create request object
    //     const requestLogin: ILoginRequest = {
    //         email: email,
    //         password: password
    //     }

    //     // call login service
    //     authService.login(requestLogin).then((response: ILoginResponse) => {
    //         console.log(response);

    //         // check if response is success
    //         if (response) {
    //             toast.success('Login successful');
    //         }
    //         else {
    //             toast.error('Login failed');
    //         }
    //     }).catch((error) => {
    //         console.log(error);
    //         toast.error(error);
    //     })
    // }

    return (



        <MainFormContainer>
            <NavBar />

            <Form>

                <SignUpTitle>SignUp</SignUpTitle>

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
                <PasswordContainer>
                    <LabelContainer>
                        <Label>Confirm Password* </Label>
                    </LabelContainer>
                    <Input
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        placeholder="Confirm password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} />
                </PasswordContainer>

                <LinkLoginContainer>
                    <LinkLoginText to="/login">If you are already SignUp, click here to loggin!</LinkLoginText>
                </LinkLoginContainer>

                <ButtonSignUpContainer>
                    <ButtonSignUp type="button" onClick={
                        () => { }
                    }>Sign up
                    </ButtonSignUp>
                </ButtonSignUpContainer>

            </Form>
        </MainFormContainer>

    )


}

export default SignUp;