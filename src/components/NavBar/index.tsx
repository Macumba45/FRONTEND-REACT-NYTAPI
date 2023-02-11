import { FC, useCallback } from "react";
import { Props } from "./type"
import { NavContainer, ProfileIco, ProfileLink, ButtonBack, RegisterIco } from "./styles";
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from "../../services/firebase/firebase";
import { signOut } from "firebase/auth";

const NavBar: FC<Props> = ({ showBackButton, onBackButtonClick }) => {
    const location = useLocation();
    const profile = location.pathname === "/login" ? "Login" : "Profile";
    const logout = location.pathname === "/books" ? "Logout" : "Register";
    const navigate = useNavigate();

    const handleLogout = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        signOut(auth)
        navigate("/login");
    }, [navigate])


    return (
        <NavContainer>
            {showBackButton && (
                <ButtonBack onClick={onBackButtonClick}>Back</ButtonBack>
            )}
            <ProfileIco />
            <ProfileLink>{profile}</ProfileLink>
            <RegisterIco />
            <ProfileLink onClick={handleLogout}>{logout}</ProfileLink>
        </NavContainer>
    );
};

export default NavBar;