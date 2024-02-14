import { Typography, Box } from '@mui/material';
import Carousel from '../components/Carousel';
import ImageDisplay from '../components/Pictures/Pictures';
import CustomComponent from "../components/CatList";

function Home() {

    return (
        <div id="home">
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
                <CustomComponent></CustomComponent>
            </Box>
        </div>
    );
}

export default Home;