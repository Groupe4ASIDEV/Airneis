import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useOrderStore } from '../../store';
import { useEffect } from 'react';
import {
    calculateCartATITotal,
    calculateCartVATTotal,
} from '../../utils/calculs';

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
        total = calculateCartATITotal(items);
        vat = calculateCartVATTotal(items);
    } else {
        const order = orders.find((order) => {
            return order._id === orderId;
        });
        total = order.total;
        vat = order.vat;
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
