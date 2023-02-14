import { FC } from "react"
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom"
import { getAuthenticatedToken } from "../../services/storage/storage"
import { Books } from "../../views/Books"
import { BooksDetails } from "../../views/BooksDetails"
import Login from "../../views/Login"
import SignUp from "../../views/SignUp"



const Router: FC = () => {


    const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
        const token = getAuthenticatedToken();
        const location = useLocation();

        if (!token || token === null) {
            return <Navigate to="/" replace state={{ from: location }} />;
        }

        return children;
    };


    return (

        <BrowserRouter>
            <Routes>
                <Route index element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/books" element={<ProtectedRoute><Books /></ProtectedRoute>} />
                <Route path="/books/details/:listName" element={<ProtectedRoute><BooksDetails /></ProtectedRoute>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;