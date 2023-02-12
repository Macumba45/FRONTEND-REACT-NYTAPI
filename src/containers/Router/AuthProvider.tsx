import React, { createContext, useState, useEffect, FC } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "../../services/firebase/firebase";
import { Props } from "./type";

export const AuthContext = createContext<{
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}>({
    user: null,
    setUser: () => { },
});

export const AuthProvider: FC<Props> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser || null);
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};






