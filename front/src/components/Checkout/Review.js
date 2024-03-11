import React, { useEffect } from 'react';
import { useCheckoutStore } from '../../store';
import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material';

function Review() {
    const { checkout, setCheckout } = useCheckoutStore();
    const cartData = localStorage.getItem('cart');
    let products = [];

    if (cartData) {
        const parsedData = JSON.parse(cartData);
        const cart = parsedData.state.cart;
        products = cart;
    }

    useEffect(() => {
        console.log('🚀 ~ checkoutData:', checkout);
    }, [checkout]);

    function calculateCartETTotal() {
        return products.reduce(
            (total, product) => total + product.price * product.quantity,
            0
        );
    }

    function calculateCartVATTotal() {
        return calculateCartETTotal() * 0.2;
    }

    function calculateCartATITotal() {
        return calculateCartETTotal() + calculateCartVATTotal();
    }

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Résumé de la commande
            </Typography>
            <List disablePadding>
                {products.map((product) => (
                    <ListItem key={product.label} sx={{ py: 1, px: 0 }}>
                        <ListItemText
                            primary={product.label}
                            secondary={product.description}
                        />
                        <Grid>
                            <Typography variant="body2">
                                {product.price * 1.2} €
                            </Typography>
                            <Typography variant="body2">
                                {product.quantity}
                            </Typography>
                        </Grid>
                    </ListItem>
                ))}
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        {calculateCartATITotal()} €
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Adresse de livraison
                    </Typography>
                    <Typography gutterBottom>
                        {checkout.shippingAddress.firstName}{' '}
                        {checkout.shippingAddress.lastName}
                    </Typography>
                    <Typography gutterBottom>
                        {checkout.shippingAddress.street}{' '}
                        {checkout.shippingAddress.zipCode}{' '}
                        {checkout.shippingAddress.city}
                    </Typography>
                    <Typography gutterBottom>
                        {checkout.shippingAddress.furtherInformation}{' '}
                    </Typography>
                    <Typography gutterBottom>
                        {checkout.shippingAddress.state}{' '}
                        {checkout.shippingAddress.country}
                    </Typography>
                    <Typography gutterBottom>
                        {checkout.shippingAddress.phone}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Adresse de facturation
                    </Typography>
                    <Typography gutterBottom>
                        {checkout.billingAddress.firstName}{' '}
                        {checkout.billingAddress.lastName}
                    </Typography>
                    <Typography gutterBottom>
                        {checkout.billingAddress.street}{' '}
                        {checkout.billingAddress.zipCode}{' '}
                        {checkout.billingAddress.city}
                    </Typography>
                    <Typography gutterBottom>
                        {checkout.billingAddress.furtherInformation}{' '}
                    </Typography>
                    <Typography gutterBottom>
                        {checkout.billingAddress.state}{' '}
                        {checkout.billingAddress.country}
                    </Typography>
                    <Typography gutterBottom>
                        {checkout.billingAddress.phone}
                    </Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Méthode de paiement
                    </Typography>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography gutterBottom>
                                {checkout.payment.fullName}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>
                                {checkout.payment.cardNumber}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>
                                {checkout.payment.expirationDate}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom>
                                {checkout.payment.cvv}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Review;
