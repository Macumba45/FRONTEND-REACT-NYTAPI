import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Form as defaultForm } from "formik"




export const LoginBackImg = styled.div`
background: rgb(2,0,36);
background: linear-gradient(180deg, rgba(2,0,36,1) 14%, rgba(0,126,117,1) 53%, rgba(83,255,246,1) 100%);
background-size: 100%;
width: 100vw;
height: 100vh;

`

export const MainFormContainer = styled.div`

align-items: center;
display: flex;
justify-content: center;

`

export const Form = styled(defaultForm)`
/* 
display: flex;
flex-direction: column; */
background-color: white;
border-radius: 10px;
height: 35rem;
margin-left: 1.7rem;
margin-right: 1.7rem;
margin-top: 6rem;


`



export const SignUpTitle = styled.h1`

font-family: ${({ theme }) => theme.fonts.primary};
font-size: ${({ theme }) => theme.fontSizes.small};;
font-weight: ${({ theme }) => theme.fontWeights.bold};
margin-bottom: 3.125rem;
margin-left: 1.875rem;
margin-top: 3.125rem;


`

export const EmailContainer = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
/* margin-left: 3.125rem; */
margin-top: 6.25rem;


`

export const PasswordContainer = styled.div`

align-items: left; 
display: flex;
flex-direction: column;
justify-content: center;
/* margin-left: 3.125rem; */
margin-top: 1.25rem;
     

`

export const LabelContainer = styled.div`
`

export const Label = styled.label`

font-family: ${({ theme }) => theme.fonts.primary};
font-weight: ${({ theme }) => theme.fontWeights.semiBold};
margin: 0 2.1rem;

`

export const Error = styled.span`

color: ${({ theme }) => theme.colors.danger};
font-family: ${({ theme }) => theme.fonts.primary};
font-size: 0.7rem;
margin-top: 0.5rem;
margin-left: 2.05rem;

`

export const Input = styled.input<{ $hasError?: boolean }>`

border-radius: 5px;
border:0.1px solid ${({ $hasError, theme }) => $hasError ? theme.colors.danger : theme.colors.secondary};
padding-left: 0.5rem;
box-sizing: border-box;
font-family: ${({ theme }) => theme.fonts.primary};
font-size: 0.8rem;
height: 2.5rem;
margin-right: 2rem;
margin-left: 2rem;
margin-top: 0.625rem;
width: 15rem;

${({ $hasError, theme }) =>

        $hasError &&
        css`

        color: ${theme.colors.danger};
        
        `}

&::placeholder {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 0.7rem;
    font-weight: 200;
    opacity: 0.5;
    
}

`

export const ButtonSignUpContainer = styled.div`

align-items: center;
    display: flex;
    justify-content: center;



`

export const LinkLoginContainer = styled.div`
align-items: center;
display: flex;
justify-content: center;
margin-top: 3.125rem;

`

export const LinkLoginText = styled(Link)`

    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.smallest};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    cursor: pointer;
    text-decoration: none;

    &:hover{
        color: ${({ theme }) => theme.colors.tertiary};
    
        cursor: pointer;
    }


`



export const ButtonSignUp = styled.button`
  
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    border: none;
    color: white;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: ${({ theme }) => theme.fontSizes.smallest};
    font-weight: 500;
    margin-bottom: 3.125rem;
    margin-top: 50px;
    padding: 1rem 2rem 1rem 2rem;
    text-decoration: none;


    &:hover{
        background-color: ${({ theme }) => theme.colors.tertiary};
        color: black;
        cursor: pointer;
    }


`

