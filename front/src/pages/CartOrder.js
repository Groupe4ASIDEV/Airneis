import { useLocation, useParams } from 'react-router-dom';
import { Box, CircularProgress, Grid } from '@mui/material';
import ItemCard from '../components/Cards/ItemCard';
import CartOrderTitle from '../components/CartOrder/CartOrderTitle';
import CartOrderTotals from '../components/CartOrder/CartOrderTotals';
import CartOrderSendDetails from '../components/CartOrder/CartSendOrderDetails';
import useCartStore from '../store/cartStore';
import useOrderStore from '../store/orderStore';
import useProductStore from '../store/productStore';
import { useEffect } from 'react';

/*
    This page is used to display a cart or an order
    Props are passed to components in order to display either one or the other
*/
function CartOrder() {
    const location = useLocation();
    const isCart = location.pathname.includes('cart');
    const isOrder = location.pathname.includes('orders');
    const { cart } = useCartStore();
    const { orders, loadOrders } = useOrderStore();
    const { products, loadProducts } = useProductStore();
    const { userId, orderId } = useParams();

    useEffect(() => {
        if (isOrder && userId) {
            loadProducts();
            loadOrders(userId);
        }
    }, [isOrder, userId, loadOrders, loadProducts, cart]);

    let items = []; // Will be used to format the items to display, regardless of the data source

    if (!isCart && isOrder) {
        // Update Items if the page is an order
        const order = orders.find((order) => order._id === orderId);
        console.log('🚀 ~ CartOrder ~ order:', order);
        if (order && order.items) {
            items = order.items.map((orderItem) => {
                const product = products.find((p) => p.id === orderItem.id);
                console.log(
                    '🚀 ~ items=currentOrder.items.map ~ product:',
                    product
                );
                return { ...product, quantity: orderItem.quantity };
            });
        }
    }

    if (isCart && !isOrder) {
        // Update Items if the page is a cart
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            const parsedData = JSON.parse(cartData);
            const cart = parsedData.state.cart;
            items = cart;
            console.log('🚀 ~ CartOrder ~ cart:', cart);
        }
        if (items.length === 0 || !items) {
            return <Box>Votre Panier est vide.</Box>;
        }
    }

    if (!items || items.length === 0) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        );
    }

    console.log('🚀 ~ CartOrder ~ items:', items);

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
                        const itemId = item._id || item.id;
                        return (
                            <ItemCard
                                key={itemId}
                                itemId={itemId}
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
