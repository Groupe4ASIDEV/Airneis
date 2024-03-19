import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useEffect, useState } from 'react';
import useCheckoutStore from '../../store/checkoutStore';

function AddressForm({ step }) {
    const [addresses, setAddresses] = useState('');
    const { checkout, setCheckout } = useCheckoutStore();

    useEffect(() => {}, [checkout, step]);

    const handleAddressChange = (event) => {
        setAddresses(event.target.value);
    };

    const handleChange = (event) => {
        const { checked, name, value } = event.target;
        const shippingAddressData = { ...checkout.shippingAddress };

        setCheckout({
            [step === 0 ? 'shippingAddress' : 'billingAddress']: {
                ...checkout[step === 0 ? 'shippingAddress' : 'billingAddress'],
                [name]: value,
            },
            ...(checked && { billingAddress: { ...shippingAddressData } }),
            saveAddress: checked,
        });
    };

    return (
        <>
            <Typography variant="h6" gutterBottom>
                {step === 0 ? 'Livraison' : 'Facturation'}
            </Typography>
            <FormControl sx={{ minWidth: '50%' }}>
                <InputLabel id="demo-simple-select-label">
                    Adresses enregistrées
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Adresses enregistrées"
                    value={addresses}
                    onChange={handleAddressChange}
                >
                    <MenuItem value={1}>Domicile</MenuItem>
                    <MenuItem value={2}>Travail</MenuItem>
                    <MenuItem value={3}>Babe's</MenuItem>
                </Select>
            </FormControl>
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
                        onChange={handleChange}
                        value={
                            checkout[
                                step === 0
                                    ? 'shippingAddress.firstName'
                                    : 'billingAddress.firstName'
                            ]
                        }
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
                        onChange={handleChange}
                        value={
                            checkout[
                                step === 0
                                    ? 'shippingAddress.lastName'
                                    : 'billingAddress.lastName'
                            ]
                        }
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
                        onChange={handleChange}
                        value={
                            checkout[
                                step === 0
                                    ? 'shippingAddress.street'
                                    : 'billingAddress.street'
                            ]
                        }
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
                        onChange={handleChange}
                        value={
                            checkout[
                                step === 0
                                    ? 'shippingAddress.furtherInformation'
                                    : 'billingAddress.furtherInformation'
                            ]
                        }
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
                        onChange={handleChange}
                        value={
                            checkout[
                                step === 0
                                    ? 'shippingAddress.phone'
                                    : 'billingAddress.phone'
                            ]
                        }
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
                        onChange={handleChange}
                        value={
                            checkout[
                                step === 0
                                    ? 'shippingAddress.city'
                                    : 'billingAddress.city'
                            ]
                        }
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        id="state"
                        name="state"
                        label="État/Province/Région"
                        fullWidth
                        variant="standard"
                        onChange={handleChange}
                        value={
                            checkout[
                                step === 0
                                    ? 'shippingAddress.state'
                                    : 'billingAddress.state'
                            ]
                        }
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
                        onChange={handleChange}
                        value={
                            checkout[
                                step === 0
                                    ? 'shippingAddress.zipCode'
                                    : 'billingAddress.zipCode'
                            ]
                        }
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
                        onChange={handleChange}
                        value={
                            checkout[
                                step === 0
                                    ? 'shippingAddress.country'
                                    : 'billingAddress.country'
                            ]
                        }
                    />
                </Grid>
                {step === 0 ? (
                    <Grid item xs={12}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    color="secondary"
                                    name="saveAddress"
                                    value={checkout.saveAddress}
                                    checked={checkout.saveAddress}
                                    onClick={handleChange}
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
