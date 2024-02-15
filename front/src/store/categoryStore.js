import { create } from 'zustand';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

const useCategoryStore = create((set, get) => ({
    categories: [],
    loadCategories: async () => {
        const currentCategories = get().categories;
        if (currentCategories.length === 0) {
            try {
                const response = await axios.get(`${baseUrl}/category`);
                set({ categories: response.data.data });
            } catch (error) {
                console.error(
                    'Erreur lors du chargement des catégories:',
                    error
                );
            }
        }
    },
}));
export default useCategoryStore;
