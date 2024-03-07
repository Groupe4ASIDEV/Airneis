import { create } from 'zustand';
import zustymiddleware from 'zustymiddleware';

const useCheckoutStore = create(
    zustymiddleware((set) => ({
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
            console.log('New data:', newData); // Ajoutez cette ligne pour déboguer
            set(() => ({
                checkoutData: {
                    ...newData,
                },
            }));
        },
    }))
);

export default useCheckoutStore;
