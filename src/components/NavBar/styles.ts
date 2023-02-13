import styled from "styled-components";

export const NavContainer = styled.div`

    background-color: black;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    width: 100%;
    margin-bottom: 200px;

`

export const ProfileLink = styled.button`

    margin-right: 30px;
    font-weight: 200;
    color: white;
    background: none;
    border: none;
    text-decoration: none;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 0.9rem;
    cursor: pointer;

    &:hover {
        font-weight: 600;
    }

`

export const ProfileIco = styled.img<{ src: string }>`
    display: flex;
    width: 17px;
    height: 17px;
    background-size: cover;
    background-repeat: no-repeat;

`

export const RegisterIco = styled.img<{ src: string }>`

    display: flex;
    width: 20px;
    height: 20px;
    background-size: cover;
    background-repeat: no-repeat;

`

export const ButtonBack = styled.button`

    border: none;
    background-color: white;
    color: black;
    font-weight: 300;
    font-family: ${({ theme }) => theme.fonts.primary};
    position: absolute;
    left: 0;
    margin-left: 30px;
    font-size: 11px;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    margin: 15px;
    align-items: center;
    text-align: center;
    text-decoration: none;
    padding: 8px;
    border-radius: 10px;
    border: none;
    cursor: pointer;


    &:hover {
        font-weight: 600;
    }

`



