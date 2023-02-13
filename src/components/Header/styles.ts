import styled from "styled-components";

export const HeaderContainer = styled.div`

    background-color: black;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`


export const HeaderTitle = styled.h1`

    color: white;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 8vh;
    text-align: center;
    font-weight: 800;
    margin-top: 10px;

`


export const ParrafoHeader = styled.p`
    
    font-weight: 100;
    margin-top: 10px;
    font-size: 5vh;
    text-align: center;
    color: white;
    font-family: ${({ theme }) => theme.fonts.primary};


`