import { Box } from '@mui/material';
/*  import { makeStyles } from '@mui/system';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    image: {
        width: '30%',
        height: 'auto',
    },
}));  */

function CustomComponent() {
    // const classes = useStyles();

    return (
        <Box>
            <img src="image1.jpg" alt="Image 1" />
            <img src="image2.jpg" alt="Image 2" />
            <img src="image3.jpg" alt="Image 3" />
        </Box>
    );
}

export default CustomComponent;