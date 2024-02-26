import { Box, Card, Typography } from '@mui/material';
import { usePictureStore } from '../../store';
import { useEffect } from 'react';
import ImageDisplay from '../Pictures/Pictures';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function ItemOrderCard({ product }) {
    const { pictures, loadPictures } = usePictureStore();

    useEffect(() => {
        loadPictures();
    }, []);

    const productImage = pictures.find(
        (picture) => picture._id === product.pictures[0]
    );

    return (
        <Card
            variant="outlined"
            sx={{ minWidth: 390, marginBottom: 2, paddingRight: 2 }}
        >
            <Box display="flex" alignItems="center">
                <ImageDisplay id={productImage} />
                <Box flexGrow={1}>
                    <Typography variant="body1">{product.label}</Typography>
                    <Typography variant="body2">
                        {product.description}
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="body1" ml={2}>
                        {product.price} €
                    </Typography>
                    <Typography variant="body1">{product.quantity}</Typography>
                    <DeleteOutlineIcon />
                </Box>
            </Box>
        </Card>
    );
}

export default ItemOrderCard;
