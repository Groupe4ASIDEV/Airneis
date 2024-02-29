import {Box, Link} from '@mui/material';
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
                    <Grid item xs={4} key={category._id}>
                        <Link to={`/category/${category._id}`}
                              style={{textDecoration: 'none', backgroundColor: 'brown', display: 'block'}}>
                            TU ES DANS LE LIEN
                            <h2>{category.label}</h2>
                            <Box className="container" style={{backgroundColor: 'yellow'}}>
                                <ImageDisplay id={category.id}/>
                            </Box>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    );

}


export default CategoryList;