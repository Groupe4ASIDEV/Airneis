import {Typography, Box, Link} from '@mui/material';
import ImageDisplay from '../components/Pictures/Pictures';
import HighlightedProducts from "../components/HighlightedProducts";
import {useEffect, useState} from "react";
import {useCategoryStore, useProductStore} from "../store";
import Grid from "@mui/material/Grid";


function Products() {

    const { categories, loadCategories } = useCategoryStore();
    const { products, loadProducts } = useProductStore();

    useEffect(() => {
        loadCategories();
        loadProducts();
    }, [loadCategories, loadProducts]);


    const product = products.find((product) => product.categories === categories._id);

    return (
        <div id="products">
            <Grid container spacing={2}>
                {products.map(product => (
                    <Grid item xs={4} key={product.id}>
                        <Link to={`/products/${product.id}`} style= "textDecoration: 'none'">
                            <ImageDisplay product={product} />
                        </Link>
                        <Box className="container">
                            product.name
                            product.price
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default Products;