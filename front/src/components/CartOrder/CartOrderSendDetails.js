import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useEffect } from 'react';
import useOrderStore from '../../store/orderStore';
import { useParams } from 'react-router-dom';

function CartOrderSendDetails({ cart }) {
    const { userId, orderId } = useParams();
    const { orders, loadOrders } = useOrderStore();

    useEffect(() => {
        if (orderId) {
            loadOrders(userId);
        }
    }, [loadOrders, userId, orderId]);

    const order = orders.find((order) => {
        return order._id === orderId;
    });

    if (!order && !cart) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <>
            {cart ? (
                <Button variant="contained" sx={{ marginTop: 2 }}>
                    Passer la commande
                </Button>
            ) : (
                <>
                    <Box
                        sx={{
                            width: '100%',
                            paddingTop: 2,
                            paddingBottom: 2,
                            borderBottom: '1px solid black',
                        }}
                    >
                        <Typography variant="h6">
                            Adresse de livraison
                        </Typography>
                        <Typography variant="body2">
                            {order.shippingAddress.fullName}
                        </Typography>
                        <Typography variant="body2">
                            {order.shippingAddress.street}
                        </Typography>
                        <Typography variant="body2">
                            {order.shippingAddress.zipCode}{' '}
                            {order.shippingAddress.city}
                        </Typography>
                        <Typography variant="body2">
                            {order.shippingAddress.country}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            width: '100%',
                            paddingTop: 2,
                            paddingBottom: 2,
                            borderBottom: '1px solid black',
                        }}
                    >
                        <Typography variant="h6">
                            Adresse de facturation
                        </Typography>
                        <Typography variant="body2">
                            {order.billingAddress.fullName}
                        </Typography>
                        <Typography variant="body2">
                            {order.billingAddress.street}
                        </Typography>
                        <Typography variant="body2">
                            {order.billingAddress.zipCode}{' '}
                            {order.billingAddress.city}
                        </Typography>
                        <Typography variant="body2">
                            {order.billingAddress.country}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            paddingTop: 2,
                        }}
                    >
                        <Typography variant="h6">
                            Méthode de paiement
                        </Typography>
                        <Typography variant="body2">
                            {order.paymentMethod}
                        </Typography>
                    </Box>
                </>
            )}
        </>
    );
}

export default CartOrderSendDetails;
