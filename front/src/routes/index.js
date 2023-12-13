import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SignUpForm from '../components/Log/SignUpForm';

function Index() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/signup' exact="true" element={<SignUpForm />} />
        </Routes>
    );
}

export default Index;
