import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

export const fetchProducts = async () => {
    try {
        const response = await axios.get(`${baseUrl}/product`);
        return response.data.data;
    } catch (error) {
        console.error('Error while fetching products :', error);
        throw error;
    }
};
