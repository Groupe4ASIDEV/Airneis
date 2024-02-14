import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import CarouselBuilder from '../components/Carousel';
import HighlightedCategories from '../components/HighlightedCategories';
import HighlightedProducts from '../components/HighlightedProducts';
import ImageDisplay from '../components/Pictures/Pictures';
import axios from 'axios';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:3000/products'
                ); // Remplacez l'URL par votre endpoint API
                setProducts(response.data);
            } catch (error) {
                console.error(
                    'Erreur lors du chargement des produits :',
                    error
                );
            }
        };

        fetchProducts();
    }, []);

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
            <HighlightedCategories />
            <Box className="catchphrase">
                <Typography variant="h6" component="p">
                    Les Highlanders du moment
                </Typography>
            </Box>
            <HighlightedProducts products={products} />
        </div>
    );
}

export default Home;
