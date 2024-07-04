import {
    Box,
    Button,
    Card,
    Container,
    Divider,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

Yup.addMethod(Yup.string, 'conditional', function (field, schema) {
    return this.test('conditional', '${path} is required', function (value) {
        const { payment } = this.parent;
        return payment !== field || schema.isValidSync(value);
    });
});

const PaymentDetails = () => {
    const navigate = useNavigate();

    const totalPrice = 1500; // Example total price, replace with actual logic
    const discount = 100; // Example discount, replace with actual logic

    const validationSchema = Yup.object({
        payment: Yup.string().required('Payment type is required'),
        paytmNumber: Yup.string().conditional('paytm', Yup.string().required('Paytm Number is required')),
        cardNumber: Yup.string().conditional('debit', Yup.string().required('Card Number is required')),
        cardHolderName: Yup.string().conditional('debit', Yup.string().required('Card Holder Name is required')),
        expiryDate: Yup.string().conditional('debit', Yup.string().required('Expiry Date is required')),
        cvv: Yup.string().conditional('debit', Yup.string().required('CVV is required')),
        upiId: Yup.string().conditional('upi', Yup.string().required('UPI ID is required')),
    });

    const formik = useFormik({
        initialValues: {
            payment: '',
            paytmNumber: '',
            cardNumber: '',
            cardHolderName: '',
            expiryDate: '',
            cvv: '',
            upiId: '',
            offerCode: '',
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
            // Add your submission logic here
            navigate("/orderconform");
        },
    });

    const calculateTotalAmount = () => {
        const shipping = 50;
        const codCharge = formik.values.payment === 'delivery' ? 50 : 0;
        return totalPrice - discount + shipping + codCharge;
    };

    return (
        <Container sx={{ mt: 10 }}>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ p: 2 }}>
                            <Stack direction={"column"} spacing={2}>
                                <FormControl>
                                    <FormLabel id="payment-method-label">Payment Types</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="payment-method-label"
                                        name="payment"
                                        value={formik.values.payment}
                                        onChange={formik.handleChange}
                                    >
                                        <FormControlLabel value="paytm" control={<Radio />} label="Paytm" />
                                        <FormControlLabel value="debit" control={<Radio />} label="Debit/Credit card" />
                                        <FormControlLabel value="upi" control={<Radio />} label="UPI" />
                                        <FormControlLabel value="delivery" control={<Radio />} label="Cash on Delivery" />
                                    </RadioGroup>
                                    {formik.touched.payment && formik.errors.payment && (
                                        <Typography color="error">{formik.errors.payment}</Typography>
                                    )}
                                </FormControl>
                            </Stack>
                            <Box>
                                {formik.values.payment === 'paytm' && (
                                    <Box>
                                        <TextField
                                            label="Paytm Number"
                                            fullWidth
                                            {...formik.getFieldProps('paytmNumber')}
                                            error={formik.touched.paytmNumber && Boolean(formik.errors.paytmNumber)}
                                            helperText={formik.touched.paytmNumber && formik.errors.paytmNumber}
                                        />
                                    </Box>
                                )}
                                {formik.values.payment === 'debit' && (
                                    <Box>
                                        <Stack direction={"column"} spacing={2}>
                                            <TextField
                                                label="Card Number"
                                                fullWidth
                                                {...formik.getFieldProps('cardNumber')}
                                                error={formik.touched.cardNumber && Boolean(formik.errors.cardNumber)}
                                                helperText={formik.touched.cardNumber && formik.errors.cardNumber}
                                            />
                                            <TextField
                                                label="Card Holder Name"
                                                fullWidth
                                                {...formik.getFieldProps('cardHolderName')}
                                                error={formik.touched.cardHolderName && Boolean(formik.errors.cardHolderName)}
                                                helperText={formik.touched.cardHolderName && formik.errors.cardHolderName}
                                            />
                                            <TextField
                                                label="Expiry Date"
                                                fullWidth
                                                {...formik.getFieldProps('expiryDate')}
                                                error={formik.touched.expiryDate && Boolean(formik.errors.expiryDate)}
                                                helperText={formik.touched.expiryDate && formik.errors.expiryDate}
                                            />
                                            <TextField
                                                label="CVV"
                                                fullWidth
                                                {...formik.getFieldProps('cvv')}
                                                error={formik.touched.cvv && Boolean(formik.errors.cvv)}
                                                helperText={formik.touched.cvv && formik.errors.cvv}
                                            />
                                        </Stack>
                                    </Box>
                                )}
                                {formik.values.payment === 'upi' && (
                                    <Box>
                                        <TextField
                                            label="UPI ID"
                                            fullWidth
                                            {...formik.getFieldProps('upiId')}
                                            error={formik.touched.upiId && Boolean(formik.errors.upiId)}
                                            helperText={formik.touched.upiId && formik.errors.upiId}
                                        />
                                    </Box>
                                )}
                            </Box>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ p: 1 }}>
                            <Stack direction="column" spacing={1}>
                                <Typography>Offer Details</Typography>
                                <TextField
                                    size='small'
                                    label="Enter code"
                                    {...formik.getFieldProps('offerCode')}
                                />
                                <Divider sx={{ mt: 1 }} />
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography>Flat ₹100 off on Order above ₹999</Typography>
                                    <Typography variant='subtitle1'>#1234</Typography>
                                </Stack>
                                <Divider sx={{ mb: 1 }} />
                            </Stack>
                        </Card>
                        <Card sx={{ p: 2, mt: 1 }}>
                            <Typography variant='subtitle1' sx={{ fontWeight: "bold" }}>PRICE DETAILS</Typography>
                            <Divider sx={{ mt: 1, mb: 1 }} />
                            <Stack direction="column" spacing={1}>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography>Total MRP (Inc. of Taxes)</Typography>
                                    <Typography>{totalPrice}</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography>Shop Discount</Typography>
                                    <Typography>{discount}</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography>Shipping</Typography>
                                    <Typography>50</Typography>
                                </Stack>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography>Cart Total</Typography>
                                    <Typography>{totalPrice - discount + 50}</Typography>
                                </Stack>
                                <Divider sx={{ mt: 1, mb: 1 }} />
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant='subtitle1' fontWeight="bold">Total Amount</Typography>
                                    <Typography variant='subtitle1' fontWeight="bold">{calculateTotalAmount()}</Typography>
                                </Stack>
                            </Stack>
                        </Card>
                        <Box sx={{ mt: 2, mb: 2, textAlign: "center" }}>
                            <Button type="submit" variant='contained' sx={{ width: "250px", borderRadius: "15px" }}>Pay Now</Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default PaymentDetails;
