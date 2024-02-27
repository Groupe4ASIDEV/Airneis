import { Box, Card, Typography } from '@mui/material';
import { usePictureStore, useProductStore } from '../../store';
import { useEffect } from 'react';
import ImageDisplay from '../Pictures/Pictures';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function ItemOrderCard({ item }) {
    console.log('🚀 ~ ItemOrderCard ~ item:', item);
    const { products, loadProducts } = useProductStore();

    useEffect(() => {
        loadProducts();
    }, []);

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
                        {item.price} €
                    </Typography>
                    <Typography variant="body1">{item.quantity}</Typography>
                    <DeleteOutlineIcon />
                </Box>
            </Box>
        </Card>
    );
}

export default ItemOrderCard;
