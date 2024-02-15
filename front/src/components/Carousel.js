import { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useFeaturedItemsStore } from '../store';
import { useProductStore } from '../store';
import { useCategoryStore } from '../store';
import ImageDisplay from './Pictures/Pictures';

function CarouselBuilder() {
    const { featuredItems, loadFeaturedItems } = useFeaturedItemsStore();
    const { products, loadProducts } = useProductStore();
    const { categories, loadCategories } = useCategoryStore();

    useEffect(() => {
        loadFeaturedItems();
        loadProducts();
        loadCategories();
    }, [loadFeaturedItems, loadProducts, loadCategories]);

    const carousel = featuredItems.find((item) => item.type === 'CAROUSEL');
    console.log('🚀 ~ CarouselBuilder ~ carousel:', carousel);

    if (!carousel) {
        return <p>Loading...</p>;
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
