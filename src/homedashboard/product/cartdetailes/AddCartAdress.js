

// AddCartAddress.js
import React from 'react';
import { Box, Button, Card, Container, Divider, Grid, Stack, TextField, Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const schema = yup.object().shape({
    firstName: yup.string().required('First Name is required'),
    lastName: yup.string().required('Last Name is required'),
    mobileNumber: yup.string().required('Mobile Number is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    address: yup.string().required('Address is required'),
    currentAddress: yup.string().required('Current Address is required'),
});

const AddCartAddress = ({ onAddressSubmit }) => {

    const navigate = useNavigate();


    const location = useLocation();

    const [discount, setDiscount] = useState(0);


    const { cartDetails, totalPrice, offerCode } = location.state || {};

    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data) => {
        if (onAddressSubmit) {
            onAddressSubmit(data);
        }
        console.log(data)

        navigate({
            pathname: '/paymentdetiles',
            state: { cartDetails, totalPrice, offerCode }
        })
    };

    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} >
                        <Card sx={{ p: 2 }}>
                            <Stack direction="column" spacing={2}>
                                <Controller
                                    name="firstName"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <TextField {...field} size='small' label='First Name' error={!!errors.firstName} helperText={errors.firstName?.message} />}
                                />
                                <Controller
                                    name="lastName"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <TextField {...field} size='small' label='Last Name' error={!!errors.lastName} helperText={errors.lastName?.message} />}
                                />
                                <Controller
                                    name="mobileNumber"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <TextField {...field} size='small' label='Mobile Number' error={!!errors.mobileNumber} helperText={errors.mobileNumber?.message} />}
                                />
                                <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <TextField {...field} size='small' label='Email' error={!!errors.email} helperText={errors.email?.message} />}
                                />
                                <Controller
                                    name="address"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <TextField {...field} label='Address' error={!!errors.address} helperText={errors.address?.message} />}
                                />
                                <Controller
                                    name="currentAddress"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => <TextField {...field} label='Current Address' error={!!errors.currentAddress} helperText={errors.currentAddress?.message} />}
                                />
                            </Stack>
                        </Card>
                    </Grid>



                    <Grid item xs={12} md={6}>
                        <Card sx={{ p: 1 }}>
                            <Stack direction="column" spacing={1}>
                                <Typography>Offer Details</Typography>
                                <TextField
                                    size='small'
                                    label="Enter code"
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
                                    <Typography>{totalPrice}</Typography>
                                </Stack>
                                <Divider sx={{ mt: 1, mb: 1 }} />
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography variant='subtitle1' fontWeight="bold">Total Amount</Typography>
                                    <Typography variant='subtitle1' fontWeight="bold">{totalPrice}</Typography>
                                </Stack>
                            </Stack>
                        </Card>

                        <Box sx={{ mt: 2, mb: 2, textAlign: "center" }}>
                            <Button type="submit" variant='contained' sx={{ width: "250px", borderRadius: "15px" }}> Contune Payment </Button>
                        </Box>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default AddCartAddress;




