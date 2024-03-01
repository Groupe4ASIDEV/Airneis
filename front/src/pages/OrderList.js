import { useEffect } from 'react';
import useOrderStore from '../store/orderStore';
import { Link, useParams } from 'react-router-dom';
import { Box, CircularProgress, Grid, Typography } from '@mui/material';
import OrderCard from '../components/Cards/OrderCard';

function OrderList() {
    const { userId } = useParams();
    const { orders, loadOrders } = useOrderStore();

    useEffect(() => {
        loadOrders(userId);
    }, [loadOrders, userId]);

    const sortedOrders = [...orders].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    const groupedOrders = sortedOrders.reduce((acc, order) => {
        const year = new Date(order.createdAt).getFullYear();
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(order);
        return acc;
    }, {});

    return (
        <Box
            sx={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Typography variant="h4">Mes commandes</Typography>
            {!orders || orders.length === 0 ? (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            ) : (
                Object.keys(groupedOrders)
                    .sort((a, b) => b - a)
                    .map((year, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: '100%',
                                borderBottom: '1px solid black',
                            }}
                        >
                            <Box
                                sx={{
                                    marginBottom: 3,
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    sx={{ marginBottom: 2 }}
                                    gutterBottom
                                >
                                    {year}
                                </Typography>

                                <Grid
                                    container
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    {groupedOrders[year].map((order) => (
                                        <Link
                                            to={`/orders/${userId}/${order._id}`}
                                            key={order._id}
                                        >
                                            <Grid item xs={12} sm={6} md={4}>
                                                <OrderCard order={order} />
                                            </Grid>
                                        </Link>
                                    ))}
                                </Grid>
                            </Box>
                        </Box>
                    ))
            )}
        </Box>
    );
}

export default OrderList;
