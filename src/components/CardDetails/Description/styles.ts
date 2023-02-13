import styled from "styled-components";

export const WeeksOnList = styled.div`

    text-align: center;
    font-family: ${({ theme }) => theme.fonts.primary};
    background-color: black;
    color: white;
    font-size: 0.8em;

`

export const DescriptionText = styled.div`

    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 0.9em;
    padding-top: 10px;
    padding-left: 8px;
    padding-right: 8px;
    margin: 0px 0px 20px 0px;
    height: 150px;
    background-color: rgb(255, 255, 255);
    border-bottom: 1px solid black;

`

export const AmazonLink = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    
`


export const ButtonAmazon = styled.img`

    width: 20px;
    height: 20px;
    margin-left: 5px;
    


`

export const AmazonText = styled.a`

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(254, 153, 1);
    align-items: center;
    text-decoration: none;
    color: white;
    padding: 10px;
    border-radius: 8px;
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 0.8em;
    font-weight: 500;
    margin: 0 20px 0 10px;
    border: 2px solid rgb(0, 0, 0);

    &:hover {
        font-weight: 700;
    }


`
