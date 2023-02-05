import { FC } from "react";
import { Props } from "./type";
import './header.css'

export const Header: FC<Props> = () => {
    return (
        <div className="header">

            <h1 className="headerTitle">NEW YORK TIMES</h1>
            <p className="parrafHeader">BEST SELLERS</p>

        </div>
    );
};