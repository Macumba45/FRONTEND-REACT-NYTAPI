import { FC } from "react";
import './button.css'
import { Props } from './type'


export const Button: FC<Props> = ({ onClick }) => {
    return (
        <button className="buttonDetails" onClick={onClick}>Read more</button>
    );
};