import { create } from 'zustand';
import zustymiddleware from 'zustymiddleware';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

const useProductStore = create(
    zustymiddleware((set, get) => ({
        products: [],
        loadProducts: async () => {
            const currentProducts = get().products;
            if (currentProducts.length === 0) {
                try {
                    const response = await fetchProducts();
                    set({ products: response });
                } catch (error) {
                    set({
                        error: 'Products are not available',
                    });
                }
            }
        },
    }))
);

const fetchProducts = async () => {
    try {
        const response = await axios.get(`${baseUrl}/product`);
        return response.data.data;
    } catch (error) {
        console.error('Error while fetching products :', error);
        throw error;
    }
};

window.store = useProductStore;

export default useProductStore;
