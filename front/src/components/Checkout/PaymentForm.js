import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useCheckoutStore } from '../../store';

function PaymentForm() {
    const { checkoutData, setCheckoutData } = useCheckoutStore();
    console.log('🚀 ~ PaymentForm ~ checkoutData:', checkoutData);

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Paiement
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardName"
                        label="Nom complet"
                        fullWidth
                        autoComplete="cc-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cardNumber"
                        label="Numéro de carte"
                        fullWidth
                        autoComplete="cc-number"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="expDate"
                        label="Date d'expiration"
                        fullWidth
                        autoComplete="cc-exp"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="cvv"
                        label="CVV"
                        helperText="3 chiffres au verso de la carte"
                        fullWidth
                        autoComplete="cc-csc"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="secondary"
                                name="saveCard"
                                value="yes"
                            />
                        }
                        label="Enregistrer ce moyen de paiement"
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default PaymentForm;
