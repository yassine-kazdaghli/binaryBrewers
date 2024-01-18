import React, { createContext, useContext, useState, useEffect } from 'react';

import Cookies from 'js-cookie';
import api from './services/api.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState("");
    const [token, setToken] = useState(null);

   

    useEffect(() => {
         
            api.get('/api/users/current_user',{withCredentials:true})
                .then(response => {
                    setCurrentUser(response.data);
                    
                })
                .catch(error => {
                    console.error("Error fetching user details:", error);
                    setToken(null);
                    Cookies.remove('token');
                });
        
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser, setCurrentUser, token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
