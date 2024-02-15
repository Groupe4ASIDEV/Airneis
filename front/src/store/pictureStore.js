import { create } from 'zustand';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

const usePictureStore = create((set, get) => ({
  pictures: [],
  loadPictures: async () => {
    const currentPictures = get().pictures;
    if (currentPictures.length === 0) {
      try {
        const response = await axios.get(`${baseUrl}/picture`);
        set({ pictures: response.data.data });
      } catch (error) {
        console.error('Erreur lors du chargement des images:', error);
      }
    }
  },
}));

export default usePictureStore;
