import { create } from 'zustand';
import zustymiddleware from 'zustymiddleware';
import { fetchProducts } from '../services/produtService';

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

window.store = useProductStore;

export default useProductStore;
