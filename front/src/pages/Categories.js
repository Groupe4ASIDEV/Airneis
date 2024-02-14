import { Typography, Box } from '@mui/material';
import Carousel from '../components/Carousel';
import ImageDisplay from '../components/Pictures/Pictures';
import CategoryList from "../components/CatList";

function Categories() {

    return (
        <div id="categories">
            <ImageDisplay id={'65ae6ebe1628cad26ad03d15'} />
            <Carousel />
            <Box className="catchphrase">
                <Typography variant="h6" component="p">
                    Venant des Hautes Terres d'Ecosse
                    <br />
                    Nos meubles sont immortels
                </Typography>
            </Box>
            <Box>
                <CategoryList></CategoryList>
            </Box>
        </div>
    );
}

export default Categories;