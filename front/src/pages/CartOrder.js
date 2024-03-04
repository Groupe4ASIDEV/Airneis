import { useLocation } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import ItemCard from '../components/Cards/ItemCard';
import CartOrderTitle from '../components/CartOrder/CartOrderTitle';
import CartOrderTotals from '../components/CartOrder/CartOrderTotals';
import CartOrderSendDetails from '../components/CartOrder/CartSendOrderDetails';
import useCartStore from '../store/cartStore';
import { useEffect } from 'react';

/*
    This page is used to display a cart or an order
    Props are passed to components in order to display either one or the other
*/
function CartOrder() {
    const location = useLocation();
    const isCart = location.pathname.includes('cart');
    console.log('🚀 ~ CartOrder ~ isCart:', isCart);
    const isOrder = location.pathname.includes('orders');
    const { cart } = useCartStore();

    useEffect(() => {}, [cart]);

    let items = [];
    if (isCart && !isOrder) {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            const parsedData = JSON.parse(cartData);
            const cart = parsedData.state.cart;
            items = cart;
        }
        if (items.length === 0 || !items) {
            return <Box>Votre Panier est vide.</Box>;
        }
    } else if (!isCart && isOrder) {
        return <Box>Ceci est une commande</Box>;
    }

    return (
        <Box>
            <CartOrderTitle isOrder={isOrder} isCart={isCart} />
            <Grid
                container
                spacing={2}
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    mt: 2,
                }}
            >
                <Grid item>
                    {items.map((item) => {
                        return (
                            <ItemCard
                                key={item._id}
                                itemId={item.id}
                                isCart={isCart}
                                isOrder={isOrder}
                            />
                        );
                    })}
                </Grid>
                <Grid item xs={12} md={4}>
                    <CartOrderTotals isCart={isCart} items={items} />
                    <CartOrderSendDetails isCart={isCart} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default CartOrder;
