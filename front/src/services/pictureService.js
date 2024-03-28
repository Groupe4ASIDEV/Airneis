import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

export async function fetchPictures() {
    try {
        const response = await axios.get(`${baseUrl}/picture`);
        return response.data.data;
    } catch (error) {
        console.error('Error while fetching pictures :', error);
        throw error;
    }
}
