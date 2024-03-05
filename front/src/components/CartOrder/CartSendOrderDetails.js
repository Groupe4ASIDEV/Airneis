import { Box, Button, CircularProgress, Typography } from '@mui/material';
import { useEffect } from 'react';
import useOrderStore from '../../store/orderStore';
import { useNavigate, useParams } from 'react-router-dom';
import { UidContext } from '../Authentication/UserContext';

function CartSendOrderDetails({ isCart }) {
    const { userId, orderId } = useParams();
    const { orders, loadOrders } = useOrderStore();
    const { isAuth } = UidContext;
    const navigate = useNavigate();

    useEffect(() => {
        if (userId && orderId) {
            loadOrders(userId);
        }
    }, [loadOrders, userId, orderId]);

    const order = orders.find((order) => {
        return order._id === orderId;
    });

    const handleSendCart = (event) => {
        event.preventDefault();
        if (!isAuth) {
            navigate('/auth');
        } else {
            navigate('/');
        }
    };

    if (!order && !isCart) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <>
            {isCart ? (
                <Button
                    variant="contained"
                    sx={{ marginTop: 2 }}
                    onClick={handleSendCart}
                >
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

export default CartSendOrderDetails;
