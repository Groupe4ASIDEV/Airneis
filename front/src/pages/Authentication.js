import { useContext } from 'react';
import SignIn from '../components/Authentication/SignInForm';
import UserSettings from '../components/UserSettings';
import { UidContext } from '../components/Authentication/UserContext';

function LogIn() {
    const { isAuth } = useContext(UidContext);
    return (
        <div id="authentication">
            {isAuth ? <UserSettings /> : <SignIn />}
        </div>
    );
}
export default LogIn;
