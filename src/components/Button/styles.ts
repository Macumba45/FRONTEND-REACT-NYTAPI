import styled from 'styled-components'

export const ButtonDetails = styled.button`

font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 11px;
    display: inline-block;
    margin-left: auto;
    margin-right: auto;
    margin: 20px;
    align-items: center;
    text-align: center;
    text-decoration: none;
    background-color: black;
    color: white;
    font-weight: 500;
    padding: 8px;
    border-radius: 10px;
    border: none;


    &:hover{
        color: white;
        font-size: 12px;
        cursor: pointer;
    }

`
