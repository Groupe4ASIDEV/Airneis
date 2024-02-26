import { Box } from '@mui/material';
import ImageDisplay from "./Pictures/Pictures";
import {useEffect, useState} from "react";
import Grid from "@mui/material/Grid";
import {useCategoryStore} from "../store";



function CategoryList() {
    const { categories, loadCategories } = useCategoryStore();

    useEffect(() => {
        loadCategories();
    }, [loadCategories]);

    return (
        <div id="categoryList">
            <Grid container spacing={2}>
                {categories.map(category => (
                    <Grid item xs={4} key={category.id}>
                        <Box className="container">
                            <h2>{category.name}</h2>
                            <ImageDisplay id={category.id} />
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}


export default CategoryList;