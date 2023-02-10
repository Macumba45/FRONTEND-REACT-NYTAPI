import { FC } from "react";
import { Props } from "./type"
import { NavContainer, ProfileIco, ProfileLink, ButtonBack, RegisterIco } from "./styles";
import { useLocation } from 'react-router-dom';



const NavBar: FC<Props> = ({ showBackButton, onBackButtonClick }) => {

    const location = useLocation();
    const profile = location.pathname === '/' ? 'Login' : 'Profile';
    const logout = location.pathname === '/books' ? 'Logout' : 'Register';

    return (

        <NavContainer>
            {showBackButton && (
                <ButtonBack onClick={onBackButtonClick}>Back</ButtonBack>
            )}
            <ProfileIco></ProfileIco>
            <ProfileLink href="">{profile}</ProfileLink>
            <RegisterIco></RegisterIco>
            <ProfileLink href="">{logout}</ProfileLink>
        </NavContainer>


    );
};

export default NavBar;