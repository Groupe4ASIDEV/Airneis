import { useContext } from 'react';
import SignIn from '../components/Authentication/SignInForm';
import { UidContext } from '../components/Authentication/UserContext';

function LogIn() {
    const { isAuth } = useContext(UidContext);
    return <div id="authentication">{isAuth ? <p>USER CONNECTED</p> : <SignIn />}</div>;
}

export default LogIn;
