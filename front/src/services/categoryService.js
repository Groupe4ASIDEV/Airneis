import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

export async function fetchCategories() {
    try {
        const response = await axios.get(`${baseUrl}/category`);
        return response.data.data;
    } catch (error) {
        console.error('Error while fetching categories :', error);
        throw error;
    }
}
