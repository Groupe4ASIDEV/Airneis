import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Authentication from '../pages/Authentication';
import Registration from '../pages/Registration';
import Cart from '../pages/Cart';
import OrderList from '../pages/OrderList';

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
            <Route path="/cart" exact="true" element={<Cart />} />
            <Route path="/orders" exact="true" element={<OrderList />} />
        </Routes>
    );
}

export default Index;
