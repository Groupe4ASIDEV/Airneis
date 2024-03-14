import { Box, Typography, useMediaQuery } from '@mui/material';
import ImageDisplay from '../components/Pictures/Pictures';
import Grid from '@mui/material/Grid';
import { useProductStore } from '../store';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import CarouselBuilder from '../components/Carousel';
import useCartStore from '../store/cartStore';

function Product() {
    const { productId } = useParams();
    const { products } = useProductStore();
    const { addToCart } = useCartStore();
    const product = products.find((product) => product.id === productId);
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    if (!product) {
        return <Typography variant="h6">Produit non trouvé</Typography>;
    }

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <Box id="productList" style={{ padding: 20 }}>
            <ImageListItem key={product._id}>
                <CarouselBuilder />
                <ImageListItemBar title={product.label} />
            </ImageListItem>
            <Grid container spacing={2}>
                <Grid item xs={isSmallScreen ? 12 : 4}>
                    <Box p={2}>
                        <ImageDisplay product={product} />
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box p={2}>
                        <Box>
                            <Box display="flex" justifyContent="space-between">
                                <Typography>{product.price}€</Typography>
                                <Typography variant="h5">
                                    {product.label}
                                </Typography>
                            </Box>
                            <Box
                                display="flex"
                                flexDirection="column"
                                alignItems="flex-end"
                            >
                                <Typography>Stock: {product.stock}</Typography>
                            </Box>
                        </Box>
                        <Typography>{product.description}</Typography>
                        <Button variant="contained" onClick={handleAddToCart}>
                            Ajouter au panier
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Product;
