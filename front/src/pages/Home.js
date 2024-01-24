import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import Carousel from '../components/Carousel';
import HighlightedCategories from '../components/HighlightedCategories';
import HighlightedProducts from '../components/HighlightedProducts';
import axios from 'axios';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/products'); // Remplacez l'URL par votre endpoint API
                setProducts(response.data);
            } catch (error) {
                console.error('Erreur lors du chargement des produits :', error);
            }
        };

        fetchProducts();
    }, []);

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
            <HighlightedProducts products={products} />
        </>
    );
}

export default Home;