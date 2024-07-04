import React, { useEffect, useState } from 'react';
import {
    CardActionArea,
    CardMedia,
    Typography,
    Grid,
    Container,
    Button,
    Radio,
    RadioGroup,
    FormControlLabel,
    Stack,
    CircularProgress,
    Box,
    Breadcrumbs
} from '@mui/material';
import StarRatings from 'react-star-ratings';
import CustomAutoCloseDialog from '../../utiles/dialogue/AddCartDialogue';
import { useDispatch, useSelector } from 'react-redux';
import { getSubColorandSizeProduct } from '../../redux/auth/product/ProductAction';
import { Link, useLocation } from 'react-router-dom';

const EachProductList = () => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [selectedSize, setSelectedSize] = useState('S'); // Default to 'S'
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    const stateData = useSelector((state) => state.product);
    const { getcolorsize, loading } = stateData;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSubColorandSizeProduct(1));
    }, [dispatch]);

    useEffect(() => {
        // Set default selected image when getcolorsize changes
        if (getcolorsize && getcolorsize.images && typeof getcolorsize.images === 'string') {
            const imagesArray = JSON.parse(getcolorsize.images);
            if (imagesArray.length > 0) {
                setSelectedImage(imagesArray[0]); // Default to the first image
            }
        }
    }, [getcolorsize]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleThumbnailClick = (image) => {
        setSelectedImage(image);
    };

    const handleSizeChange = (event) => {
        setSelectedSize(event.target.value);
    };

    const handleAddToCart = () => {
        console.log("Product details:", getcolorsize);
        console.log("Selected size:", selectedSize);
        setOpen(true);
    };

    const handleBuyNow = () => {
        setOpen(true);
    };

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (!getcolorsize) {
        return <Typography>Product not found</Typography>;
    }

    return (
        <Container sx={{ mt: 10 }}>

            <Box sx={{ mt: 2, mb: 4 }}>
                <Breadcrumbs
                    aria-label="breadcrumb"
                    separator={<Typography color="text.secondary" sx={{ mx: 0.5 }}>/</Typography>}
                    sx={{ fontSize: '1rem', color: 'text.primary' }}
                >
                    <Link color="inherit" to="/" sx={{ textDecoration: 'none', ':hover': { textDecoration: 'underline' } }}>
                        Home
                    </Link>
                    {pathnames.map((path, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                        return index === pathnames.length - 1 ? (
                            <Typography key={to} color="text.primary">
                                {path}
                            </Typography>
                        ) : (
                            <Link
                                key={to}
                                color="inherit"
                                to={to}
                                sx={{ textDecoration: 'none', ':hover': { textDecoration: 'underline' } }}
                            >
                                {path}
                            </Link>
                        );
                    })}
                </Breadcrumbs>
            </Box>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Stack direction="row" spacing={1} sx={{ p: 2 }}>
                        <Stack direction="column">
                            {getcolorsize?.images && typeof getcolorsize.images === 'string' ? (
                                JSON.parse(getcolorsize.images).map((image, index) => (
                                    <Grid item key={index}>
                                        <CardActionArea onClick={() => handleThumbnailClick(image)}>
                                            <CardMedia
                                                component="img"
                                                image={`http://localhost:3000/${image}`}
                                                alt={`${getcolorsize?.title} image ${index}`}
                                                sx={{ width: 100, height: 100, cursor: 'pointer' }}
                                            />
                                        </CardActionArea>
                                    </Grid>
                                ))
                            ) : (
                                <Typography variant="body2" color="textSecondary">
                                    No images available
                                </Typography>
                            )}
                        </Stack>

                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={`http://localhost:3000/${selectedImage}`}
                                alt={getcolorsize.title}
                            />
                        </CardActionArea>
                    </Stack>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Stack direction="column" spacing={1}>
                        <Typography variant="h5" component="h2" sx={{ fontWeight: "bold" }}>
                            {getcolorsize.subproductName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {getcolorsize.description}
                        </Typography>
                        <Typography variant="h6" color="text.primary">
                            ${getcolorsize.price}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {getcolorsize && getcolorsize.rating !== undefined && (
                                <StarRatings
                                    rating={parseFloat(getcolorsize.rating)}
                                    starDimension="16px"
                                    starSpacing="1px"
                                    starRatedColor="black"
                                />
                            )}
                            ({getcolorsize.rating} reviews)
                        </Typography>

                        <Typography variant='subtitle2' sx={{ fontWeight: "bold" }}>Sizes</Typography>
                        <RadioGroup value={selectedSize} onChange={handleSizeChange}>
                            <Stack direction="row" spacing={2}>
                                {['S', 'M', 'L', 'XL', 'XXL'].map((size, index) => (
                                    <FormControlLabel
                                        key={index}
                                        value={size}
                                        control={<Radio />}
                                        label={size}
                                    />
                                ))}
                            </Stack>
                        </RadioGroup>

                        <Stack direction="row" spacing={2} sx={{ p: 2 }}>
                            <Button
                                variant="contained"
                                sx={{ width: "250px", borderRadius: "15px" }}
                                onClick={handleAddToCart}
                            >
                                Add to Cart
                            </Button>
                            <Button
                                variant="contained"
                                sx={{ width: "250px", borderRadius: "15px" }}
                                onClick={handleBuyNow}
                            >
                                Buy Now
                            </Button>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
            <Grid sx={{ mt: 2, mb: 2 }}>
                <Typography variant='subtitle1' fontWeight={"bold"} sx={{ mb: 1 }}>reviews</Typography>
                <Typography>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                </Typography>
            </Grid>
            <CustomAutoCloseDialog open={open} onClose={handleClose} />
        </Container>
    );
};

export default EachProductList;
