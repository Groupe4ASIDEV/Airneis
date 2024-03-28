import { create } from 'zustand';
import zustymiddleware from 'zustymiddleware';

const useCheckoutStore = create(
    zustymiddleware((set, get) => ({
        checkout: {
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
            payment: {
                fullName: '',
                cardNumber: '',
                expirationDate: '',
                cvv: '',
            },
        },
        setCheckout: (newData) => {
            set((prevState) => ({
                ...prevState,
                checkout: {
                    ...prevState.checkout,
                    ...newData,
                },
            }));
        },

        get,
    }))
);

export default useCheckoutStore;
