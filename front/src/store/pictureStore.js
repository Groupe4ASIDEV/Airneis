import { create } from 'zustand';
import zustymiddleware from 'zustymiddleware';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

const usePictureStore = create(
    zustymiddleware((set, get) => ({
        pictures: [],
        error: null,
        loadPictures: async () => {
            const currentPictures = get().pictures;
            if (currentPictures.length === 0) {
                try {
                    const response = await fetchPictures();
                    set({ pictures: response.data.data });
                } catch (error) {
                    set({
                        error: 'Impossible de charger les images.',
                    });
                }
            }
        },
    }))
);

const fetchPictures = async () => {
    try {
        const response = await axios.get(`${baseUrl}/picture`);
        return response.data.data;
    } catch (error) {
        console.error('Erreur lors du chargement des images:', error);
        throw error;
    }
};

window.store = usePictureStore;

export default usePictureStore;
