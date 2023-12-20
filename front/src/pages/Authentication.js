import SignIn from '../components/Authentication/SignInForm';
// import SignUp from '../components/Authentication/SignUpForm';

const isLoggedIn = false;

function Login() {
    return <>{isLoggedIn ? <p>USER CONNECTED</p> : <SignIn />}</>;
}

export default Login;
