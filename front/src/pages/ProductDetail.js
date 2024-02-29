import {Box, Typography} from "@mui/material";
import ImageDisplay from "../components/Pictures/Pictures";
import Grid from "@mui/material/Grid";
import {useProductStore} from "../store";
import {useParams} from "react-router-dom";

function ProductDetail() {
    const { productId } = useParams();
    const { products } = useProductStore();
    const product = products.find(product => product.id === productId);

    if (!product) {
        return <Typography variant="h6">Produit non trouvé</Typography>;
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Box p={2}>
                    <ImageDisplay product={product} />
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box p={2}>
                    <Typography variant="h4">{product.label}</Typography>
                    <Typography>Prix: {product.price}</Typography>
                    <Typography>Stock: {product.stock}</Typography>
                    <Typography>{product.description}</Typography>
                </Box>
            </Grid>
        </Grid>
    );
}

export default ProductDetail;