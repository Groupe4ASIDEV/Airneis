import { Typography, Box } from '@mui/material';
import Carousel from '../components/Carousel';
import ImageDisplay from '../components/Pictures/Pictures';
import HighlightedProducts from "../components/HighlightedProducts";

function Products() {

    return (
        <div id="products">
            <ImageDisplay id={'65ae6ebe1628cad26ad03d15'} />
            <Carousel />
            <Box className="catchphrase">
                <Typography variant="h6" component="p">

                </Typography>
            </Box>
            <Box>
                <HighlightedProducts></HighlightedProducts>
            </Box>
        </div>
    );
}

export default Products;