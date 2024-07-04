import React, { useEffect, useState } from 'react';
import { Box, Button, Card, Container, Divider, Grid, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddCartPrice = () => {
    const [products, setProducts] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [offerCode, setOfferCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const navigate = useNavigate();

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/products');
            setProducts(response.data);
            const initialQuantities = {};
            response.data.forEach(product => {
                initialQuantities[product.id] = 1;
            });
            setQuantities(initialQuantities);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleQuantityChange = (productId, delta) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [productId]: Math.max(1, prevQuantities[productId] + delta)
        }));
    };

    const calculateDiscount = (subtotal) => {
        if (subtotal > 999 && offerCode === '1234') {
            return 100; // Flat ₹100 off on Order above ₹999
        }
        return 0;
    };

    useEffect(() => {
        const subtotal = products.reduce((total, product) => {
            return total + product.price * (quantities[product.id] || 1);
        }, 0);

        const discountAmount = calculateDiscount(subtotal);
        setDiscount(discountAmount);

        const finalTotalPrice = subtotal - discountAmount + 50; // Assuming 50 is the shipping cost
        setTotalPrice(finalTotalPrice);
    }, [products, quantities, offerCode]);

    const handleSubmit = () => {
        const cartDetails = products.map(product => ({
            id: product.id,
            name: product.name,
            quantity: quantities[product.id],
            price: product.price * quantities[product.id]
        }));
        console.log('Cart details:', cartDetails);
        console.log('Total price after discount:', totalPrice);
        console.log('Applied offer code:', offerCode);
        // Submit cartDetails, totalPrice, and offerCode to your API or process as needed
        navigate({
            pathname: '/addadress',
            state: { cartDetails, totalPrice, offerCode }
        })
    };

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} >
                    {Array.isArray(products) && products.length > 0 && products.map((products, index) => (
                        <Box key={index} sx={{ p: 2 }}>
                            <Card sx={{ p: 2 }}>
                                <Stack direction="row" spacing={2}>
                                    <Box>
                                        <img src={`http://localhost:3000/${products.imageUrl}`} height={150} width={150} alt="Product" />
                                    </Box>
                                    <Box>
                                        <Stack direction="column" spacing={1}>
                                            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>{products.name}</Typography>
                                            <Typography variant='subtitle1'><span style={{ fontWeight: 'bold' }}>Price: </span>${products.price}</Typography>
                                            <Typography><span style={{ fontWeight: 'bold' }}>Savings: </span>{products.savings || 'N/A'}</Typography>
                                            <Divider sx={{ width: '100%' }} />
                                            <Stack direction="row" spacing={2}>
                                                <Typography><span style={{ fontWeight: 'bold' }}>Color: </span>{products.color || 'N/A'}</Typography>
                                                <Typography><span style={{ fontWeight: 'bold' }}>Size: </span>{products.size || 'N/A'}</Typography>
                                            </Stack>
                                            <Stack direction="row" spacing={2} alignItems="center">
                                                <Button variant="outlined" onClick={() => handleQuantityChange(products.id, -1)}>-</Button>
                                                <Typography>{quantities[products.id]}</Typography>
                                                <Button variant="outlined" onClick={() => handleQuantityChange(products.id, 1)}>+</Button>
                                            </Stack>

                                            <Stack direction="row" spacing={2} alignItems="center">
                                                <Button>
                                                    Remove
                                                </Button>

                                                <Button>
                                                    Watch List
                                                </Button>
                                            </Stack>
                                        </Stack>
                                    </Box>
                                </Stack>
                            </Card>
                        </Box>
                    ))}

                </Grid>


                <Grid item xs={12} md={6}>
                    <Card sx={{ p: 1 }}>
                        <Stack direction="column" spacing={1}>
                            <Typography>Offer Details</Typography>
                            <TextField
                                size='small'
                                label="Enter code"
                                value={offerCode}
                                onChange={(e) => setOfferCode(e.target.value)}
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
                        <Typography variant='subtitle1' sx={{ fontWeight: "bold" }}>PRICE DETAILS ({products.length} items)</Typography>
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
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ width: "250px", borderRadius: "15px" }}
                            onClick={handleSubmit}
                        >
                            Checkout
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container >
    );
};

export default AddCartPrice;
