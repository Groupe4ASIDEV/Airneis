import {Typography, Box} from '@mui/material';
import ImageDisplay from '../components/Pictures/Pictures';
import HighlightedProducts from "../components/HighlightedProducts";
import {useEffect, useState} from "react";
import {useCategoryStore, useProductStore} from "../store";
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";
import BackButton from "../components/BackButton";


function Category() {

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
                        <Link to={`/product/${product.id}`} style= {{textDecoration: 'none'}}>
                            <ImageDisplay product={product} />
                        </Link>
                        <Box className="container">
                            {product.label}
                            {product.price}
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <BackButton />
        </div>
    );
}

export default Category;