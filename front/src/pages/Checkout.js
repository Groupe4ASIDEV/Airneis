import { useContext, useEffect, useState } from 'react';
import { UidContext } from '../components/Authentication/UserContext';
import { useNavigate } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddressForm from '../components/Checkout/AddressForm';
import PaymentForm from '../components/Checkout/PaymentForm';
import CreateOrder from '../components/Checkout/Review';
import { useCheckoutStore, useCartStore } from '../store';
import axios from 'axios';
import { calculateCartATITotal, calculateCartVATTotal } from '../utils/calculs';
import { CircularProgress } from '@mui/material';

const baseUrl = process.env.REACT_APP_API_URL;

function Checkout() {
    const navigate = useNavigate();
    const { isAuth, userData } = useContext(UidContext);
    const { cart, clearCart } = useCartStore();
    const [activeStep, setActiveStep] = useState(0);
    const [isRefreshing, setIsRefreshing] = useState(true);
    const [orderId, setOrderId] = useState();
    const { checkout } = useCheckoutStore();
    const steps = checkout.saveAddress
        ? ['Livraison', 'Paiement', 'Commande']
        : ['Livraison', 'Facturation', 'Paiement', 'Commande'];

    let buttonValue;

    function getStepContent(step) {
        if (!checkout.saveAddress) {
            switch (step) {
                case 0:
                    buttonValue = 'Passer à la facturation';
                    return <AddressForm step={step} />;
                case 1:
                    buttonValue = 'Passer au paiement';
                    return <AddressForm step={step} />;
                case 2:
                    buttonValue = 'Vérifier la commande';
                    return <PaymentForm />;
                case 3:
                    buttonValue = 'Commander';
                    return <CreateOrder />;
                default:
                    throw new Error('Unknown step');
            }
        } else {
            switch (step) {
                case 0:
                    buttonValue = 'Passer au paiement';
                    return <AddressForm step={step} />;
                case 1:
                    buttonValue = 'Vérifier la commande';
                    return <PaymentForm />;
                case 2:
                    buttonValue = 'Commander';
                    return <CreateOrder />;
                default:
                    throw new Error('Unknown step');
            }
        }
    }

    useEffect(() => {
        setIsRefreshing(false);
    }, [activeStep, orderId]);

    useEffect(() => {
        if (!isAuth && !isRefreshing) {
            navigate('/auth');
        }
        if ((!cart || cart.length === 0) && !isRefreshing) {
            navigate('/');
        }
    }, [isAuth, cart, isRefreshing, navigate]);

    const createOrder = async () => {
        const cartData = localStorage.getItem('cart');
        const parsedData = JSON.parse(cartData);
        const items = parsedData.state.cart;

        try {
            const response = await axios.post(`${baseUrl}/order/create`, {
                user: userData._id,
                shippingAddress: {
                    fullName: `${checkout.shippingAddress.firstName} ${checkout.shippingAddress.lastName}`,
                    street: checkout.shippingAddress.street,
                    city: checkout.shippingAddress.city,
                    zipCode: checkout.shippingAddress.zipCode,
                    state: checkout.shippingAddress.state,
                    country: checkout.shippingAddress.country,
                    phone: checkout.shippingAddress.phone,
                    furtherInformation:
                        checkout.shippingAddress.furtherInformation,
                },
                billingAddress: {
                    fullName: `${checkout.billingAddress.firstName} ${checkout.billingAddress.lastName}`,
                    street: checkout.billingAddress.street,
                    city: checkout.billingAddress.city,
                    zipCode: checkout.billingAddress.zipCode,
                    state: checkout.billingAddress.state,
                    country: checkout.billingAddress.country,
                    phone: checkout.billingAddress.phone,
                    furtherInformation:
                        checkout.billingAddress.furtherInformation,
                },
                items: items.map((item) => ({
                    productId: item._id,
                    label: item.label,
                    description: item.description,
                    price: item.price,
                    quantity: item.quantity,
                    pictures: item.pictures,
                })),
                total: calculateCartATITotal(items),
                vat: calculateCartVATTotal(items),
            });

            setOrderId(response.data.data._id);

            return response.data;
        } catch (error) {
            console.error('Error creating order');
            throw error;
        }
    };

    const handleNext = async () => {
        const addressData =
            activeStep === 0
                ? checkout.shippingAddress
                : checkout.billingAddress;
        const { firstName, lastName, street, city, zipCode, country, phone } =
            addressData;
        if (
            addressData !== undefined &&
            firstName &&
            lastName &&
            street &&
            city &&
            zipCode &&
            country &&
            phone
        ) {
            setActiveStep(activeStep + 1);
        } else {
            alert('Veuillez renseigner tous les champs obligatoires');
        }

        if (buttonValue === 'Commander') {
            await createOrder();
            clearCart();
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <>
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper
                    variant="outlined"
                    sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
                >
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && !orderId ? (
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <CircularProgress />
                        </Box>
                    ) : activeStep === steps.length ? (
                        <>
                            <Typography variant="h5" gutterBottom>
                                Commande effectuée
                            </Typography>
                            <Typography variant="subtitle1">
                                Merci pour votre achat !
                            </Typography>
                            <Typography variant="subtitle1">
                                Votre commande a bien été enregistrée sous le
                                numéro {orderId.slice(0, 7)}. Vous pouvez suivre
                                son état depuis votre espace client.
                            </Typography>
                        </>
                    ) : (
                        <>
                            {getStepContent(activeStep)}
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                {activeStep !== 0 && (
                                    <Button
                                        variant="contained"
                                        onClick={handleBack}
                                        sx={{ mt: 3, ml: 1 }}
                                    >
                                        Retour
                                    </Button>
                                )}

                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{ mt: 3, ml: 1 }}
                                >
                                    {buttonValue}
                                </Button>
                            </Box>
                        </>
                    )}
                </Paper>
            </Container>
        </>
    );
}

export default Checkout;
