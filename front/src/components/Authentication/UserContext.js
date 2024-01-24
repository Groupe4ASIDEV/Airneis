import { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

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

    useEffect(() => {
        const token = Cookies.get('jwt');
        console.log('🚀 ~ file: UserContext.js:18 ~ useEffect ~ token:', token);
        if (token) {
            console.log(
                '🚀 ~ file: UserContext.js:19 ~ useEffect ~ token:',
                token
            );
            setIsAuth(true);
            setJwt(token);
            try {
                const userId = jwtDecode(token).id;
                console.log(
                    '🚀 ~ file: UserContext.js:22 ~ useEffect ~ user:',
                    userId
                );
                fetch(`${baseUrl}/user/`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: userId }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        setUserData(data.data);
                        console.log(
                            '🚀 ~ file: UserContext.js:42 ~ .then ~ data:',
                            data
                        );
                    });
            } catch (error) {
                console.error('Erreur de décodage du JWT', error);
            }
        }
    }, []);

    return (
        <UidContext.Provider
            value={{ userData, setUserData, jwt, setJwt, isAuth }}
        >
            {children}
        </UidContext.Provider>
    );
};
