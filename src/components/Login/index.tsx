import { FC, FormEventHandler, MouseEventHandler } from "react";
import { MainFormContainer, LoginTitle, Form, EmailContainer, PasswordContainer, LabelContainer, Label, Input, LinkSignupContainer, LinkSignupText, ButtonLoginContainer, ButtonLogin } from './styles'
import { Props } from "./type"
import { useState } from "react";
import NavBar from "../NavBar";
// import 'react-toastify/dist/ReactToastify.css';

const Login: FC<Props> = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    return (



        <MainFormContainer>
            <NavBar />

            <Form>

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
                    <ButtonLogin type="button" onClick={
                        () => { }
                    }>Log in
                    </ButtonLogin>
                </ButtonLoginContainer>

            </Form>
        </MainFormContainer>

    )


}

export default Login;