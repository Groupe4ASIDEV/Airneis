import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Authentication from '../pages/Authentication';
import Registration from '../pages/Registration';
import Category from '../pages/Category';
import Product from '../pages/Product';
import OrderList from '../pages/OrderList';
import CartOrder from '../pages/CartOrder';
import Checkout from '../pages/Checkout';

function Index() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/cart" element={<CartOrder />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/orders/:userId" element={<OrderList />} />
            <Route path="/orders/:userId/:orderId" element={<CartOrder />} />
        </Routes>
    );
}

export default Index;
