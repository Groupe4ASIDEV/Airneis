import { create } from 'zustand';
import zustymiddleware from 'zustymiddleware';

const useCheckoutStore = create(
    zustymiddleware((set, get) => ({
        checkoutData: {
            shippingAddress: {
                firstName: '',
                lastName: '',
                street: '',
                city: '',
                zipCode: '',
                state: '',
                country: '',
                furtherInformation: '',
                phone: '',
            },
            saveAddress: false,
            billingAddress: {
                firstName: '',
                lastName: '',
                street: '',
                city: '',
                zipCode: '',
                state: '',
                country: '',
                furtherInformation: '',
                phone: '',
            },
        },
        setCheckoutData: (newData) => {
            set((prevState) => ({
                ...prevState,
                checkoutData: {
                    ...prevState.checkoutData,
                    ...newData,
                },
            }));
        },

        get,
    }))
);

export default useCheckoutStore;
