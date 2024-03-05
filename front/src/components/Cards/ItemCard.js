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
import { useParams } from 'react-router-dom';

function ItemCard({ itemId, isCart, isOrder }) {
    const { cart, updateCart, removeFromCart } = useCartStore();
    const { orders, loadOrders } = useOrderStore();
    const { userId, orderId } = useParams('userId');

    let item = {}; // Will be used to centralize the item to display, regardless of the data source

    useEffect(() => {
        if (userId && orderId) {
            loadOrders(userId);
        }
    }, [cart, loadOrders, userId, orderId]);

    if (isCart && !isOrder) {
        item = cart.find((item) => {
            return item._id === itemId;
        });
    }
    if (!isCart && isOrder) {
        const order = orders.find((order) => {
            console.log('🚀 ~ ItemCard ~ order:', order);
            return order._id === orderId;
        });
        item = order.items.find((item) => {
            return item.productId === itemId;
        });
    }

    if (!item) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        );
    }

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
                        disabled={isOrder && item.state !== 'LIVRÉE'}
                    >
                        {item.quantity}
                    </TextField>
                    <IconButton
                        onClick={handleRemoveProduct}
                        disabled={isOrder && item.state !== 'LIVRÉE'}
                    >
                        <DeleteOutlineIcon />
                    </IconButton>
                </Box>
            </Box>
        </Card>
    );
}

export default ItemCard;
