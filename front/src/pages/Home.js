import { Typography, Box } from '@mui/material';
import Carousel from '../components/Carousel';
import ImageDisplay from '../components/Pictures/Pictures';
import CategoryList from "../components/CategoryList";


function Home() {

    return (
        <div id="home">
            <ImageDisplay id={''} />
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

export default Home;