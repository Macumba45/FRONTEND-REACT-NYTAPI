import styled, { keyframes } from 'styled-components'

export const Body = styled.body`

    background-color: rgb(192, 192, 192);

`

export const Loading = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

`

const spin = keyframes` 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); }`;


export const LoadingSpinner = styled.div`

  border: 5px solid #000000;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 0.8s linear infinite;

`

export const ParentCard = styled.div`

    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    justify-content: center;

`

export const CardDetailsParent = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 50px;


`