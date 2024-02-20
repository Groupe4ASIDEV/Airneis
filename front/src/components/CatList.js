import { Box } from '@mui/material';
import ImageDisplay from "./Pictures/Pictures";
import {useEffect, useState} from "react";


function CategoryList() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(response => response.json())
            .then(data => {
                setCategories(data)
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des catégories:', error);
            });
        console.log(categories);
    }, []);

    return (
        <div id="categoryList">
            {categories.map(category => (
                <Box key={category.id} className="container">
                    <h2>{category.name}</h2>
                    <ImageDisplay id={category.id} />
                </Box>
            ))}
        </div>
    );
}


export default CategoryList;