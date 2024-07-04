
import { Box, Button, Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { getEachOneProduct, getEachProductId } from '../../redux/auth/product/ProductAction';

const EachProdouctDetiles = () => {
    const { productId } = useParams();
    const navigate = useNavigate();

    const productStateData = useSelector((state) => state.product);
    const { eachoneproduct } = productStateData;

    const dispatch = useDispatch();




    const Truncate = (string, number) => {
        if (!string) return null;
        if (string.length <= number) return string;
        return string.slice(0, number) + "...";
    };

    const handleOnClick = (product) => {
        // Navigate to the specific product page
        const products = eachoneproduct.id;
        navigate(`/shop/multipleproduct/${products}`);
    }

    useEffect(() => {
        dispatch(getEachOneProduct(productId));
    }, [dispatch, productId]);




    return (
        <div>
            <IconButton onClick={() => navigate(-1)}>
                <ArrowBackIcon />
            </IconButton>

            <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 2,
                    }}
                >
                    <CardMedia
                        component="img"
                        sx={{
                            height: 'auto',
                            width: '25%',
                            objectFit: 'cover',
                            padding: '8px',
                            textAlign: 'center',
                            justifyContent: 'center',
                        }}
                        src={`http://localhost:3000/${eachoneproduct?.image}`}
                        alt={eachoneproduct?.productName}
                    />

                    <CardContent>
                        <Typography variant="subtitle1" sx={{ color: 'blue' }}>
                            {eachoneproduct?.productName}
                        </Typography>
                        <Typography variant="body2" align="justify">
                            {Truncate(eachoneproduct?.description, 70)}
                        </Typography>

                        <Typography variant='subtitle1' sx={{ color: `${eachoneproduct?.color}`, fontWeight: 'bold' }}>
                            {eachoneproduct?.color}
                        </Typography>
                        <Typography>
                            {eachoneproduct?.category}
                        </Typography>

                        <Typography>
                            {eachoneproduct?.rating}
                        </Typography>
                        {/* <StarRatings
                            rating={Number(eachoneproduct?.rating)}
                            starDimension="16px"
                            starSpacing="1px"
                            starRatedColor="black"
                        /> */}
                        <Typography>
                            <span>Stock: {eachoneproduct?.minQuantity} - {eachoneproduct?.maxQuantity}</span>
                        </Typography>

                        <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                            Buying Price   ₹ {eachoneproduct?.buyingPrice}
                        </Typography>
                        <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
                            Selling Price   ₹ {eachoneproduct?.sellingPrice}
                        </Typography>
                    </CardContent>

                    <Box sx={{ mt: 2, mb: 2, textAlign: "center" }}>
                        <Button variant='contained' onClick={handleOnClick} sx={{ width: "100%", borderRadius: "15px" }}>
                            Add Multiple Products
                        </Button>
                    </Box>
                </Card>
            </Grid>
        </div>
    );
}

export default EachProdouctDetiles;

