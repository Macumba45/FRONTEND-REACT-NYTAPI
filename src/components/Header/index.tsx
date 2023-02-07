import { FC } from "react";
import { Props } from "./type";
import { HeaderContainer, HeaderTitle, ParrafoHeader } from './styles'

export const Header: FC<Props> = () => {
    return (

        <HeaderContainer>
            <HeaderTitle>NEW YORK TIMES</HeaderTitle>
            <ParrafoHeader>BEST SELLERS</ParrafoHeader>
        </HeaderContainer>


    );
};