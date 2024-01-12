import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Authentication from '../pages/Authentication';
import Registration from '../pages/Registration';

function Index() {
    return (
        <Routes>
            <Route path="/" exact="true" element={<Home />} />
            <Route path="/auth" exact="true" element={<Authentication />} />
            <Route
                path="/registration"
                exact="true"
                element={<Registration />}
            />
        </Routes>
    );
}

export default Index;
