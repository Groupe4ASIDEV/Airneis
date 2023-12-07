import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

function Index() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}

export default Index;
