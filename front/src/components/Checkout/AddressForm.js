import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';
import useCheckoutStore from '../../store/checkoutStore';

function AddressForm({ step }) {
    const [address, setAddress] = useState('');
    const { checkoutData, setCheckoutData } = useCheckoutStore();

    useEffect(() => {
        console.log('🚀 ~ checkoutData:', checkoutData);
    }, [checkoutData]);

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };
    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setCheckoutData({
            [step === 0 ? 'shippingAddress' : 'billingAddress']: {
                ...checkoutData[
                    step === 0 ? 'shippingAddress' : 'billingAddress'
                ],
                [name]: value,
            },
        });
    };

    return (
        <>
            <Typography variant="h6" gutterBottom>
                {step === 0 ? 'Livraison' : 'Facturation'}
            </Typography>
            {/* <FormControl sx={{ minWidth: '50%' }}>
                <InputLabel id="demo-simple-select-label">
                    Adresses enregistrées
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={handleAddressChange}
                    label="Adresses enregistrées"
                    onChange={handleAddressChange}
                >
                    <MenuItem>Domicile</MenuItem>
                    <MenuItem>Travail</MenuItem>
                    <MenuItem>Babe's</MenuItem>
                </Select>
            </FormControl> */}
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Prénom"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                        onChange={handleFormChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Nom de famille"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        onChange={handleFormChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="street"
                        name="street"
                        label="Adresse 1"
                        fullWidth
                        autoComplete="shipping address-line1"
                        variant="standard"
                        onChange={handleFormChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="furtherInformation"
                        name="furtherInformation"
                        label="Adresse 2"
                        fullWidth
                        autoComplete="shipping address-line2"
                        variant="standard"
                        onChange={handleFormChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="phone"
                        name="phone"
                        label="Téléphone"
                        fullWidth
                        autoComplete="shipping phone-number"
                        variant="standard"
                        onChange={handleFormChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="city"
                        name="city"
                        label="Ville"
                        fullWidth
                        autoComplete="shipping address-level2"
                        variant="standard"
                        onChange={handleFormChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="state"
                        name="state"
                        label="État/Province/Région"
                        fullWidth
                        variant="standard"
                        onChange={handleFormChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="zipCode"
                        name="zipCode"
                        label="Code postal"
                        fullWidth
                        autoComplete="shipping postal-code"
                        variant="standard"
                        onChange={handleFormChange}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="country"
                        name="country"
                        label="Pays"
                        fullWidth
                        autoComplete="shipping country"
                        variant="standard"
                        onChange={handleFormChange}
                    />
                </Grid>
                {step === 0 ? (
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color="secondary"
                                    name="saveAddress"
                                    value="yes"
                                />
                            }
                            label="Utiliser également comme adresse de facturation"
                        />
                    </Grid>
                ) : null}
            </Grid>
        </>
    );
}

export default AddressForm;
