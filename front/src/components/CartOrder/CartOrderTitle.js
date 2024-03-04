import { Box, CircularProgress, Typography } from '@mui/material';

function CartOrderTitle({ isOrder, isCart }) {
    if (!isOrder && !isCart) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        );
    }

    // const orderDate = new Date(order.createdAt).toLocaleDateString();

    return (
        <Box>
            <Typography variant="h4">
                {isCart
                    ? 'Panier'
                    : `Commande #${'order._id.slice(0, 7)'} - ${'orderDate'} - ${'order.state'}`}
            </Typography>
        </Box>
    );
}

export default CartOrderTitle;
