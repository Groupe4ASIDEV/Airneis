import { useState, useEffect } from 'react';
import CartItem from '../components/ItemCard';

function Cart() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {}, []);

    const updateQuantity = (itemId, newQuantity) => {};

    const removeFromCart = (itemId) => {};

    return (
        <div id="cart">
            <p>cart is working</p>
            {cartItems.map((item) => (
                <CartItem
                    key={item.id}
                    item={item.label}
                    price={item.price}
                    updateQuantity={updateQuantity}
                    removeFromCart={removeFromCart}
                />
            ))}
            {/* ajouter total HT, total TVA & total TTC */}
        </div>
    );
}

export default Cart;
