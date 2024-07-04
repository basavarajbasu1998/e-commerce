// // import React, { useState } from 'react';
// // import { useNavigate, useParams } from 'react-router-dom';
// // import { Container, Typography, Grid, Card, CardContent, CardMedia, FormControlLabel, FormGroup, Checkbox, Box, Button, Divider, Radio, FormLabel, FormControl, RadioGroup, Stack } from '@mui/material';

// // const SubProductList = () => {
// //     const { id } = useParams();
// //     const navigate = useNavigate();
// //     const [showFilters, setShowFilters] = useState(false);

// //     const handleCardClick = (id) => {
// //         navigate(`/eachproduct/${id}`);
// //     };

// //     const toggleFilters = () => {
// //         setShowFilters(!showFilters);
// //     };

// //     // Dummy sub-product details
// //     const subProductList = [
// //         {
// //             id: 1,
// //             title: "Sub-Product 1",
// //             image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/m/q/7/m-rk01-formal-shirt-cloth-factory-original-imagh56zq3nnffdm.jpeg?q=90&crop=false",
// //             description: "Description for Sub-Product 1.",
// //             price: 499,
// //             rating: {
// //                 rate: 4.0,
// //                 count: 50,
// //             },
// //         },
// //         {
// //             id: 2,
// //             title: "Sub-Product 2",
// //             image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/m/q/7/m-rk01-formal-shirt-cloth-factory-original-imagh56zq3nnffdm.jpeg?q=90&crop=false",
// //             description: "Description for Sub-Product 2.",
// //             price: 699,
// //             rating: {
// //                 rate: 4.2,
// //                 count: 70,
// //             },
// //         },
// //         {
// //             id: 3,
// //             title: "Sub-Product 3",
// //             image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/m/q/7/m-rk01-formal-shirt-cloth-factory-original-imagh56zq3nnffdm.jpeg?q=90&crop=false",
// //             description: "Description for Sub-Product 3.",
// //             price: 899,
// //             rating: {
// //                 rate: 4.5,
// //                 count: 80,
// //             },
// //         },

// //         {
// //             id: 1,
// //             title: "Sub-Product 1",
// //             image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/m/q/7/m-rk01-formal-shirt-cloth-factory-original-imagh56zq3nnffdm.jpeg?q=90&crop=false",
// //             description: "Description for Sub-Product 1.",
// //             price: 499,
// //             rating: {
// //                 rate: 4.0,
// //                 count: 50,
// //             },
// //         },
// //         {
// //             id: 2,
// //             title: "Sub-Product 2",
// //             image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/m/q/7/m-rk01-formal-shirt-cloth-factory-original-imagh56zq3nnffdm.jpeg?q=90&crop=false",
// //             description: "Description for Sub-Product 2.",
// //             price: 699,
// //             rating: {
// //                 rate: 4.2,
// //                 count: 70,
// //             },
// //         },
// //         {
// //             id: 3,
// //             title: "Sub-Product 3",
// //             image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/m/q/7/m-rk01-formal-shirt-cloth-factory-original-imagh56zq3nnffdm.jpeg?q=90&crop=false",
// //             description: "Description for Sub-Product 3.",
// //             price: 899,
// //             rating: {
// //                 rate: 4.5,
// //                 count: 80,
// //             },
// //         },
// //         {
// //             id: 1,
// //             title: "Sub-Product 1",
// //             image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/m/q/7/m-rk01-formal-shirt-cloth-factory-original-imagh56zq3nnffdm.jpeg?q=90&crop=false",
// //             description: "Description for Sub-Product 1.",
// //             price: 499,
// //             rating: {
// //                 rate: 4.0,
// //                 count: 50,
// //             },
// //         },

// //         {
// //             id: 1,
// //             title: "Sub-Product 1",
// //             image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/m/q/7/m-rk01-formal-shirt-cloth-factory-original-imagh56zq3nnffdm.jpeg?q=90&crop=false",
// //             description: "Description for Sub-Product 1.",
// //             price: 499,
// //             rating: {
// //                 rate: 4.0,
// //                 count: 50,
// //             },
// //         },

// //         {
// //             id: 1,
// //             title: "Sub-Product 1",
// //             image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/m/q/7/m-rk01-formal-shirt-cloth-factory-original-imagh56zq3nnffdm.jpeg?q=90&crop=false",
// //             description: "Description for Sub-Product 1.",
// //             price: 499,
// //             rating: {
// //                 rate: 4.0,
// //                 count: 50,
// //             },
// //         },
// //     ];

// //     const filters = (
// //         <Box sx={{ padding: 2 }}>
// //             <Typography variant="subtitle1">Filters</Typography>
// //             <Divider sx={{ mt: 1, mb: 1 }} />
// //             <Typography variant='subtitle2' sx={{ fontWeight: "bold" }}>Brands</Typography>
// //             <FormGroup >
// //                 <FormControlLabel control={<Checkbox size='small' />} label={<Typography variant="body2">Puma</Typography>} />
// //                 <FormControlLabel control={<Checkbox size='small' />} label={<Typography variant="body2">Road star</Typography>} />
// //                 <FormControlLabel control={<Checkbox size='small' />} label={<Typography variant="body2">Us Polo</Typography>} />
// //                 <FormControlLabel control={<Checkbox size='small' />} label={<Typography variant="body2">Friskers</Typography>} />
// //             </FormGroup>
// //             <Divider sx={{ mt: 1, mb: 1 }} />
// //             <Typography variant='subtitle2' sx={{ fontWeight: "bold" }}>Color</Typography>
// //             <FormGroup>
// //                 <FormControlLabel
// //                     control={<Checkbox size='small' />}
// //                     label={
// //                         <Typography variant="body2">
// //                             <span style={{
// //                                 height: "15px",
// //                                 width: "15px",
// //                                 backgroundColor: "red",
// //                                 borderRadius: "50%",
// //                                 display: "inline-block"
// //                             }}></span>
// //                             &nbsp; Red
// //                         </Typography>
// //                     }
// //                 />
// //                 <FormControlLabel
// //                     control={<Checkbox size='small' />}
// //                     label={
// //                         <Typography variant="body2">
// //                             <span style={{
// //                                 height: "15px",
// //                                 width: "15px",
// //                                 backgroundColor: "black",
// //                                 borderRadius: "50%",
// //                                 display: "inline-block"
// //                             }}></span>
// //                             &nbsp; Black
// //                         </Typography>
// //                     }
// //                 />
// //                 <FormControlLabel
// //                     control={<Checkbox size='small' />}
// //                     label={
// //                         <Typography variant="body2">
// //                             <span style={{
// //                                 height: "15px",
// //                                 width: "15px",
// //                                 backgroundColor: "white",
// //                                 borderRadius: "50%",
// //                                 display: "inline-block"
// //                             }}></span>
// //                             &nbsp; White
// //                         </Typography>
// //                     }
// //                 />
// //                 <FormControlLabel
// //                     control={<Checkbox size='small' />}
// //                     label={
// //                         <Typography variant="body2">
// //                             <span style={{
// //                                 height: "15px",
// //                                 width: "15px",
// //                                 backgroundColor: "blue",
// //                                 borderRadius: "50%",
// //                                 display: "inline-block"
// //                             }}></span>
// //                             &nbsp; Red
// //                         </Typography>
// //                     }
// //                 />
// //             </FormGroup>
// //             <Divider sx={{ mt: 1, mb: 1 }} />
// //             <Typography variant='subtitle2' sx={{ fontWeight: "bold" }}>Prices</Typography>
// //             <FormGroup>
// //                 <FormControlLabel control={<Checkbox size='small' />} label={<Typography variant="body2">Rs.199 to Rs.599</Typography>} />
// //                 <FormControlLabel control={<Checkbox size='small' />} label={<Typography variant="body2">Rs.600 to Rs.999</Typography>} />
// //                 <FormControlLabel control={<Checkbox size='small' />} label={<Typography variant="body2">Rs.999 to Rs.1599</Typography>} />
// //                 <FormControlLabel control={<Checkbox size='small' />} label={<Typography variant="body2">Rs.1599 to Rs.1999</Typography>} />
// //             </FormGroup>
// //             <FormControl>
// //                 <Typography variant='subtitle2' sx={{ fontWeight: "bold" }}>Discount Range</Typography>
// //                 <RadioGroup
// //                     row
// //                     aria-labelledby="demo-row-radio-buttons-group-label"
// //                     name="row-radio-buttons-group"
// //                 >
// //                     <Stack direction={"column"}>
// //                         <FormControlLabel value="female" control={<Radio />} label={<Typography variant="body2">20% and above</Typography>} />
// //                         <FormControlLabel value="male" control={<Radio />} label={<Typography variant="body2">40% and above</Typography>} />
// //                         <FormControlLabel value="other" control={<Radio />} label={<Typography variant="body2">60% and above</Typography>} />
// //                         <FormControlLabel
// //                             value="disabled"
// //                             control={<Radio />}
// //                             label={<Typography variant="body2">80% and above</Typography>}
// //                         />
// //                     </Stack>
// //                 </RadioGroup>
// //             </FormControl>


// //         </Box>
// //     );

// //     return (
// //         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
// //             <Box sx={{ display: { xs: 'block', md: 'none' }, p: 2 }}>
// //                 <Button variant="contained" onClick={toggleFilters}>
// //                     {showFilters ? 'Hide Filters' : 'Show Filters'}
// //                 </Button>
// //                 {showFilters && filters}
// //             </Box>
// //             <Grid container spacing={2}>
// //                 <Grid item xs={12} md={2} sx={{ display: { xs: 'none', md: 'block' } }}>
// //                     {filters}
// //                 </Grid>
// //                 <Grid item xs={12} md={10}>
// //                     <Grid container spacing={2}>
// //                         {subProductList.map((subProduct) => (
// //                             <Grid item xs={6} sm={6} md={3} key={subProduct.id}>
// //                                 <Card
// //                                     onClick={() => handleCardClick(subProduct.id)}
// //                                     sx={{
// //                                         display: 'flex',
// //                                         flexDirection: 'column',
// //                                         height: '100%',
// //                                         justifyContent: 'space-around',
// //                                         alignItems: 'center',
// //                                         padding: 2,
// //                                         boxShadow: 'none',
// //                                         transition: 'box-shadow 0.3s, transform 0.3s',
// //                                         '&:hover': {
// //                                             boxShadow: 3,
// //                                             transform: 'scale(1.05)',
// //                                         },
// //                                         cursor: 'pointer',
// //                                     }}
// //                                 >
// //                                     <CardMedia
// //                                         component="img"
// //                                         sx={{
// //                                             height: 'auto',
// //                                             width: '100%',
// //                                             objectFit: 'cover',
// //                                             padding: '8px',
// //                                             transition: 'transform 0.3s ease-in-out',
// //                                             '&:hover': {
// //                                                 transform: 'scale(1.1)',
// //                                             },
// //                                         }}
// //                                         image={subProduct.image}
// //                                     />
// //                                     <CardContent>
// //                                         <Typography variant="subtitle1" sx={{ color: "blue" }}>
// //                                             {subProduct.title}
// //                                         </Typography>
// //                                         <Typography variant="body2" align="justify">
// //                                             {subProduct.description}
// //                                         </Typography>
// //                                         <Typography variant="subtitle1" sx={{ color: "blue", fontWeight: "bold" }}>
// //                                             ₹ {subProduct.price}
// //                                         </Typography>
// //                                         <Typography variant="body2">Rating: {subProduct.rating.rate}</Typography>
// //                                         <Typography variant="body2">Stock: {subProduct.rating.count}</Typography>
// //                                     </CardContent>
// //                                 </Card>
// //                             </Grid>
// //                         ))}
// //                     </Grid>
// //                 </Grid>
// //             </Grid>
// //         </Box>
// //     );
// // };

// // export default SubProductList;



// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Container, Typography, Grid, Card, CardContent, CardMedia, FormControlLabel, FormGroup, Checkbox, Box, Button, Divider, Radio, FormLabel, FormControl, RadioGroup, Stack, Dialog, DialogTitle, DialogContentText, DialogActions, DialogContent } from '@mui/material';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import StarRatings from 'react-star-ratings';
// import { useDispatch, useSelector } from 'react-redux';
// import { getEachProductIDList } from '../../redux/auth/product/ProductAction';
// const SubProductList = () => {

//     const productstateData = useSelector((state) => state.product);

//     const { getproductid } = productstateData;

//     const { id } = useParams();

//     const navigate = useNavigate();
//     const [showFilters, setShowFilters] = useState(false);
//     const [selectedBrands, setSelectedBrands] = useState([]);
//     const [selectedColors, setSelectedColors] = useState([]);
//     const [selectedPrices, setSelectedPrices] = useState([]);
//     const [selectedDiscount, setSelectedDiscount] = useState("");
//     const [hoveredCard, setHoveredCard] = useState(null)
//     const [openDialog, setOpenDialog] = useState(false);

//     const handleCardClick = (id) => {
//         navigate(`/eachproduct/${id}`);
//     };

//     //getEachProductID

//     console.log("idddddddddddddddddddddddddddddddddddddddddddddddddddddd", getproductid)
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getEachProductIDList(id))
//     }, [])


//     const handlewatchList = (product) => {
//         console.log(`Product Name: ${product.name}`);
//         console.log(`Product Price: ${product.price}`);
//         console.log(`Product Category: ${product.category}`);
//         console.log(product)
//         // navigate(`/watchlist/${id}`);
//         setOpenDialog(true)
//     }

//     const toggleFilters = () => {
//         setShowFilters(!showFilters);
//     };

//     const handleBrandChange = (event) => {
//         const value = event.target.name;
//         setSelectedBrands((prev) => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
//     };

//     const handleColorChange = (event) => {
//         const value = event.target.name;
//         setSelectedColors((prev) => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
//     };

//     const handlePriceChange = (event) => {
//         const value = event.target.name;
//         setSelectedPrices((prev) => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
//     };

//     const handleDiscountChange = (event) => {
//         setSelectedDiscount(event.target.value);
//     };

//     const subProductLi = [
//         {
//             id: 1,
//             title: "Sub-Product 1",
//             image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/m/q/7/m-rk01-formal-shirt-cloth-factory-original-imagh56zq3nnffdm.jpeg?q=90&crop=false",
//             description: "Description for Sub-Product 1.",
//             price: 499,
//             brand: "Puma",
//             color: "Red",
//             rate: 4.2,
//             count: 70,
//             discount: 20,
//         },
//         {
//             id: 2,
//             title: "Sub-Product 2",
//             image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/m/q/7/m-rk01-formal-shirt-cloth-factory-original-imagh56zq3nnffdm.jpeg?q=90&crop=false",
//             description: "Description for Sub-Product 2.",
//             price: 699,
//             brand: "Road star",
//             color: "Black",
//             rate: 4.2,
//             count: 70,
//             discount: 30,
//         },
//         {
//             id: 3,
//             title: "Sub-Product 3",
//             image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shirt/m/q/7/m-rk01-formal-shirt-cloth-factory-original-imagh56zq3nnffdm.jpeg?q=90&crop=false",
//             description: "Description for Sub-Product 3.",
//             price: 899,
//             brand: "Us Polo",
//             color: "White",
//             rate: 4.5,
//             count: 80,
//             discount: 50,
//         },
//     ];

//     const applyFilters = (products) => {
//         return products.filter((product) => {
//             const matchesBrand = selectedBrands.length ? selectedBrands.includes(product.brand) : true;
//             const matchesColor = selectedColors.length ? selectedColors.includes(product.color) : true;
//             const matchesPrice = selectedPrices.length ? selectedPrices.some((range) => {
//                 const [min, max] = range.split('-').map(Number);
//                 return product.price >= min && product.price <= max;
//             }) : true;
//             const matchesDiscount = selectedDiscount ? product.discount >= parseInt(selectedDiscount) : true;

//             return matchesBrand && matchesColor && matchesPrice && matchesDiscount;
//         });
//     };

//     // const filteredProducts = applyFilters(getproductid);

//     const filters = (
//         <Box sx={{ padding: 2 }}>
//             <Typography variant="subtitle1">Filters</Typography>
//             <Divider sx={{ mt: 1, mb: 1 }} />
//             <Typography variant='subtitle2' sx={{ fontWeight: "bold" }}>Brands</Typography>
//             <FormGroup >
//                 <FormControlLabel control={<Checkbox size='small' name="Puma" onChange={handleBrandChange} />} label={<Typography variant="body2">Puma</Typography>} />
//                 <FormControlLabel control={<Checkbox size='small' name="Road star" onChange={handleBrandChange} />} label={<Typography variant="body2">Road star</Typography>} />
//                 <FormControlLabel control={<Checkbox size='small' name="Us Polo" onChange={handleBrandChange} />} label={<Typography variant="body2">Us Polo</Typography>} />
//                 <FormControlLabel control={<Checkbox size='small' name="Friskers" onChange={handleBrandChange} />} label={<Typography variant="body2">Friskers</Typography>} />
//             </FormGroup>
//             <Divider sx={{ mt: 1, mb: 1 }} />
//             <Typography variant='subtitle2' sx={{ fontWeight: "bold" }}>Color</Typography>
//             <FormGroup>
//                 <FormControlLabel control={<Checkbox size='small' name="Red" onChange={handleColorChange} />} label={<Typography variant="body2">
//                     <span style={{ height: "15px", width: "15px", backgroundColor: "red", borderRadius: "50%", display: "inline-block" }}></span>
//                     &nbsp; Red
//                 </Typography>} />
//                 <FormControlLabel control={<Checkbox size='small' name="Black" onChange={handleColorChange} />} label={<Typography variant="body2">
//                     <span style={{ height: "15px", width: "15px", backgroundColor: "black", borderRadius: "50%", display: "inline-block" }}></span>
//                     &nbsp; Black
//                 </Typography>} />
//                 <FormControlLabel control={<Checkbox size='small' name="White" onChange={handleColorChange} />} label={<Typography variant="body2">
//                     <span style={{ height: "15px", width: "15px", backgroundColor: "green", borderRadius: "50%", display: "inline-block" }}></span>
//                     &nbsp; Green
//                 </Typography>} />
//                 <FormControlLabel control={<Checkbox size='small' name="Blue" onChange={handleColorChange} />} label={<Typography variant="body2">
//                     <span style={{ height: "15px", width: "15px", backgroundColor: "blue", borderRadius: "50%", display: "inline-block" }}></span>
//                     &nbsp; Blue
//                 </Typography>} />
//             </FormGroup>
//             <Divider sx={{ mt: 1, mb: 1 }} />
//             <Typography variant='subtitle2' sx={{ fontWeight: "bold" }}>Prices</Typography>
//             <FormGroup>
//                 <FormControlLabel control={<Checkbox size='small' name="199-599" onChange={handlePriceChange} />} label={<Typography variant="body2">Rs.199 to Rs.599</Typography>} />
//                 <FormControlLabel control={<Checkbox size='small' name="600-999" onChange={handlePriceChange} />} label={<Typography variant="body2">Rs.600 to Rs.999</Typography>} />
//                 <FormControlLabel control={<Checkbox size='small' name="999-1599" onChange={handlePriceChange} />} label={<Typography variant="body2">Rs.999 to Rs.1599</Typography>} />
//                 <FormControlLabel control={<Checkbox size='small' name="1599-1999" onChange={handlePriceChange} />} label={<Typography variant="body2">Rs.1599 to Rs.1999</Typography>} />
//             </FormGroup>
//             <FormControl>
//                 <Typography variant='subtitle2' sx={{ fontWeight: "bold" }}>Discount Range</Typography>
//                 <RadioGroup
//                     row
//                     aria-labelledby="discount-range-radio-buttons-group-label"
//                     name="discount-range-radio-buttons-group"
//                     value={selectedDiscount}
//                     onChange={handleDiscountChange}
//                 >
//                     <Stack direction={"column"}>
//                         <FormControlLabel value="20" control={<Radio />} label={<Typography variant="body2">20% and above</Typography>} />
//                         <FormControlLabel value="40" control={<Radio />} label={<Typography variant="body2">40% and above</Typography>} />
//                         <FormControlLabel value="60" control={<Radio />} label={<Typography variant="body2">60% and above</Typography>} />
//                         <FormControlLabel value="80" control={<Radio />} label={<Typography variant="body2">80% and above</Typography>} />
//                     </Stack>
//                 </RadioGroup>
//             </FormControl>
//         </Box>
//     );

//     return (
//         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//             <Box sx={{ display: { xs: 'block', md: 'none' }, p: 2 }}>
//                 <Button variant="contained" onClick={toggleFilters}>
//                     {showFilters ? 'Hide Filters' : 'Show Filters'}
//                 </Button>
//                 {showFilters && filters}
//             </Box>
//             <Grid container spacing={2}>
//                 <Grid item xs={12} md={2} sx={{ display: { xs: 'none', md: 'block' } }}>
//                     {filters}
//                 </Grid>
//                 <Grid item xs={12} md={10}>
//                     <Grid container spacing={2}>
//                         {Array.isArray(getproductid) && getproductid.map((subProduct) => (
//                             <Grid item xs={6} sm={6} md={3} key={subProduct.id}>
//                                 <Card

//                                     sx={{
//                                         display: 'flex',
//                                         flexDirection: 'column',
//                                         height: '100%',
//                                         justifyContent: 'space-around',
//                                         alignItems: 'center',
//                                         padding: 2,
//                                         boxShadow: 'none',
//                                         transition: 'box-shadow 0.3s, transform 0.3s',
//                                         '&:hover': {
//                                             boxShadow: 3,
//                                             transform: 'scale(1.05)',
//                                         },
//                                         cursor: 'pointer',
//                                     }}
//                                     onMouseEnter={() => setHoveredCard(subProduct.id)}
//                                     onMouseLeave={() => setHoveredCard(null)}
//                                 >
//                                     <CardMedia
//                                         component="img"
//                                         sx={{
//                                             height: 'auto',
//                                             width: '100%',
//                                             objectFit: 'cover',
//                                             padding: '8px',
//                                             transition: 'transform 0.3s ease-in-out',
//                                             '&:hover': {
//                                                 transform: 'scale(1.1)',
//                                             },
//                                         }}
//                                         onClick={() => handleCardClick(subProduct.id)}
//                                         image={subProduct.image}
//                                     />

//                                     <CardContent>

//                                         <Typography variant="subtitle1" sx={{ color: "blue" }}>
//                                             {subProduct.title}
//                                         </Typography>
//                                         <Typography variant="body2" align="justify">
//                                             {subProduct.description}
//                                         </Typography>
//                                         <Typography variant="subtitle1" sx={{ color: "blue", fontWeight: "bold" }}>
//                                             ₹ {subProduct.price}
//                                         </Typography>
//                                         {hoveredCard === subProduct.id ? (
//                                             <div style={{
//                                                 position: 'absolute',
//                                                 bottom: '10px',
//                                                 left: '50%',
//                                                 transform: 'translateX(-50%)',
//                                                 textAlign: 'center',
//                                                 width: '100%'
//                                             }}>

//                                                 <Button variant="outlined" style={{ margin: '3px', width: "200px", borderRadius: "16px" }} size='small' onClick={() => handlewatchList(subProduct)}>
//                                                     <FavoriteBorderIcon fontSize='25px' />
//                                                     &nbsp;   Watchlist</Button>
//                                             </div>
//                                         ) : (

//                                             <Box>
//                                                 {/* <Typography variant="body2">Rating: {subProduct.rating.rate}</Typography> */}
//                                                 {/* <Typography variant="body2">Stock: {subProduct.rating.count}</Typography> */}


//                                                 {/* <StarRatings
//                                                     rating={(subProduct.rate)}
//                                                     starDimension="16px"
//                                                     starSpacing="1px"
//                                                     starRatedColor="black"
//                                                 /> */}
//                                                 <Typography>
//                                                     <span>Stock :{subProduct.count}  </span>
//                                                 </Typography>
//                                             </Box>

//                                         )}
//                                     </CardContent>


//                                 </Card>
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </Grid>
//             </Grid>


//             <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
//                 <DialogTitle>Product Added to Watchlist</DialogTitle>
//                 <DialogContent>
//                     <DialogContentText>
//                         The product has been added to your watchlist.
//                     </DialogContentText>
//                 </DialogContent>
//                 <DialogActions>
//                     <Button onClick={() => setOpenDialog(false)} color="primary">
//                         Close
//                     </Button>
//                 </DialogActions>
//             </Dialog>
//         </Box>
//     );
// };

// export default SubProductList;




import React, { useEffect, useState, useMemo } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    FormControlLabel,
    FormGroup,
    Checkbox,
    Box,
    Button,
    Divider,
    Radio,
    FormControl,
    RadioGroup,
    Stack,
    Dialog,
    DialogTitle,
    DialogContentText,
    DialogActions,
    DialogContent,
    useMediaQuery,
    useTheme,
    Breadcrumbs
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { getEachProductIDList } from '../../redux/auth/product/ProductAction';


const SubProductList = () => {
    const productstateData = useSelector((state) => state.product);
    const { getproductid } = productstateData;
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const theme = useTheme();
    // const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const Truncate = (string, number) => {
        if (!string) {
            return null;
        }
        if (string.length <= number) {
            return string;
        }
        return string.slice(0, number) + "...";
    };

    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState({
        brands: [],
        colors: [],
        prices: [],
        discount: ""
    });
    const [openDialog, setOpenDialog] = useState(false);

    useEffect(() => {
        dispatch(getEachProductIDList(id));
    }, [dispatch, id]);

    const handleCardClick = (id) => {
        navigate(`/eachproduct/${id}`);
    };

    const handleWatchList = (product) => {
        console.log(`Product Name: ${product.name}`);
        console.log(`Product Price: ${product.price}`);
        console.log(`Product Category: ${product.category}`);
        console.log(product);
        setOpenDialog(true);
    };

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    const handleFilterChange = (event, type) => {
        const value = event.target.name || event.target.value;
        setFilters((prev) => {
            if (type === 'discount') {
                return { ...prev, discount: value };
            }
            const prevValues = prev[type];
            const newValues = prevValues.includes(value) ? prevValues.filter(item => item !== value) : [...prevValues, value];
            return { ...prev, [type]: newValues };
        });
    };

    const applyFilters = (products) => {
        return products?.filter((product) => {
            const { brands, colors, prices, discount } = filters;
            const matchesBrand = brands.length ? brands.includes(product.brand) : true;
            const matchesColor = colors.length ? colors.includes(product.color) : true;
            const matchesPrice = prices.length ? prices.some((range) => {
                const [min, max] = range.split('-').map(Number);
                return product.price >= min && product.price <= max;
            }) : true;
            const matchesDiscount = discount ? product?.discount >= parseInt(discount) : true;
            return matchesBrand && matchesColor && matchesPrice && matchesDiscount;
        });
    };

    const filteredProducts = useMemo(() => applyFilters(getproductid), [filters, getproductid]);

    const filtersComponent = (
        <Box>
            {/* <Typography variant="subtitle1">Filters</Typography> */}

            <Typography variant='subtitle2' sx={{ fontWeight: "bold" }}>Brands</Typography>
            <FormGroup >
                {['puma', 'Road star', 'Us Polo', 'Friskers'].map((brand) => (
                    <FormControlLabel
                        key={brand}
                        control={<Checkbox size='small' name={brand} onChange={(e) => handleFilterChange(e, 'brands')} />}
                        label={<Typography variant="body2">{brand}</Typography>}
                    />
                ))}
            </FormGroup>
            <Divider sx={{ mt: 1, mb: 1 }} />
            <Typography variant='subtitle2' sx={{ fontWeight: "bold" }}>Color</Typography>
            <FormGroup>
                {['red', 'Black', 'White', 'Blue'].map((color) => (
                    <FormControlLabel
                        key={color}
                        control={<Checkbox size='small' name={color} onChange={(e) => handleFilterChange(e, 'colors')} />}
                        label={<Typography variant="body2">
                            <span style={{ height: "15px", width: "15px", backgroundColor: color.toLowerCase(), borderRadius: "50%", display: "inline-block" }}></span>
                            &nbsp; {color}
                        </Typography>}
                    />
                ))}
            </FormGroup>
            <Divider sx={{ mt: 1, mb: 1 }} />
            <Typography variant='subtitle2' sx={{ fontWeight: "bold" }}>Prices</Typography>
            <FormGroup>
                {['199-599', '600-999', '999-1599', '1599-1999'].map((priceRange) => (
                    <FormControlLabel
                        key={priceRange}
                        control={<Checkbox size='small' name={priceRange} onChange={(e) => handleFilterChange(e, 'prices')} />}
                        label={<Typography variant="body2">Rs.{priceRange.replace('-', ' to Rs.')}</Typography>}
                    />
                ))}
            </FormGroup>
            <FormControl>
                <Typography variant='subtitle2' sx={{ fontWeight: "bold" }}>Discount Range</Typography>
                <RadioGroup
                    row
                    aria-labelledby="discount-range-radio-buttons-group-label"
                    name="discount-range-radio-buttons-group"
                    value={filters.discount}
                    onChange={(e) => handleFilterChange(e, 'discount')}
                >
                    <Stack direction={"column"}>
                        {['20', '40', '60', '80'].map((discount) => (
                            <FormControlLabel
                                key={discount}
                                value={discount}
                                control={<Radio />}
                                label={<Typography variant="body2">{discount}% and above</Typography>}
                            />
                        ))}
                    </Stack>
                </RadioGroup>
            </FormControl>
        </Box>
    );

    return (
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

            <Box>
                <Typography variant="h6" fontWeight={'bold'}>Filters</Typography>

            </Box>
            <Divider sx={{ mt: 1, mb: 1 }} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>



                <Box sx={{ display: { xs: 'block', md: 'none' }, p: 2 }}>
                    <Button variant="contained" onClick={toggleFilters}>
                        {showFilters ? 'Hide Filters' : 'Show Filters'}
                    </Button>
                    {showFilters && filtersComponent}
                </Box>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                    <Grid item xs={12} md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
                        {filtersComponent}
                    </Grid>
                    {Array.isArray(filteredProducts) && filteredProducts.map((subProduct) => (
                        //         <Grid item xs={6} sm={6} md={3} key={subProduct.id}>
                        //             {/* <Card
                        //                 onClick={() => handleCardClick(subProduct.id)}
                        //                 sx={{
                        //                     display: 'flex',
                        //                     flexDirection: 'column',
                        //                     height: '100%',
                        //                     position: 'relative',
                        //                     '&:hover .MuiCardMedia-root': {
                        //                         transform: 'scale(1.1)',
                        //                     },
                        //                 }}
                        //             > */}
                        //             <Card
                        //                 sx={{
                        //                     display: 'flex',
                        //                     flexDirection: 'column',
                        //                     justifyContent: 'space-around',
                        //                     padding: 1,
                        //                     boxShadow: 'none',
                        //                     cursor: 'pointer',
                        //                     position: 'relative',
                        //                     overflow: 'hidden',
                        //                     height: '100%',
                        //                     '&:hover .overlay': {
                        //                         opacity: 1,
                        //                     },
                        //                     '&:hover .content': {
                        //                         opacity: 0,
                        //                     }
                        //                 }}
                        //             // onMouseEnter={() => setHoveredCard(item.id)}
                        //             // onMouseLeave={() => setHoveredCard(null)}
                        //             >
                        //                 <FavoriteBorderIcon
                        //                     sx={{
                        //                         position: 'absolute',
                        //                         top: 8,
                        //                         right: 8,
                        //                         zIndex: 1,
                        //                         cursor: 'pointer',
                        //                         color: 'white',
                        //                         backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        //                         borderRadius: '50%',
                        //                         padding: '4px',
                        //                         transition: 'color 0.3s ease-in-out',
                        //                         '&:hover': {
                        //                             color: 'red',
                        //                         },
                        //                     }}
                        //                     onClick={(e) => {
                        //                         e.stopPropagation();
                        //                         handleWatchList(subProduct);
                        //                     }}
                        //                 />
                        //                 <CardMedia
                        //                     component="img"
                        //                     sx={{
                        //                         height: 'auto',
                        //                         width: '100%',
                        //                         objectFit: 'cover',
                        //                         padding: '8px',
                        //                         transition: 'transform 0.3s ease-in-out',
                        //                     }}
                        //                     image={`http://localhost:3000/${subProduct?.image}`}
                        //                 />
                        //                 <CardContent>
                        //                     <Typography variant="subtitle1" sx={{ color: "blue" }}>
                        //                         {subProduct.productName}
                        //                     </Typography>
                        //                     <Typography variant="body2" align="justify">
                        //                         {subProduct.description}
                        //                     </Typography>
                        //                     <Typography variant="subtitle1" sx={{ color: "blue", fontWeight: "bold" }}>
                        //                         ₹ {subProduct.sellingPrice}
                        //                     </Typography>
                        //                     <Typography variant="body2">Rating: {subProduct.rating}</Typography>
                        //                     <Typography variant="body2">Stock: {subProduct.minQuantity}</Typography>
                        //                 </CardContent>
                        //             </Card>
                        //         </Grid>

                        <Grid item xs={6} sm={6} md={6} lg={3} sx={{ mb: 2 }}>
                            <div className="block2" key={subProduct.id}>
                                <div className="block2-pic hov-img0">
                                    <img src={`http://localhost:3000/${subProduct?.image}`} alt="IMG-PRODUCT" style={{ height: "300px" }} />
                                    <a href="" onClick={() => handleCardClick(subProduct.id)} className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                                        Add Cart
                                    </a>
                                </div>
                                {/* <Card sx={{ p: 1 }}> */}
                                <div className="block2-txt flex-w flex-t p-t-14">
                                    <div className="block2-txt-child1 flex-col-l ">
                                        <a href="" onClick={() => handleCardClick(subProduct.id)} className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                            {subProduct.productName.length >= 50 ? Truncate(subProduct.productName, 50) : subProduct.productName}
                                        </a>

                                        <a className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">

                                            {subProduct.description.length >= 50 ? Truncate(subProduct.description, 50) : subProduct.description}
                                            {/* {image?.DESCRIPTION} */}
                                        </a>
                                        <Typography style={{ fontWeight: 'bold' }}>Rs  ₹ {subProduct.sellingPrice} &nbsp;  <span>Stock : {subProduct.minQuantity} </span></Typography>
                                        {/* <span className="stext-105 cl3" style={{ fontWeight: 'bold' }}>
                                            Rs  ₹ {subProduct.sellingPrice} &nbsp;  <span>Stock : {subProduct.minQuantity} </span>
                                        </span> */}
                                    </div>
                                    <div className="block2-txt-child2 flex-r p-t-3">
                                        <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                            <FavoriteBorderIcon />
                                            {/* <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" />
                                                    <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" /> */}
                                        </a>
                                    </div>
                                </div>
                                {/* </Card> */}
                            </div>

                        </Grid>
                    ))}


                </Grid>

                <Dialog
                    open={openDialog}
                    onClose={() => setOpenDialog(false)}
                >
                    <DialogTitle>Product Added to Watchlist</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            The product has been successfully added to your watchlist.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setOpenDialog(false)}>Close</Button>
                    </DialogActions>
                </Dialog>
            </Box >
        </Container>
    );
};

export default SubProductList;
