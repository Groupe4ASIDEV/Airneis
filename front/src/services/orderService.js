import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

export const fetchOrders = async (userId) => {
    try {
        const response = await axios.post(`${baseUrl}/order`, {
            userId,
        });
        return response.data.data;
    } catch (error) {
        console.error('Error while fetching orders :', error);
        throw error;
    }
};

export const cancelOrder = async (orderId) => {
    try {
        const response = await axios.put(`${baseUrl}/order/update/${orderId}`, {
            state: 'ANNULÉE',
        });
        return response.data.data;
    } catch (error) {
        console.error('Error while cancelling order :', error);
        throw error;
    }
};
