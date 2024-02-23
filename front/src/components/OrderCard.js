import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

function OrderCard({ order }) {
    const orderDate = new Date(order.createdAt).toLocaleDateString();
    const itemCount = order.items.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <Card variant="outlined" sx={{ minWidth: 390, marginBottom: 2 }}>
            <CardContent sx={{ padding: 2 }}>
                <Box display="flex" justifyContent="space-between">
                    <Box>
                        <Box
                            display="flex"
                            sx={{
                                alignItems: 'start',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography component="p">
                                {orderDate} - {order._id.slice(0, 7)}
                            </Typography>
                        </Box>
                        <Typography component="p" color="textSecondary">
                            {itemCount} articles
                        </Typography>
                    </Box>
                    <Box>
                        <Typography>{order.state}</Typography>
                        <Typography component="p">{order.total} €</Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
}

export default OrderCard;
