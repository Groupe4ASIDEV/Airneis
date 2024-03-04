import {Box, useMediaQuery} from '@mui/material';
import ImageDisplay from './Pictures/Pictures';
import { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { useCategoryStore } from '../store';
import { Link } from 'react-router-dom';
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ImageListItem from "@mui/material/ImageListItem";

function CategoryList() {
    const { categories, loadCategories } = useCategoryStore();
    const isSmallScreen = useMediaQuery('(max-width:600px)');


    useEffect(() => {
        loadCategories();
    }, [loadCategories]);

    return (

        <Box id="categoryList" style={{ padding: 20 }}>
            <Grid container spacing={4}>
                {categories.map((category) => (
                    <Grid item xs={isSmallScreen ? 12 : 4} key={category._id}>
                        <Link
                            to={`/category/${category._id}`}
                            style={{
                                textDecoration: 'none',
                                display: 'block',
                            }}
                        >
                            <ImageListItem key={category.id}>
                                <ImageDisplay id={category.id} />
                                <ImageListItemBar
                                    title={category.label}
                                    subtitle={category.description}
                                />
                            </ImageListItem>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default CategoryList;