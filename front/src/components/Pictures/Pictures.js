import { useState, useEffect } from 'react';
import { Card, CardMedia } from '@mui/material';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

const ImageDisplay = ({ id }) => {
    const [pictureUrl, setPictureUrl] = useState('');
    const [altText, setAltText] = useState('');

    useEffect(() => {
        if (!id) {
            return;
        }
        axios
            .post(`${baseUrl}/picture`, { id: id })
            .then((response) => {
                setPictureUrl(baseUrl + '/' + response.data.data.url);
                setAltText(response.data.data.alt);
            })
            .catch((error) => {
                console.error('Error fetching image:', error);
            });
    }, [id]);

    return (
        <Card>
            <CardMedia
                component="img"
                alt={altText}
                height="140"
                image={
                    pictureUrl || baseUrl + '/6be167476748f93fdc267da00.webp'
                }
            />
        </Card>
    );
};

export default ImageDisplay;
