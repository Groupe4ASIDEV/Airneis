import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

export async function createPaymentIntentOnServer() {
    try {
        const response = await axios.post(`${baseUrl}/payment-intent/create`, {
            amount: 1000,
            currency: 'eur',
        });
        console.log(response.data.data);
        return response.data.data;
    } catch (error) {
        console.error('Error while creating payment intent :', error);
        throw error;
    }
}
