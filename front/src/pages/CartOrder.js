import { useLocation } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import ItemCard from '../components/Cards/ItemCard';
import CartOrderTitle from '../components/CartOrder/CartOrderTitle';
import CartOrderTotals from '../components/CartOrder/CartOrderTotals';
import CartOrderSendDetails from '../components/CartOrder/CartOrderSendDetails';

/*
    This page is used to display a cart or an order
    Props are passed to components in order to display either one or the other
*/
function CartOrder() {
    const location = useLocation();
    const isCart = location.pathname.includes('cart');
    const isOrder = location.pathname.includes('orders');

    const items = [
        {
            productId: '65cc9798becc597a364b5eb8',
            label: 'a product',
            description: 'a beautiful product',
            price: 100,
            quantity: 1,
        },
        {
            productId: '65cc9798becc597a364b5eb8',
            label: 'a product',
            description: 'a beautiful product',
            price: 100,
            quantity: 2,
        },
    ];

    return (
        <Box>
            <CartOrderTitle order={isOrder} cart={isCart} />
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
                        return (
                            <ItemCard
                                key={items.findIndex((i) => i === item)}
                                item={item}
                            />
                        );
                    })}
                </Grid>
                <Grid item xs={12} md={4}>
                    <CartOrderTotals cart={isCart} items={items} />
                    <CartOrderSendDetails cart={isCart} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default CartOrder;
