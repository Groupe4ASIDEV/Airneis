import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

export async function fetchFeaturedItems() {
    try {
        const response = await axios.get(`${baseUrl}/featured-item`);
        return response.data.data;
    } catch (error) {
        console.error('Error while fetching featured items :', error);
        throw error;
    }
}