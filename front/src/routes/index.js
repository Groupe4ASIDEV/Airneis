import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Authentication from '../pages/Authentication';
import Registration from '../pages/Registration';
import Cart from '../pages/Cart';
import OrderList from '../pages/Order/OrderList';
import Order from '../pages/Order/Order';

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
            <Route
                path="/orders/:userId"
                exact="true"
                element={<OrderList />}
            />
            <Route path="/orders/:userId/:orderId" element={<Order />} />
        </Routes>
    );
}

export default Index;
