import { Typography, Box } from '@mui/material';
import CarouselBuilder from '../components/Carousel';
import ImageDisplay from '../components/Pictures/Pictures';
import CategoryList from "../components/CategoryList";
import HighlightedCategories from '../components/HighlightedCategories';
import Carousel from "../components/Carousel";


function Home() {
    return (
        <div id="home">
            <ImageDisplay id={''} />
            <Carousel />
            <CarouselBuilder />
            <Box className="catchphrase">
                <Typography variant="h6" component="p">
                    Venant des Hautes Terres d'Ecosse
                    <br />
                    Nos meubles sont immortels
                </Typography>
            </Box>
            <Box>
                <CategoryList></CategoryList>
                <HighlightedCategories />
            </Box>
            <Box className="catchphrase">
                <Typography variant="h6" component="p">
                    Les Highlanders du moment
                </Typography>
            </Box>
        </div>
    );
}

export default Home;
