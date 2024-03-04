import {
    Box,
    Card,
    CircularProgress,
    IconButton,
    TextField,
    Typography,
} from '@mui/material';
import { useEffect } from 'react';
import ImageDisplay from '../Pictures/Pictures';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import useCartStore from '../../store/cartStore';
import useOrderStore from '../../store/orderStore';

function ItemCard({ itemId, isCart, isOrder }) {
    const { cart, updateCart, removeFromCart } = useCartStore();
    const { order, loadOrder } = useOrderStore();
    let item = {};

    useEffect(() => {
        loadOrder();
    }, [cart]);

    if (isCart && !isOrder) {
        item = cart.find((item) => {
            return item.id === itemId;
        });
    } else if (!isCart && isOrder) {
        return <Box>Ceci est une commande</Box>;
    }

    if (!item) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        );
    }

    // useEffect(() => {
    //     loadProducts();
    // }, [loadProducts]);

    // if (!products) {
    //     return (
    //         <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    //             <CircularProgress />
    //         </Box>
    //     );
    // }

    // const product = products.find((product) => {
    //     return product._id === item.productId;
    // });
    // console.log('🚀 ~ product ~ product:', product);

    const handleQuantityChange = (event) => {
        let newQuantity = parseInt(event.target.value, 10);
        if (isNaN(newQuantity)) {
            newQuantity = 1;
        }
        updateCart(item, newQuantity - item.quantity);
    };

    const handleRemoveProduct = () => {
        removeFromCart(item);
    };

    const imageId = item?.pictures[0];

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
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="body1" ml={2}>
                        {item.price * 1.2} €
                    </Typography>
                    <TextField
                        size="small"
                        type="number"
                        value={item.quantity}
                        onChange={handleQuantityChange}
                        inputProps={{ min: '1', step: '1' }}
                    >
                        {item.quantity}
                    </TextField>
                    <IconButton onClick={handleRemoveProduct}>
                        <DeleteOutlineIcon />
                    </IconButton>
                </Box>
            </Box>
        </Card>
    );
}

export default ItemCard;
