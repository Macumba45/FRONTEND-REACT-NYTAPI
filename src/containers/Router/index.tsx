import { FC, useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Books } from "../../views/Books"
import { BooksDetailsView } from "../../views/BooksDetails"
import { LoginViewPage } from "../../views/Login"
import { SignUpView } from "../../views/SignUp"
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../services/firebase/firebase"


const Router: FC = () => {

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);


    return (

        <BrowserRouter>

            <Routes>
                <Route path="/" element={
                    user ? <Navigate to="/books" /> : <LoginViewPage />
                } />
                <Route path="/login" element={
                    user ? <Navigate to="/books" /> : <LoginViewPage />
                } />
                <Route path="/signUp" element={
                    user ? <Navigate to="/books" /> : <SignUpView />
                } />
                <Route path="/books" element={
                    user ? <Books /> : <Navigate to="/login" />
                } />
                <Route path="/books/details/:listName" element={
                    user ? <BooksDetailsView /> : <Navigate to="/login" />
                } />
            </Routes>

        </BrowserRouter>
    )
}

export default Router