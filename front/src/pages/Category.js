import { Box, Typography, useMediaQuery } from '@mui/material';
import ImageDisplay from '../components/Pictures/Pictures';
import { useEffect } from 'react';
import { useCategoryStore, useProductStore } from '../store';
import Grid from '@mui/material/Grid';
import { Link, useParams } from 'react-router-dom';
import CarouselBuilder from '../components/Carousel';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ImageListItem from '@mui/material/ImageListItem';
import * as React from 'react';

function Category() {
    const { id } = useParams();
    const { categories, loadCategories } = useCategoryStore();
    const { products, loadProducts } = useProductStore();
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    useEffect(() => {
        loadCategories();
        loadProducts();
    }, [loadCategories, loadProducts]);

    const items = products.filter((product) => {
        return product.categories.includes(id);
    });

    return (
        <Box component="div" id="products">
            <ImageListItem key={categories._id}>
                <CarouselBuilder />
                <ImageListItemBar title={categories.label} />
            </ImageListItem>
            <Typography variant="h4">{categories.description}</Typography>
            <Box style={{ padding: 20 }}>
                <Grid container spacing={2}>
                    {items.map((item) => (
                        <Grid item xs={isSmallScreen ? 12 : 4} key={item._id}>
                            <Link
                                to={`/product/${item._id}`}
                                style={{
                                    textDecoration: 'none',
                                    display: 'block',
                                }}
                            >
                                <ImageDisplay id={item.pictures[0]} />
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                >
                                    <Typography>{item.label}</Typography>
                                    <Typography>Prix: {item.price}€</Typography>
                                </Box>
                            </Link>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
export default Category;
