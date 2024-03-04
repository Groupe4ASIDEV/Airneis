import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCartStore = create(
    persist(
        (set, get) => ({
            cart: [],
            addToCart: (product) => get().updateCart(product, 1),
            removeFromCart: (product) =>
                get().updateCart(product, -product.quantity),
            updateCart: (product, change) => {
                let cart = get().cart;
                const existingProductIndex = cart.findIndex(
                    (p) => p.id === product.id
                );

                if (existingProductIndex >= 0) {
                    let newCart = [...cart];
                    let newQuantity =
                        newCart[existingProductIndex].quantity + change;

                    if (newQuantity <= 0) {
                        newCart.splice(existingProductIndex, 1);
                    } else {
                        newCart[existingProductIndex] = {
                            ...newCart[existingProductIndex],
                            quantity: newQuantity,
                        };
                    }

                    set({ cart: newCart });
                } else if (change > 0) {
                    let newProduct = { ...product, quantity: 1 };
                    set({ cart: [...cart, newProduct] });
                }
            },
        }),
        {
            name: 'cart',
        }
    )
);

window.store = useCartStore;

export default useCartStore;
