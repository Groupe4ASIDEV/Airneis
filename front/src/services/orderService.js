import axios from 'axios';
import { calculateCartATITotal, calculateCartVATTotal } from '../utils/calculs';

const baseUrl = process.env.REACT_APP_API_URL;

export async function fetchOrders(userId) {
    try {
        const response = await axios.post(`${baseUrl}/order`, {
            userId,
        });
        return response.data.data;
    } catch (error) {
        console.error('Error while fetching orders :', error);
        throw error;
    }
}

export async function createOrder(userData, checkout, items) {
    try {
        const response = await axios.post(`${baseUrl}/order/create`, {
            user: userData._id,
            shippingAddress: {
                fullName: `${checkout.shippingAddress.firstName} ${checkout.shippingAddress.lastName}`,
                street: checkout.shippingAddress.street,
                city: checkout.shippingAddress.city,
                zipCode: checkout.shippingAddress.zipCode,
                state: checkout.shippingAddress.state,
                country: checkout.shippingAddress.country,
                phone: checkout.shippingAddress.phone,
                furtherInformation: checkout.shippingAddress.furtherInformation,
            },
            billingAddress: {
                fullName: `${checkout.billingAddress.firstName} ${checkout.billingAddress.lastName}`,
                street: checkout.billingAddress.street,
                city: checkout.billingAddress.city,
                zipCode: checkout.billingAddress.zipCode,
                state: checkout.billingAddress.state,
                country: checkout.billingAddress.country,
            },
            items: items.map((item) => ({
                productId: item._id,
                label: item.label,
                description: item.description,
                price: item.price,
                quantity: item.quantity,
                pictures: item.pictures,
                returnedQuantity: item.returnedQuantity,
            })),
            total: calculateCartATITotal(items),
            vat: calculateCartVATTotal(items),
        });

        return response.data.data;
    } catch (error) {
        console.error('Error creating order');
        throw error;
    }
}

export async function incrementReturnedQuantity(
    orderId,
    itemId,
    returnedQuantity
) {
    try {
        const orderResponse = await axios.get(`${baseUrl}/order/${orderId}`);
        let order = orderResponse.data.data;

        let item = order.items.find((item) => item.productId === itemId);

        if (item) {
            item.returnedQuantity += returnedQuantity;
            console.log(
                '🚀 ~ incrementReturnedQuantity ~ item.returnedQuantity:',
                item.returnedQuantity
            );

            const updateResponse = await axios.put(
                `${baseUrl}/order/update/${orderId}`,
                order
            );
            return updateResponse.data.data;
        } else {
            throw new Error(`Item with id ${itemId} not found in the order.`);
        }
    } catch (error) {
        console.error('Error while updating returnedQuantity :', error);
        throw error;
    }
}

export async function cancelOrder(orderId) {
    try {
        const response = await axios.put(`${baseUrl}/order/update/${orderId}`, {
            state: 'ANNULÉE',
        });
        return response.data.data;
    } catch (error) {
        console.error('Error while cancelling order :', error);
        throw error;
    }
}
