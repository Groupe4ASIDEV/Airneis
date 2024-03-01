import { Box, Card, CircularProgress, Typography } from '@mui/material';
import { useProductStore } from '../../store';
import { useEffect } from 'react';
import ImageDisplay from '../Pictures/Pictures';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function ItemCard({ item }) {
    const { products, loadProducts } = useProductStore();

    useEffect(() => {
        loadProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!products) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        );
    }

    const product = products.find((product) => {
        return product._id === item.productId;
    });

    const imageId = product?.pictures[0];

    return (
        <Card
            variant="outlined"
            sx={{ minWidth: 390, marginBottom: 2, paddingRight: 2 }}
        >
            <Box display="flex" alignItems="center">
                <ImageDisplay id={imageId} />
                <Box flexGrow={1}>
                    <Typography variant="body1">{item.label}</Typography>
                    <Typography variant="body2">{item.description}</Typography>
                </Box>
                <Box>
                    <Typography variant="body1" ml={2}>
                        {item.price * 1.2} €
                    </Typography>
                    <Typography variant="body1">{item.quantity}</Typography>
                    <DeleteOutlineIcon />
                </Box>
            </Box>
        </Card>
    );
}

export default ItemCard;
