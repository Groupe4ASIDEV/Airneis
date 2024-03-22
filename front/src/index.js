import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/scss/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './styles/themes';
import { AuthProvider } from './components/Authentication/UserContext';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const publicKey = process.env.REACT_APP_PAYMENT_PUBLIC_KEY;
const stripePromise = loadStripe(publicKey);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <Elements stripe={stripePromise}>
                    <App />
                </Elements>
            </AuthProvider>
        </ThemeProvider>
    </BrowserRouter>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
