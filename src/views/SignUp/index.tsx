import { FC, useCallback } from "react";
import { MainFormContainer, Form, SignUpTitle, EmailContainer, PasswordContainer, LabelContainer, Label, Input, ButtonSignUpContainer, LinkLoginContainer, LinkLoginText, ButtonSignUp, LoginBackImg } from "./styles"
import { Props } from "./type"
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/firebase/firebase";
import NavBar from '../../components/NavBar';
import { useNavigate } from "react-router-dom";
// import 'react-toastify/dist/ReactToastify.css';


const SignUp: FC<Props> = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();
        const userCredentialsLogin = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        window.localStorage.setItem(
            "userInfo",
            JSON.stringify(userCredentialsLogin.user)
        );
        navigate("/books");

    },
        [email, password, navigate]
    );

    return (

        <>
            <NavBar />
            <LoginBackImg>

                <MainFormContainer>


                    <Form onSubmit={handleSubmit}>

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

                        <LinkLoginContainer>
                            <LinkLoginText to="/login">If you are already SignUp, click here to login!</LinkLoginText>
                        </LinkLoginContainer>

                        <ButtonSignUpContainer>
                            <ButtonSignUp type="submit"
                            >Sign up
                            </ButtonSignUp>
                        </ButtonSignUpContainer>

                    </Form>
                </MainFormContainer>
            </LoginBackImg>

        </>

    )


}

export default SignUp;