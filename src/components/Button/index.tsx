import { FC } from "react";
import './button.css'
import { Props } from './type'


export const Button: FC<Props> = ({ }) => {
    return (
        <a className="readMore" href="">Read more</a>
    );
};