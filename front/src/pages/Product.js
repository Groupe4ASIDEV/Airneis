import { Box, Typography, useMediaQuery } from '@mui/material';
import ImageDisplay from '../components/Pictures/Pictures';
import Grid from '@mui/material/Grid';
import { useProductStore } from '../store';
import { useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import CarouselBuilder from '../components/Carousel';
import useCartStore from '../store/cartStore';
import { useEffect } from 'react';
import { fontWeight } from '@mui/system';

function Product() {
    const { id } = useParams();
    console.log('🚀 ~ Product ~ id:', id);
    const { products, loadProducts } = useProductStore();
    console.log('🚀 ~ Product ~ products:', products);
    const { addToCart } = useCartStore();
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    useEffect(() => {
        loadProducts();
    }, [loadProducts, id]);

    const product = products.find((product) => {
        console.log('🚀 ~ Product ~ product:', product);
        return product._id === id;
    });

    const handleAddToCart = () => {
        addToCart(product);
    };

    if (!product || product === undefined) {
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress />
        </Box>;
    }

    return (
        <Box id="product" style={{ padding: 20 }}>
            {/* <ImageListItem key={product._id}>
                <CarouselBuilder />
                <ImageListItemBar title={product.label} />
            </ImageListItem> */}
            <Grid container spacing={2}>
                <Grid item xs={isSmallScreen ? 12 : 6}>
                    <Box p={2}>
                        <ImageDisplay id={product.pictures[0]} />
                    </Box>
                </Grid>
                <Grid item xs={isSmallScreen ? 12 : 6}>
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
                                <Typography>
                                    {product.stock > 0
                                        ? 'En stock'
                                        : 'Stock épuisé'}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Typography align="justify">
                            {product.description}
                        </Typography>
                        {product.stock > 0 ? (
                            <Button
                                variant="contained"
                                onClick={handleAddToCart}
                            >
                                Ajouter au panier
                            </Button>
                        ) : (
                            <Button variant="disabled">Stock épuisé</Button>
                        )}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Product;
