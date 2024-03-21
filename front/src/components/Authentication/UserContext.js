import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const baseUrl = process.env.REACT_APP_API_URL;

export const UidContext = createContext({
    userData: null,
    setUserData: () => {},
    jwt: null,
    setJwt: () => {},
    isAuth: false,
});

export const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);
    const [jwt, setJwt] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = Cookies.get('jwt');
        if (token) {
            setIsAuth(true);
            setJwt(token);
            try {
                const userId = jwtDecode(token).id;
                fetch(`${baseUrl}/user/`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: userId }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        setUserData(data.data);
                    });
            } catch (error) {
                console.error('Erreur de décodage du JWT', error);
            }
        }
    }, []);

    const login = (userData, jwtToken) => {
        setUserData(userData);
        setJwt(jwtToken);
        setIsAuth(true);
        navigate('/');
    };

    const logout = () => {
        Cookies.remove('jwt');
        setUserData(null);
        setJwt(null);
        setIsAuth(false);
        navigate('/');
    };

    return (
        <UidContext.Provider
            value={{
                userData,
                setUserData,
                jwt,
                setJwt,
                isAuth,
                login,
                logout,
            }}
        >
            {children}
        </UidContext.Provider>
    );
};
