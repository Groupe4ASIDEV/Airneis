import {Box, Typography} from "@mui/material";
import React from "react";

function HighlightedProducts({ products }) {
    return (
        <Box>
            <Typography variant="h4" component="h2">
                Produits en vedette
            </Typography>
            <ul>
                {products.map((product) => (
                    <li key={product._id}>
                        <strong>{product.label}</strong> - {product.description} - {product.price} - {product.stock}
                    </li>
                ))}
            </ul>
        </Box>
    );
}

export default HighlightedProducts;
