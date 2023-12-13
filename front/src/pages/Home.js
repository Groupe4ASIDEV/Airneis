import { Typography, Box } from '@mui/material';
import Carousel from '../components/Carousel';
import HighlightedCategories from '../components/HighlightedCategories';
import HighlightedProducts from '../components/HighlightedProducts';

function Home() {
    return (
        <>
            <Carousel />
            <Box className="catchphrase">
                <Typography variant="h6" component="p">
                    Venant des Hautes Terres d'Ecosse
                    <br />
                    Nos meubles sont immortels
                </Typography>
            </Box>
            <HighlightedCategories />
            <Box className="catchphrase">
                <Typography variant="h6" component="p">
                    Les highlanders du moment
                </Typography>
            </Box>
            <HighlightedProducts />
        </>
    );
}

export default Home;
