import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomCardCarousel = ({ data }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <Box sx={{ padding: '20px' }}>
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                // autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {data.map((item, index) => (
                    <Box key={index} sx={{ padding: '10px' }}>
                        <Card sx={{ width: { xs: '250px', sm: '300px', md: '300px', lg: '300px', p: 2 }, backgroundColor: "white", boxShadow: 3 }}>
                            <CardMedia
                                component="img"
                                height="30"
                                image={item.image}
                                sx={{ objectFit: 'cover', height: "300px" }}
                            />
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {item.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                ))}
            </Carousel>
        </Box>
    );
};

export default CustomCardCarousel;
