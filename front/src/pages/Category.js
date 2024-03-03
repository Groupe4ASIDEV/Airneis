import {Box, Typography, useMediaQuery} from '@mui/material';
import ImageDisplay from '../components/Pictures/Pictures';
import {useEffect} from "react";
import {useCategoryStore, useProductStore} from "../store";
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";
import CarouselBuilder from "../components/Carousel";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ImageListItem from "@mui/material/ImageListItem";
import * as React from "react";


function Category() {

    const { categories, loadCategories } = useCategoryStore();
    const { products, loadProducts } = useProductStore();
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    useEffect(() => {
        loadCategories();
        loadProducts();
    }, [loadCategories, loadProducts]);

    const product = products.find((product) => product.categories === categories._id);

    return (
        <div id="products" >
            <ImageListItem key={categories._id}>
                <CarouselBuilder />
                <ImageListItemBar
                    title={categories.label}
                />
            </ImageListItem>
            <Typography variant="h4">{categories.description}</Typography>
            <Box style={{ padding: 20 }}>
                <Grid container spacing={2}>
                    {products.map(product => (
                        <Grid item xs={isSmallScreen ? 12 : 4} key={product.id}>
                            <Link
                                to={`/product/${product.id}`}
                                style={{
                                    textDecoration: 'none',
                                    display: 'block',
                                }}
                            >
                                <ImageListItem key={product.id}>
                                    <ImageDisplay product={product} />
                                </ImageListItem>
                                <Box display="flex" justifyContent="space-between">
                                    <Typography variant="h6">{product.label}</Typography>
                                    <Typography>Prix: {product.price}€</Typography>
                                </Box>
                            </Link>
                        </Grid>

                    ))}
                </Grid>
            </Box>

        </div>
    );
}
export default Category;