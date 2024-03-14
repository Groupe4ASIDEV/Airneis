import { create } from 'zustand';
import zustymiddleware from 'zustymiddleware';
import { fetchOrders } from '../services/orderService';

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
                        error: 'Orders are note available',
                    });
                }
            }
        },
    }))
);

window.store = useOrderStore;

export default useOrderStore;
