import {
    Box,
    Button,
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
import { incrementReturnedQuantity } from '../../services/orderService';
import { addProductStock } from '../../services/productService';

function ItemCard({ itemId, isCart, isOrder }) {
    const { cart, updateCart, removeFromCart } = useCartStore();
    const { orders, loadOrders, updateReturnedQuantity } = useOrderStore();
    const { userId, orderId } = useParams();

    let order;
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
        order = orders.find((order) => {
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
        if (isCart) {
            updateCart(item, newQuantity - item.quantity);
        }
    };

    const handleRemoveProductFromCart = () => {
        removeFromCart(item);
    };

    const handleReturnProduct = async (quantity) => {
        if (item.returnedQuantity < item.quantity) {
            await incrementReturnedQuantity(orderId, item.productId, quantity);
            await addProductStock(item.productId, quantity);
            updateReturnedQuantity(
                order.id,
                item.id,
                item.returnedQuantity + quantity
            );
        } else {
            alert(
                'Vous avez déjà retourné toutes les unités de ce produit pour cette commande.'
            );
        }
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
                        disabled={isOrder}
                    >
                        {item.quantity}
                    </TextField>
                    {isOrder && order.state === 'LIVRÉE' ? (
                        <>
                            <Typography>
                                Produit(s) retourné(s): {item.returnedQuantity}
                            </Typography>
                            <Button
                                variant="contained"
                                onClick={() => handleReturnProduct(1)}
                                disabled={
                                    !(item.returnedQuantity < item.quantity)
                                }
                            >
                                Retourner un produit
                            </Button>
                        </>
                    ) : null}
                    <IconButton
                        onClick={() => {
                            if (isOrder && order.state === 'LIVRÉE') {
                                handleReturnProduct(
                                    item.quantity - item.returnedQuantity
                                );
                            } else {
                                handleRemoveProductFromCart();
                            }
                        }}
                        disabled={
                            (isOrder && order.state !== 'LIVRÉE') ||
                            !(item.returnedQuantity < item.quantity)
                        }
                    >
                        <DeleteOutlineIcon />
                    </IconButton>
                </Box>
            </Box>
        </Card>
    );
}

export default ItemCard;
