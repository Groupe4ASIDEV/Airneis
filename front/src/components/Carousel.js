import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { useEffect, useState } from 'react';

const baseUrl = process.env.REACT_APP_API_URL;

function CarouselBuilder() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${baseUrl}/featured-item/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ id: '65b7567be24917261715689d' }),
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                setItems(data.data);
                console.log('🚀 ~ fetchData ~ data:', data.data);
            } catch (error) {
                console.error(
                    'There was a problem with the fetch operation:',
                    error
                );
            }
        };

        fetchData();
    }, []);

    console.log(items);

    return (
        <Carousel>
            {items.map((item, i) => (
                <Item key={i} item={item} />
            ))}
        </Carousel>
    );
}

function Item(props) {
    return (
        <Paper>
            <h2>{props.item.label}</h2>
            <p>{props.item.description}</p>
        </Paper>
    );
}

export default CarouselBuilder;
