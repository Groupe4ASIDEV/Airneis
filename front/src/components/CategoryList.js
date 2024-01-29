import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import axios from 'axios';

        function CategoryList({ categories }) {
            return (
                <Box>
                    <Typography variant="h4" component="h2">
                        Toutes les catégories
                    </Typography>
                    <ul>
                        {categories.map((category) => (
                            <li key={category._id}>
                                <strong>{category.label}</strong> - {category.description}
                            </li>
                        ))}
                    </ul>
                </Box>
            );
        }

export default CategoryList;