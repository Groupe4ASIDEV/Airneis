import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useCheckoutStore } from '../../store';
import { useEffect } from 'react';

function PaymentForm() {
    const { checkout, setCheckout } = useCheckoutStore();

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

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Paiement
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
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
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardNumber"
                        name="cardNumber"
                        label="Numéro de carte"
                        fullWidth
                        autoComplete="cc-number"
                        variant="standard"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="expirationDate"
                        name="expirationDate"
                        label="Date d'expiration"
                        fullWidth
                        autoComplete="cc-exp"
                        variant="standard"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cvv"
                        name="cvv"
                        label="CVV"
                        helperText="3 chiffres au verso de la carte"
                        fullWidth
                        autoComplete="cc-csc"
                        variant="standard"
                        onChange={handleChange}
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
}

export default PaymentForm;
