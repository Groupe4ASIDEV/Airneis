import { Box, CircularProgress, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useOrderStore from '../../store/orderStore';

function CartOrderTitle({ isOrder, isCart }) {
    const { userId, orderId } = useParams();
    const { orders, loadOrders } = useOrderStore();

    useEffect(() => {
        if (userId && orderId) {
            loadOrders(userId);
        }
    }, [loadOrders, userId, orderId]);

    let order = {};

    if (!isCart && isOrder) {
        order = orders.find((order) => {
            return order._id === orderId;
        });
    }

    if (!isOrder && !isCart) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        );
    }

    const orderDate = new Date(order.createdAt).toLocaleDateString();

    return (
        <Box>
            <Typography variant="h4">
                {isCart
                    ? 'Panier'
                    : `Commande #${order._id.slice(0, 7)} - ${orderDate} - ${
                          order.state
                      }`}
            </Typography>
        </Box>
    );
}

export default CartOrderTitle;
