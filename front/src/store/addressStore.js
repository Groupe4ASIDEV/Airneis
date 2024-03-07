import { create } from 'zustand';
import zustymiddleware from 'zustymiddleware';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

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

const fetchAddresses = async () => {
    try {
        const response = await axios.get(`${baseUrl}/address`);
        return response.data.data;
    } catch (error) {
        console.error('Error while fetching adresses :', error);
        throw error;
    }
};

window.store = useAddressStore;

export default useAddressStore;
