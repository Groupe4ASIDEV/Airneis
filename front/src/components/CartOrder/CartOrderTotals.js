import { Box, Typography } from '@mui/material';

function CartOrderTotals({ cart, items }) {
    let total;
    let vat;

    if (cart) {
        total = calculateCartATITotal();
        vat = calculateCartVATTotal();
    } else {
        total = 'to be implemented';
        vat = 'to be implemented';
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
