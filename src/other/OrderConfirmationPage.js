// src/OrderConfirmationPage.js
import React from 'react';
import { Container, Box, Typography, Button, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Confetti from 'react-confetti';
import useConfetti from './useConfetti';



const OrderConfirmationPage = () => {
    const { width, height, showConfetti } = useConfetti();

    return (
        <Container maxWidth="sm">
            {showConfetti && <Confetti width={width} height={height} />}
            <Paper elevation={3} sx={{ padding: 4, marginTop: 4 }}>
                <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
                    <CheckCircleIcon sx={{ fontSize: 100, color: 'green' }} />
                    <Typography variant="h4" gutterBottom>
                        Order Placed Successfully!
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Thank you for your purchase. Your order number is #123456. You will receive a confirmation email shortly.
                    </Typography>
                    <Button variant="contained" color="primary" href="/">
                        Continue Shopping
                    </Button>
                </Box>
            </Paper>
        </Container>
    );
};

export default OrderConfirmationPage;
