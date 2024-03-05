import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import useOrderStore from '../../store/orderStore';
import { useEffect } from 'react';

function CartOrderTotals({ isCart, items }) {
    const { userId, orderId } = useParams();
    const { orders, loadOrders } = useOrderStore();

    useEffect(() => {
        if (userId && orderId) {
            loadOrders(userId);
        }
    }, [loadOrders, userId, orderId]);

    let total;
    let vat;

    if (isCart) {
        total = calculateCartATITotal();
        vat = calculateCartVATTotal();
    } else {
        const order = orders.find((order) => {
            return order._id === orderId;
        });
        total = order.total;
        vat = order.vat;
    }

    function calculateCartETTotal() {
        return items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }

    function calculateCartVATTotal() {
        return calculateCartETTotal() * 0.2;
    }

    function calculateCartATITotal() {
        return calculateCartETTotal() + calculateCartVATTotal();
    }

    return (
        <Box
            sx={{
                width: '100%',
                paddingBottom: 2,
                borderBottom: '1px solid black',
            }}
        >
            <Typography>TOTAL {total} €</Typography>
            <Typography>TVA {vat} €</Typography>
        </Box>
    );
}

export default CartOrderTotals;
