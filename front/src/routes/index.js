import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Authentication from '../pages/Authentication';
import Registration from '../pages/Registration';
import Category from '../pages/Category';
import Product from '../pages/Product';
import OrderList from '../pages/OrderList';
import CartOrder from '../pages/CartOrder';
import Category from '../pages/Category';


function Index() {
    return (
        <Routes>
            <Route path="/" exact="true" element={<Home />} />
            <Route path="/category/:id" exact="true" element={<Category />} />
            <Route path="/auth" exact="true" element={<Authentication />} />
            <Route path="/product/:id" exact="true" element={<Product />} />
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
