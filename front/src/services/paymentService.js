import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

export async function createPaymentIntentOnServer(amount, currency) {
    try {
        const response = await axios.post(`${baseUrl}/payment-intent/create`, {
            amount,
            currency,
        });
        return response.data.data;
    } catch (error) {
        console.error('Error while creating payment intent :', error);
        throw error;
    }
}
