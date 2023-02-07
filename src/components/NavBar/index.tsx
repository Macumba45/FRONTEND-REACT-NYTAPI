import { FC } from "react";
import { Props } from "./type"
import { NavContainer, ProfileIco, ProfileLink, ButtonBack } from "./styles";


export const NavBar: FC<Props> = ({ showBackButton, onBackButtonClick }) => {
    return (

        <NavContainer>
            {showBackButton && (
                <ButtonBack onClick={onBackButtonClick}>Back</ButtonBack>
            )}
            <ProfileIco></ProfileIco>
            <ProfileLink href="#profile">Profile</ProfileLink>
        </NavContainer>


    );
};