// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import './SlickSliderComponent.css';  // Import your custom CSS here
// import { Box, Card, CardContent, Stack, Typography } from '@mui/material';

// const SlickSliderComponent = ({ images }) => {
//     console.log("images images", images)
//     const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         prevArrow: <button type="button" className="slick-prev"><FontAwesomeIcon icon={faChevronLeft} /></button>,
//         nextArrow: <button type="button" className="slick-next"><FontAwesomeIcon icon={faChevronRight} /></button>,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     infinite: true,
//                     dots: false, // Disable dots
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                     initialSlide: 2,
//                     dots: false // Ensure dots are disabled on all breakpoints
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 1,
//                     dots: false // Ensure dots are disabled on all breakpoints
//                 }
//             }
//         ]
//     };

//     return (
//         <Slider {...settings} >
//             {images && images.map((image, index) => (
//                 <Card sx={{ display: 'flex', justifyContent: 'center', width: { xs: "200px", sm: "200px", md: "350px" }, }}>
//                     <Box sx={{ width: { xs: "180px", sm: "200px", md: "350px" }, height: { xs: "180px", sm: "200px", md: "350px" }, overflow: 'hidden' }}>
//                         <img src={image.image} alt={`Slide ${index}`} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
//                     </Box>
//                     <CardContent>
//                         <Typography variant="body2" color="text.secondary">{image?.title}</Typography>
//                         <Box>
//                             <Stack direction={'row'}>
//                                 <Typography variant="body2" color="text.secondary">{image?.title}</Typography>
//                                 <Typography variant="body2" color="text.secondary">{image?.title}</Typography>
//                             </Stack>
//                         </Box>
//                     </CardContent>
//                 </Card>
//             ))}
//         </Slider>
//     );
// };

// export default SlickSliderComponent;




import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './SlickSliderComponent.css';  // Import your custom CSS here
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';

const SlickSliderComponent = ({ images }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <button type="button" className="slick-prev"><FontAwesomeIcon icon={faChevronLeft} /></button>,
        nextArrow: <button type="button" className="slick-next"><FontAwesomeIcon icon={faChevronRight} /></button>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false, // Disable dots
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1.5,
                    initialSlide: 2,
                    dots: false // Ensure dots are disabled on all breakpoints
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    dots: false // Ensure dots are disabled on all breakpoints
                }
            }
        ]
    };

    return (
        <Slider {...settings} >

            {images && images.map((image, index) => (

                <div className="block2" key={index}>
                    <div className="block2-pic hov-img0">
                        <img src={image.image} alt="IMG-PRODUCT" style={{ height: "300px" }} />
                        <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1">
                            Quick View
                        </a>
                    </div>
                    <div className="block2-txt flex-w flex-t p-t-14">
                        <div className="block2-txt-child1 flex-col-l ">
                            <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                {image?.title}
                            </a>

                            <a href="product-detail.html" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                {image?.description}
                            </a>
                            <span className="stext-105 cl3">
                                Rs {image?.price} &nbsp;  {image?.discount}
                            </span>
                        </div>
                        <div className="block2-txt-child2 flex-r p-t-3">
                            <a href="#" className="btn-addwish-b2 dis-block pos-relative js-addwish-b2">
                                <img className="icon-heart1 dis-block trans-04" src="images/icons/icon-heart-01.png" alt="ICON" />
                                <img className="icon-heart2 dis-block trans-04 ab-t-l" src="images/icons/icon-heart-02.png" alt="ICON" />
                            </a>
                        </div>
                    </div>
                </div>

            ))}

        </Slider>
    );
};

export default SlickSliderComponent;

