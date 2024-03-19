import { create } from 'zustand';
import zustymiddleware from 'zustymiddleware';
import { fetchAddresses } from '../services/addressService';

const useAddressStore = create(
    zustymiddleware((set, get) => ({
        addresses: [],
        error: null,
        loadAddresses: async () => {
            const currentAddress = get().addresses;
            if (currentAddress.length === 0) {
                try {
                    const response = await fetchAddresses();
                    set({ adresses: response });
                } catch (error) {
                    set({
                        error: 'Adresses are not available',
                    });
                }
            }
        },
    }))
);

window.store = useAddressStore;

export default useAddressStore;
