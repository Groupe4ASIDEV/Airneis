import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useCheckoutStore } from '../../store';
import { useEffect, forwardRef, useImperativeHandle } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';

const PaymentForm = forwardRef((props, ref) => {
    const { checkout, setCheckout } = useCheckoutStore();
    const stripe = useStripe();
    const elements = useElements();

    useEffect(() => {}, [checkout]);

    const handleChange = (event) => {
        const { checked, name, value } = event.target;

        setCheckout({
            ...checkout,
            payment: {
                ...checkout.payment,
                [name]: value,
            },
            savePayment: checked,
        });
    };

    useImperativeHandle(ref, () => ({
        handlePaymentSubmission: async () => {
            if (!stripe || !elements) {
                return;
            }
            console.log('prout');
            const cardElement = elements.getElement(CardElement);
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
                billing_details: {
                    name: checkout.fullName,
                },
            });
            if (error) {
                console.log('[error]', error);
                return;
            }

            setCheckout({
                ...checkout,
                payment: {
                    ...checkout.payment,
                    paymentMethodId: paymentMethod.id,
                },
            });

            return paymentMethod.id;
        },
    }));

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Paiement
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <TextField
                        required
                        id="fullName"
                        name="fullName"
                        label="Nom complet"
                        fullWidth
                        autoComplete="cc-name"
                        variant="standard"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} md={12}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#757575',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                </Grid>
                {/* <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="secondary"
                                name="saveCard"
                                value="yes"
                                onChange={handleChange}
                            />
                        }
                        label="Enregistrer ce moyen de paiement"
                    />
                </Grid> */}
            </Grid>
        </>
    );
});

export default PaymentForm;
