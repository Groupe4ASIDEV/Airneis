import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUp from '../components/Authentication/SignUpForm';
import { UidContext } from '../components/Authentication/UserContext';

function Registration() {
    const { isAuth } = useContext(UidContext);
    const navigate = useNavigate();
    if (isAuth) {
        navigate('/');
    }
    return (
        <>
            <SignUp />
        </>
    );
}

export default Registration;
