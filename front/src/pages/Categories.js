import { Typography, Box } from '@mui/material';
import Carousel from '../components/Carousel';
import ImageDisplay from '../components/Pictures/Pictures';
import CategoryList from "../components/CatList";

function Categories() {

    return (
        <div id="categories">
            <ImageDisplay id={''} />
            <Carousel />
            <Box className="catchphrase">
                <Typography variant="h6" component="p">
                    Toutes les catégories
                </Typography>
            </Box>
            <Box>
                <CategoryList></CategoryList>
            </Box>
        </div>
    );
}

export default Categories;