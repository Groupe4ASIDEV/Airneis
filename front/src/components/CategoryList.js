import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import axios from 'axios';

const CategoryList = () => {
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

    return (
        <div>
            <Typography variant="h4" component="h2" gutterBottom>
                Toutes les catégories
            </Typography>
            <ul>
                {categories.map(category => (
                    <li key={category._id}>
                        <strong>{category.label}</strong>: {category.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;