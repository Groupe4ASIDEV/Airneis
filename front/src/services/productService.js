import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

export async function fetchProducts() {
    try {
        const response = await axios.get(`${baseUrl}/product`);
        return response.data.data;
    } catch (error) {
        console.error('Error while fetching products :', error);
        throw error;
    }
}

export async function fetchProduct(productId) {
    try {
        const response = await axios.post(`${baseUrl}/product/`, {
            id: productId,
        });
        return response.data.data;
    } catch (error) {
        console.error('Error while fetching product :', error);
        throw error;
    }
}

export async function removeProductStock(productId, quantity) {
    console.log('🚀 ~ updateProduct ~ productId:', productId);
    const product = await fetchProduct(productId);
    console.log('🚀 ~ updateProduct ~ product:', product);
    try {
        if (product.stock < quantity) {
            throw new Error(
                `Not enough stock for product ${product.label} : stock available ${product.stock}`
            );
        }

        const newStock = product.stock - quantity;
        const response = await axios.put(
            `${baseUrl}/product/update/${productId}`,
            {
                stock: newStock,
            }
        );

        return response.data.data;
    } catch (error) {
        console.error('Error while updating product :', error);
        throw error;
    }
}

export async function addProductStock(productId, quantity) {
    console.log('🚀 ~ updateProduct ~ productId:', productId);
    const product = await fetchProduct(productId);
    console.log('🚀 ~ updateProduct ~ product:', product);
    try {
        const newStock = product.stock + quantity;
        const response = await axios.put(
            `${baseUrl}/product/update/${productId}`,
            {
                stock: newStock,
            }
        );

        return response.data.data;
    } catch (error) {
        console.error('Error while updating product :', error);
        throw error;
    }
}
