import { useLocation, useParams } from 'react-router-dom';
import { Box, Button, CircularProgress, Grid } from '@mui/material';
import ItemCard from '../components/Cards/ItemCard';
import CartOrderTitle from '../components/CartOrder/CartOrderTitle';
import CartOrderTotals from '../components/CartOrder/CartOrderTotals';
import CartSendOrderDetails from '../components/CartOrder/CartSendOrderDetails';
import { useCartStore, useOrderStore, useProductStore } from '../store';
import { useEffect } from 'react';
import { cancelOrder } from '../services/orderService';

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

    let cartData = {};
    let order = {};
    let items = []; // Will be used to centralize the items to display, regardless of the data source

    if (isCart && !isOrder) {
        // Update Items if the page is a cart
        cartData = localStorage.getItem('cart');
        if (cartData) {
            const parsedData = JSON.parse(cartData);
            const cart = parsedData.state.cart;
            items = cart;
        }
        if (items.length === 0 || !items) {
            return <Box>Votre Panier est vide.</Box>;
        }
    }

    if (!isCart && isOrder) {
        // Update Items if the page is an order
        order = orders.find((order) => order._id === orderId);
        if (order && order.items) {
            items = order.items.map((orderItem) => {
                const product = products.find((p) => p.id === orderItem.id);
                return { ...product, quantity: orderItem.quantity };
            });
        }
    }

    if (!items || items.length === 0) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        );
    }

    const handleClick = () => {
        // Cancel the order in the state
        const updatedOrder = { ...order, state: 'ANNULÉE' };
        useOrderStore.setState({
            orders: orders.map((order) =>
                order._id === orderId ? updatedOrder : order
            ),
        });

        // Cancel the order in the database
        cancelOrder(orderId);
    };

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
                                key={item._id}
                                itemId={itemId}
                                isCart={isCart}
                                isOrder={isOrder}
                            />
                        );
                    })}
                </Grid>
                <Grid item xs={12} md={4}>
                    <CartOrderTotals isCart={isCart} items={items} />
                    <CartSendOrderDetails isCart={isCart} />
                </Grid>
            </Grid>
            {order.state === 'EN ATTENTE' ? (
                <Button variant="contained" onClick={handleClick}>
                    Annuler la commande
                </Button>
            ) : null}
        </Box>
    );
}

export default CartOrder;
