import { create } from 'zustand';
import zustymiddleware from 'zustymiddleware';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

const useFeaturedItemsStore = create(
    zustymiddleware((set, get) => ({
        featuredItems: [],
        error: null,
        addFeaturedItem: (item) =>
            set((state) => ({ featuredItems: [...state.featuredItems, item] })),
        loadFeaturedItems: async () => {
            const currentFeaturedItems = get().featuredItems;
            if (currentFeaturedItems.length === 0) {
                try {
                    const items = await fetchFeaturedItems();
                    set({ featuredItems: items });
                } catch (error) {
                    set({
                        error: 'Featured items are not available',
                    });
                }
            }
        },
    }))
);

const fetchFeaturedItems = async () => {
    try {
        const response = await axios.get(`${baseUrl}/featured-item`);
        return response.data.data;
    } catch (error) {
        console.error('Error while fetching featured items :', error);
        throw error;
    }
};

window.store = useFeaturedItemsStore;

export default useFeaturedItemsStore;
