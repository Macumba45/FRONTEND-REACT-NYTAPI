import { FC } from "react";
import { Props } from "./type"
import './NavBar.css'





export const NavBar: FC<Props> = ({ showBackButton, onBackButtonClick }) => {
    return (
        <div className="navBar">

            {showBackButton && (
                <button className="buttonBack" onClick={onBackButtonClick}>Back</button>
            )}
            <div className="profileIco"></div>
            <a className="profileLink" href="#profile">Profile</a>

            {/* <img className="profileIco" src="./assets/icono.png" width="50" height="50" alt="" /> */}

        </div>
    );
};