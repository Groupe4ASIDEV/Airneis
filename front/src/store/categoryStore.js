import { create } from 'zustand';
import zustymiddleware from 'zustymiddleware';
import { fetchCategories } from '../services/categoryService';

const useCategoryStore = create(
    zustymiddleware((set, get) => ({
        categories: [],
        error: null,
        loadCategories: async () => {
            const currentCategories = get().categories;
            if (currentCategories.length === 0) {
                try {
                    const response = await fetchCategories();
                    set({ categories: response });
                } catch (error) {
                    set({
                        error: 'Categories are not available',
                    });
                }
            }
        },
    }))
);

window.store = useCategoryStore;

export default useCategoryStore;
