// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { Box, Button, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';

// import StarRatings from 'react-star-ratings';
// import { useNavigate } from 'react-router-dom';
// import { getALLProduct } from '../../redux/auth/product/ProductAction';
// import { useState } from 'react';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// const ProductList = () => {
//     const productStateData = useSelector((state) => state.product);
//     const { getproduct } = productStateData;



//     const [hoveredCard, setHoveredCard] = useState(null)




// const handlewatchList = (id) => {
//     navigate(`/watchlist/${id}`);
// }

//     console.log("productlist", getproduct);

//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getALLProduct());
//     }, [dispatch]);

//     const navigate = useNavigate();

//     const handleCardClick = (id) => {
//         navigate(`/subproduct/${id}`);
//     };

//     const Truncate = (string, number) => {
//         if (!string) {
//             return null;
//         }
//         if (string.length <= number) {
//             return string;
//         }
//         return string.slice(0, number) + "...";
//     };



//     return (
//         <Container>
//             <Grid container spacing={2} sx={{ mb: 2 }}>
//                 {Array.isArray(getproduct) && getproduct.length > 0 && getproduct.map((item, index) => (
//                     <Grid item xs={6} sm={6} md={4} lg={3} key={index}>

//                         <Card
//                             sx={{
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                                 height: '100%',
//                                 justifyContent: 'space-around',
//                                 alignItems: 'center',
//                                 padding: 2,
//                                 boxShadow: 'none',
//                                 transition: 'box-shadow 0.3s, transform 0.3s',
//                                 '&:hover': {
//                                     boxShadow: 3,
//                                     transform: 'scale(1.05)',
//                                 },
//                                 cursor: 'pointer',
//                             }}
//                             onMouseEnter={() => setHoveredCard(item.id)}
//                             onMouseLeave={() => setHoveredCard(null)}
//                         >
//                             <CardMedia
//                                 component="img"
//                                 sx={{
//                                     height: 'auto',
//                                     width: {
//                                         xs: '100%',   // Full width on extra-small screens
//                                         sm: '100%',   // Full width on small screens
//                                         md: '100%',   // Full width on medium screens
//                                         lg: '100%',   // Full width on large screens
//                                         xl: '100%'    // Full width on extra-large screens
//                                     },
//                                     objectFit: 'cover',
//                                     padding: '8px',
//                                     transition: 'transform 0.3s ease-in-out',
//                                     '&:hover': {
//                                         transform: 'scale(1.1)',
//                                     },
//                                 }}
//                                 onClick={() => handleCardClick(item.id)}
//                                 src={`http://localhost:3000/${item.image}`}
//                             />

//                             <CardContent>

//                                 <Typography variant="subtitle1" sx={{ color: "blue" }}>
//                                     {item.productName.length >= 50 ? Truncate(item.productName, 50) : item.productName}
//                                 </Typography>
//                                 <Typography variant="body2" align="justify">
//                                     {Truncate(item.DESCRIPTION, 70)}
//                                 </Typography>
//                                 <Typography variant="subtitle1" sx={{ color: "blue", fontWeight: "bold" }}>
//                                     ₹ {item.sellingPrice}
//                                 </Typography>
//                                 {hoveredCard === item.id ? (
//                                     <div style={{
//                                         position: 'absolute',
//                                         bottom: '10px',
//                                         left: '50%',
//                                         transform: 'translateX(-50%)',
//                                         textAlign: 'center',
//                                         width: '100%'
//                                     }}>

//                                         <Button variant="outlined" style={{ margin: '3px', width: "200px", borderRadius: "16px" }} size='small' onClick={() => handleCardClick(item.id)}>
//                                             <FavoriteBorderIcon fontSize='25px' />
//                                             &nbsp;   More Items</Button>
//                                     </div>
//                                 ) : (

//                                     <Box>
//                                         <StarRatings
//                                             rating={Number(item.rating)}
//                                             starDimension="16px"
//                                             starSpacing="1px"
//                                             starRatedColor="black"
//                                         />
//                                         <Typography>
//                                             <span>Stock : {item.minQuantity} </span>
//                                         </Typography>
//                                     </Box>

//                                 )}
//                             </CardContent>
//                         </Card>

//                     </Grid>
//                 ))}
//             </Grid>
//         </Container>
//     );
// };

// export default ProductList;


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Breadcrumbs, Button, Card, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarRatings from 'react-star-ratings';
import { getALLProduct } from '../../redux/auth/product/ProductAction';
import CarouselFadeExample from '../ControlledCarousel';

const ProductList = () => {
    const productStateData = useSelector((state) => state.product);
    const { getproduct } = productStateData;
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    const [hoveredCard, setHoveredCard] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Check if screen size is small (<= 600px width)



    useEffect(() => {
        dispatch(getALLProduct());
    }, [dispatch]);

    const handleCardClick = (id) => {
        navigate(`/subproduct/${id}`);
    };

    const Truncate = (string, number) => {
        if (!string) {
            return null;
        }
        if (string.length <= number) {
            return string;
        }
        return string.slice(0, number) + "...";
    };

    return (
        <>
            <Box sx={{ mb: 2 }}>
                <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6fdd5764807493.5adebf59a1000.jpg' height={"200px"} width={"100%"} />
            </Box>
            <Container>
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
                <Grid container spacing={isSmallScreen ? 1 : 2} >
                    {Array.isArray(getproduct) && getproduct.length > 0 && getproduct.map((item, index) => (
                        // <Grid item xs={6} sm={6} md={4} lg={3} key={index} sx={{ mb: 2 }}>
                        //     <Card
                        //         sx={{
                        //             display: 'flex',
                        //             flexDirection: 'column',
                        //             justifyContent: 'space-around',
                        //             padding: 1,
                        //             boxShadow: 'none',
                        //             cursor: 'pointer',
                        //             position: 'relative',
                        //             overflow: 'hidden',
                        //             height: '100%',
                        //             '&:hover .overlay': {
                        //                 opacity: 1,
                        //             },
                        //             '&:hover .content': {
                        //                 opacity: 0,
                        //             }
                        //         }}
                        //         onMouseEnter={() => setHoveredCard(item.id)}
                        //         onMouseLeave={() => setHoveredCard(null)}
                        //     >
                        //         <img class="rounded-md" src={`http://localhost:3000/${item.image}`} alt="" style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'cover' }} />
                        //         <Typography variant="subtitle1" sx={{ color: "blue", mt: 1 }}>
                        //             {item.productName.length >= 50 ? Truncate(item.productName, 50) : item.productName}
                        //         </Typography>
                        //         <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
                        //             ₹ {item.sellingPrice}
                        //         </Typography>

                        //         {/* {!isSmallScreen && ( */}
                        //         <Box className="content" sx={{ textAlign: 'left', transition: 'opacity 0.3s ease-in-out' }}>
                        //             <StarRatings
                        //                 rating={Number(item.rating)}
                        //                 starDimension="16px"
                        //                 starSpacing="1px"
                        //                 starRatedColor="black"
                        //             />
                        //             <Typography>  <span>Stock : {item.minQuantity} </span></Typography>
                        //         </Box>
                        //         {/* )} */}

                        //         <Box
                        //             className="overlay"
                        //             sx={{
                        //                 position: 'absolute',
                        //                 bottom: 0,
                        //                 left: 0,
                        //                 right: 0,
                        //                 textAlign: 'center',
                        //                 backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        //                 padding: '10px',
                        //                 opacity: 0,
                        //                 transition: 'opacity 0.3s ease-in-out'

                        //             }}
                        //         >
                        //             <Button
                        //                 variant="outlined"
                        //                 style={{
                        //                     margin: '3px',
                        //                     width: { xs: '200px', sm: '100%' },
                        //                     borderRadius: "16px", color: 'white', borderColor: 'white'
                        //                 }}
                        //                 size='small'
                        //                 onClick={() => handleCardClick(item.id)}
                        //             >
                        //                 <FavoriteBorderIcon fontSize='small' />
                        //                 &nbsp; More Items
                        //             </Button>
                        //         </Box>
                        //     </Card>
                        // </Grid>


                        <Grid item xs={6} sm={6} md={4} lg={3} key={index} sx={{ mb: 2 }}>

                            <div className="block2" key={index}>

                                <div className="block2-pic hov-img0">
                                    <img src={`http://localhost:3000/${item.image}`} alt="IMG-PRODUCT" style={{ height: "300px" }} />
                                    <a href="" onClick={() => handleCardClick(item.id)} className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                        View More
                                    </a>
                                </div>
                                {/* <Card sx={{ p: 1 }}> */}
                                <div className="block2-txt flex-w flex-t p-t-14">
                                    <div className="block2-txt-child1 flex-col-l ">
                                        <a href="" onClick={() => handleCardClick(item.id)} className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                            {item.productName.length >= 50 ? Truncate(item.productName, 50) : item.productName}
                                        </a>

                                        <a className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                            {item.DESCRIPTION.length >= 50 ? Truncate(item.DESCRIPTION, 50) : item.DESCRIPTION}
                                            {/* {image?.DESCRIPTION} */}
                                        </a>
                                        <span className="stext-105 cl3">
                                            Rs  ₹ {item.sellingPrice} &nbsp;  <span>Stock : {item.minQuantity} </span>
                                        </span>
                                    </div>
                                    <div className="block2-txt-child2 flex-r p-t-3">
                                        <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                            <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
                                            <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
                                        </a>
                                    </div>
                                </div>
                                {/* </Card> */}
                            </div>

                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
};

export default ProductList;
