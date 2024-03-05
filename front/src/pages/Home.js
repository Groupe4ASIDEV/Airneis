import { Typography, Box } from '@mui/material';
import CarouselBuilder from '../components/Carousel';
import CategoryList from "../components/CategoryList";
import CookieConsent from "../components/CookieConsent";

function Home() {
    return (
        <div id="home">
            <CarouselBuilder />
            <Box className="catchphrase">
                <Typography variant="h6" component="p">
                    Venant des Hautes Terres d'Ecosse
                    <br />
                    Nos meubles sont immortels
                </Typography>
            </Box>
            <Box>
                <CategoryList />
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
