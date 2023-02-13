import styled from "styled-components";
import { Link } from "react-router-dom";


export const MainFormContainer = styled.div`

align-items: center;
display: flex;
justify-content: center;

`

export const Form = styled.form`
/* 
display: flex;
flex-direction: column; */
background-color: white;
border-radius: 10px;
height: 35rem;
margin-top: 7rem;
margin-left: 1.7rem;
margin-right: 1.7rem;
/* width: 26rem; */

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


export const Input = styled.input`

border-radius: 5px;
border:0.1px solid #007e75;
box-sizing: border-box;
font-family: ${({ theme }) => theme.fonts.primary};
font-size: 0.8rem;
height: 2.5rem;
margin-right: 2rem;
margin-left: 2rem;
margin-top: 0.625rem;
width: 15rem;




&::placeholder {
    color: ${({ theme }) => theme.colors.primary};
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 0.7rem;
    font-weight: 200;
    opacity: 0.5;
    padding-left: 0.313rem;
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
