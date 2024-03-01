import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Authentication from '../pages/Authentication';
import Registration from '../pages/Registration';
import CartOrder from '../pages/CartOrder';
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
            <Route path="/cart" exact="true" element={<CartOrder />} />
            <Route
                path="/orders/:userId"
                exact="true"
                element={<OrderList />}
            />
            <Route path="/orders/:userId/:orderId" element={<CartOrder />} />
        </Routes>
    );
}

export default Index;
