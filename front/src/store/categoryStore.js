import { create } from 'zustand';
import zustymiddleware from 'zustymiddleware';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

const useCategoryStore = create(
    zustymiddleware((set, get) => ({
        categories: [],
        error: null,
        loadCategories: async () => {
            const currentCategories = get().categories;
            if (currentCategories.length === 0) {
                try {
                    const response = await fetchCategories();
                    set({ categories: response.data.data });
                } catch (error) {
                    set({
                        error: 'Impossible de charger les catégories.',
                    });
                }
            }
        },
    }))
);

const fetchCategories = async () => {
    try {
        const response = await axios.get(`${baseUrl}/category`);
        return response.data.data;
    } catch (error) {
        console.error('Erreur lors du chargement des catégories:', error);
        throw error;
    }
};

window.store = useCategoryStore;

export default useCategoryStore;
