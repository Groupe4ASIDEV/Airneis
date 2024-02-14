import { Box } from '@mui/material';


function CustomComponent() {
    // const classes = useStyles();

    return (
        <div id="categoryList">
            <Box className="container">
                <img src="image1.jpg" alt="Image 1" />
                <img src="image2.jpg" alt="Image 2" />
                <img src="image3.jpg" alt="Image 3" />
            </Box>
        </div>
    );
}

export default CustomComponent;