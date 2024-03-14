import { create } from 'zustand';
import zustymiddleware from 'zustymiddleware';
import { fetchFeaturedItems } from '../services/featuredItemsService';

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

window.store = useFeaturedItemsStore;

export default useFeaturedItemsStore;
