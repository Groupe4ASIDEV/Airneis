import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

export async function fetchAddresses() {
    try {
        const response = await axios.get(`${baseUrl}/address`);
        return response.data.data;
    } catch (error) {
        console.error('Error while fetching adresses :', error);
        throw error;
    }
}
