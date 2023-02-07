import { FC } from "react";
import { Props } from './type'
import { ButtonDetails } from './styles'


export const Button: FC<Props> = ({ onClick }) => {
    return (

        <ButtonDetails onClick={onClick}>Read more</ButtonDetails>
    );
};