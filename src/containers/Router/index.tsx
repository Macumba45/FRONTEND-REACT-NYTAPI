import { FC } from "react"
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom"
import { Books } from "../../views/Books"
import { BooksDetailsView } from "../../views/BooksDetails"
import { LoginViewPage } from "../../views/Login"
import { SignUpView } from "../../views/SignUp"
import { Props } from "./type"


const Router: FC<Props> = () => {


    const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
        const token = window.localStorage.getItem('userInfo');
        const location = useLocation();

        if (!token || token === null) {
            return <Navigate to="/" replace state={{ from: location }} />;
        }

        return children;
    };


    return (

        <BrowserRouter>
            <Routes>
                <Route index element={<LoginViewPage />} />
                <Route path="/login" element={<LoginViewPage />} />
                <Route path="/signUp" element={<SignUpView />} />
                <Route path="/books" element={<ProtectedRoute><Books /></ProtectedRoute>} />
                <Route path="/books/details/:listName" element={<ProtectedRoute><BooksDetailsView /></ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

