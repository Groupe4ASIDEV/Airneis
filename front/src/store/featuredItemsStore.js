import { create } from 'zustand';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

const useFeaturedItemsStore = create((set, get) => ({
  featuredItems: [],
  addFeaturedItem: (item) => set((state) => ({ featuredItems: [...state.featuredItems, item] })),
  loadFeaturedItems: async () => {
    const currentFeaturedItems = get().featuredItems;
    if (currentFeaturedItems.length === 0) {
      try {
        const response = await axios.get(`${baseUrl}/featured-item`);
        set({ featuredItems: response.data.data });
      } catch (error) {
        console.error('Erreur lors du chargement des featuredItems:', error);
      }
    }
  },
}));

export default useFeaturedItemsStore;
