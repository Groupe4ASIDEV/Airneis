import { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import {
    useFeaturedItemsStore,
    useProductStore,
    useCategoryStore,
    usePictureStore,
} from '../store';
import ImageDisplay from './Pictures/Pictures';
import { Box, CircularProgress } from '@mui/material';

function CarouselBuilder() {
    const { featuredItems, loadFeaturedItems } = useFeaturedItemsStore();
    const { products, loadProducts } = useProductStore();
    const { categories, loadCategories } = useCategoryStore();
    const { loadPictures } = usePictureStore();

    useEffect(() => {
        loadFeaturedItems();
        loadProducts();
        loadCategories();
        loadPictures();
    }, [loadFeaturedItems, loadProducts, loadCategories, loadPictures]);

    const carousel = featuredItems.find((item) => item.type === 'CAROUSEL');

    if (!carousel) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <Carousel>
            {carousel.items.map((itemId, i) => {
                const product = products.find((p) => p._id === itemId);
                const category = categories.find((c) => c._id === itemId);
                const pictureId = product?.pictures[0] || category?.picture;
                const label = product?.label || category?.label;

                return (
                    <Item
                        key={i}
                        id={itemId}
                        pictureId={pictureId}
                        label={label}
                    />
                );
            })}
        </Carousel>
    );
}

function Item(props) {
    return <ImageDisplay id={props.pictureId} />;
}

export default CarouselBuilder;
