import { FC, useEffect, useState, useMemo } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { Books } from "../../views/Books"
import { BooksDetailsView } from "../../views/BooksDetails"
import { LoginViewPage } from "../../views/Login"
import { SignUpView } from "../../views/SignUp"
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../services/firebase/firebase"


const Router: FC = () => {

    const [user, setUser] = useState<User | null>(null);
    const [loggedIn, setLoggedIn] = useState(false)


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, []);

    const memoizedUser = useMemo(() => user, [user]);
    console.log(memoizedUser);


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    memoizedUser ? <Navigate to="/books" /> : <LoginViewPage />
                } />
                <Route path="/login" element={
                    memoizedUser ? <Navigate to="/books" /> : <LoginViewPage />
                } />
                <Route path="/signUp" element={
                    memoizedUser ? <Navigate to="/books" /> : <SignUpView />
                } />
                <Route path="/books" element={
                    memoizedUser ? <Books /> : <Navigate to="/" />
                } />
                <Route path="/books/details/:listName" element={
                    memoizedUser ? <BooksDetailsView /> : <Navigate to="/" />
                } />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;