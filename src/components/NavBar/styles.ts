import styled from "styled-components";
import profile from './assets/icono.png'
import register from './assets/icons8-join-64.png'

export const NavContainer = styled.div`

    background-color: black;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: fixed;
    top: 0;
    width: 100%;

`

export const ProfileLink = styled.button`

    margin-right: 30px;
    color: white;
    background: none;
    border: none;
    text-decoration: none;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 0.9rem;
    &:hover {
        font-weight: 600;
    }

`

export const ProfileIco = styled.div`

    display: flex;
    background-image: url(${profile});
    width: 17px;
    height: 17px;
    background-size: cover;
    margin-right: 5px;
    background-repeat: no-repeat;

`

export const RegisterIco = styled.div`

    display: flex;
    background-image: url(${register});
    width: 30px;
    height: 30px;
    background-size: cover;
    margin-right: 5px;
    background-repeat: no-repeat;

`

export const ButtonBack = styled.button`

    border: none;
    background-color: white;
    color: black;
    font-weight: 300;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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

    &:hover {
        font-weight: 600;
    }

`



