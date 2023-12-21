import { useContext } from 'react';
import SignIn from '../components/Authentication/SignInForm';
import { UidContext } from '../components/Authentication/UserContext';

function LogIn() {
    const { isAuth } = useContext(UidContext);
    return <>{isAuth ? <p>USER CONNECTED</p> : <SignIn />}</>;
}

export default LogIn;
