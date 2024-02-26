import { useParams } from 'react-router-dom';
import useOrderStore from '../../store/orderStore';
import { useEffect } from 'react';
import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import { useProductStore } from '../../store';
import ItemOrderCard from '../../components/Order/ItemOrderCard';

function Order() {
    const { userId, orderId } = useParams();
    const { orders, loadOrders } = useOrderStore();
    const { products, loadProducts } = useProductStore();

    useEffect(() => {
        loadOrders(userId);
        loadProducts();
    }, [loadOrders, loadProducts, userId]);

    const order = orders.find((order) => {
        return order._id === orderId;
    });

    if (!order) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        );
    }

    const orderDate = new Date(order.createdAt).toLocaleDateString();

    return (
        <Box>
            <Box>
                <Typography variant="h4">
                    Commande #{order._id.slice(0, 7)} - {orderDate} -{' '}
                    {order.state}
                </Typography>
            </Box>
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
                    {order.items.map((item) => {
                        const product = products.find(
                            (product) => product._id === item.item
                        );
                        const productWithQuantity = {
                            ...product,
                            quantity: item.quantity,
                        };

                        return (
                            <ItemOrderCard
                                key={item._id}
                                product={productWithQuantity}
                            />
                        );
                    })}
                </Grid>

                <Grid item xs={12} md={4}>
                    <Box
                        sx={{
                            width: '100%',
                            paddingBottom: 2,
                            borderBottom: '1px solid black',
                        }}
                    >
                        <Typography>TOTAL {order.total} €</Typography>
                        <Typography>TVA {order.vat} €</Typography>
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
                </Grid>
            </Grid>
        </Box>
    );
}

export default Order;
