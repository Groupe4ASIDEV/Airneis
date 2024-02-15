import { create } from 'zustand';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

const useProductStore = create((set, get) => ({
    products: [],
    loadProducts: async () => {
        const currentProducts = get().products;
        if (currentProducts.length === 0) {
            try {
                const response = await axios.get(`${baseUrl}/product`);
                set({ products: response.data.data });
            } catch (error) {
                console.error('Erreur lors du chargement des produits:', error);
            }
        }
    },
}));
export default useProductStore;
