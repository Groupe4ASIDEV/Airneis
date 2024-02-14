import { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { useFeaturedItemsStore } from '../store';
import { useProductStore } from '../store';
import { useCategoryStore } from '../store';
import ImageDisplay from './Pictures/Pictures';

function CarouselBuilder() {
  const { featuredItems, loadFeaturedItems } = useFeaturedItemsStore();
  const { products, loadProduct } = useProductStore();
  const { categories, loadCategory } = useCategoryStore();

  useEffect(() => {
    loadFeaturedItems();
    // charger les produits et les categories ici?
  }, [loadFeaturedItems, loadProduct, loadCategory]);

  const carousel = featuredItems.find(item => item.type === "CAROUSEL");

  if (!carousel) {
    return <p>LOADING</p>;
  }

  return (
    <Carousel>
      {carousel.items.map((itemId, i) => {
        const product = products[itemId];
        const category = categories[itemId];
        const pictureUrl = product?.pictures[0] || category?.picture;
        const label = product?.label || category?.label;

        return (
            <Item key={i} pictureUrl={pictureUrl} label={label} />
        );
      })}
    </Carousel>
  );
}

function Item(props) {
  console.log("🚀 ~ Item ~ props:", props)
  return (
    <>
        <p>{props.label}</p>
        <ImageDisplay id={props.id}/>
    </>
  );
}

export default CarouselBuilder;
