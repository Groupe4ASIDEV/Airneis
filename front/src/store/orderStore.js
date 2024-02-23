import { create } from 'zustand';
import zustymiddleware from 'zustymiddleware';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

const useOrderStore = create(
    zustymiddleware((set, get) => ({
        orders: [],
        error: null,
        loadOrders: async (userId) => {
            const currentOrders = get().orders;
            if (currentOrders.length === 0) {
                try {
                    const response = await fetchOrders(userId);
                    set({ orders: response });
                } catch (error) {
                    set({
                        error: 'Impossible de charger les commandes.',
                    });
                }
            }
        },
    }))
);

const fetchOrders = async (userId) => {
    try {
        const response = await axios.post(`${baseUrl}/order`, {
            userId,
        });
        return response.data.data;
    } catch (error) {
        console.error('Erreur lors du chargement des commandes:', error);
        throw error;
    }
};

window.store = useOrderStore;

export default useOrderStore;
