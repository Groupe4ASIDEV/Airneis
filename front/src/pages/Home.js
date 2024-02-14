import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import Carousel from '../components/Carousel';
import HighlightedCategories from '../components/HighlightedCategories';
import HighlightedProducts from '../components/HighlightedProducts';
import CategoryList from "../components/CategoryList";
import ImageDisplay from '../components/Pictures/Pictures';
import axios from 'axios';
import CustomComponent from "../components/CatList";

function Home() {
    /* const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/product');
                setProducts(response.data);
            } catch (error) {
                console.error('Erreur lors du chargement des produits :', error);
            }
        };

        fetchProducts();


    }, []);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:5000/category');
                setCategories(response.data);
            } catch (error) {
                console.error('Erreur lors du chargement des catégories :', error);
            }
        };

        fetchCategories();
    }, []);

    <HighlightedCategories />
            <Box className="catchphrase">
                <Typography variant="h6" component="p">
                    Les highlanders du moment

                </Typography>
            </Box>
            <HighlightedProducts products={products} />
            <CategoryList categories={categories} />

            */

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