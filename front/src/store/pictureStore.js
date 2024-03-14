import { create } from 'zustand';
import zustymiddleware from 'zustymiddleware';
import { fetchPictures } from '../services/pictureService';

const usePictureStore = create(
    zustymiddleware((set, get) => ({
        pictures: [],
        error: null,
        loadPictures: async () => {
            const currentPictures = get().pictures;
            if (currentPictures.length === 0) {
                try {
                    const response = await fetchPictures();
                    set({ pictures: response });
                } catch (error) {
                    set({
                        error: 'Pictures are not available',
                    });
                }
            }
        },
    }))
);

window.store = usePictureStore;

export default usePictureStore;
