import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Authentication from '../pages/Authentication';
import Registration from '../pages/Registration';
import Cart from '../pages/Cart';
import Category from '../pages/Category';
import ProductDetail from '../pages/ProductDetail';

function Index() {
    return (
        <Routes>
            <Route path="/" exact="true" element={<Home />} />
            <Route path="/category/:id" exact="true" element={<Category />} />
            <Route path="/auth" exact="true" element={<Authentication />} />
            <Route path="/product/:id" exact="true" element={<ProductDetail />} />
            <Route
                path="/registration"
                exact="true"
                element={<Registration />}
            />
            <Route path="/cart" exact="true" element={<Cart />} />
        </Routes>
    );
}

export default Index;
