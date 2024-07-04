import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
// import './SlickSliderComponent.css';  // Import your custom CSS here
import { Box, Card, CardContent, Stack, Typography } from '@mui/material';

const SliderMove = () => {
    const images = [
        { src: 'https://static.startuptalky.com/2021/08/_Puma-Interesting-facts-StartupTalky.jpg', alt: 'Brand 1' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtC3OuScEEsp0YXEjdmjC_pev9BxuBP72r8w&s', alt: 'Brand 2' },
        { src: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/30143359/2_big1-768x591.png', alt: 'Brand 3' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ4X_zBmAveLHsj2bJcl-15Gl6Q1nylIMqQg&s', alt: 'Brand 4' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GArhfozfLi5yYOn7GhlyzywCHVwYYOcKPg&s', alt: 'Brand 5' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GArhfozfLi5yYOn7GhlyzywCHVwYYOcKPg&s', alt: 'Brand 5' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GArhfozfLi5yYOn7GhlyzywCHVwYYOcKPg&s', alt: 'Brand 5' },
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 8000, // Increase speed for continuous movement
        autoplay: true,
        autoplaySpeed: 0, // Set to 0 for continuous movement
        cssEase: 'linear',
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: null,
        nextArrow: null,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1.5,
                    initialSlide: 2,
                    dots: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    dots: false,
                }
            }
        ]
    };

    return (
        <Slider {...settings}>
            {images && images.map((image, index) => (
                <Card key={index} className="slick-card">
                    <Box
                        component="img"
                        src={image.src}
                        alt={image.alt}
                        sx={{ width: '100%', height: '120px' }}
                    />
                </Card>
            ))}
        </Slider>
    );
};

export default SliderMove;
