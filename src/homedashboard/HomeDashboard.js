import React from 'react'
import CarouselFadeExample from './ControlledCarousel'
import { Box, Container, Typography } from '@mui/material'

import CardCarouselFadeExample from './CardCarouselFadeExample'
import SlickSliderComponent from './SlickSliderComponent'
import SliderMove from './SliderMove'

const HomeDashboard = () => {

    const men = [
        { title: "T Shart", price: "350", discount: "10%", description: "Good ", image: "https://www.beyoung.in/blog/wp-content/uploads/2018/09/general-1.png" },
        { title: "Title 2", price: "350", discount: "10%", description: "Description 2", image: "https://i.pinimg.com/236x/dc/d4/0d/dcd40d9a7f9cf6a52e6cd4b2b93b15f6.jpg" },

        { title: "Title 1", price: "350", discount: "10%", description: "Description 1", image: "https://5.imimg.com/data5/SELLER/Default/2022/10/AK/MB/PE/161562894/fashion-garments-500x500.jpg" },
        { title: "Title 2", price: "450", discount: "10%", description: "Description 2", image: "https://images.bewakoof.com/uploads/grid/app/casual-outfits-for-men-bewakoof-blog-12-1615892382.jpg" },

        { title: "Title 1", price: "350", discount: "10%", description: "Description 1", image: "https://assets0.mirraw.com/images/12246129/image_long_webp.webp?1707379100" },
        { title: "Title 2", price: "450", discount: "10%", description: "Description 2", image: "https://www.beyoung.in/blog/wp-content/uploads/2018/09/general-1.png" },

        { title: "Title 1", price: "550", discount: "10%", description: "Description 1", image: "https://s3.ap-south-1.amazonaws.com/www.pothysuat.pctestbed.ml/catimg856832.jpg" },
        { title: "Title 2", price: "450", discount: "10%", description: "Description 2", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpeGheg7YpaJNfhdCDdn2mbRafoIMq9ljCA&s" },

        { title: "Title 1", price: "550", discount: "10%", description: "Description 1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdpeGheg7YpaJNfhdCDdn2mbRafoIMq9ljCA&s" },
        { title: "Title 2", price: "550", discount: "10%", description: "Description 2", image: "https://www.beyoung.in/blog/wp-content/uploads/2018/09/general-1.png" },

        // Add more objects as needed
    ];


    const women = [
        { title: "Title 1", price: "650", discount: "10%", description: "Description 1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7nbsZHu7O2CmE43wii1w5vFEoZgbVaeQ60Q&s" },

        { title: "Title 1", price: "750", discount: "10%", description: "Description 1", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFJe8Mn85rXEiSGf0eCJpEuZ41okm_enAg4A&s" },

        { title: "Title 1", price: "580", discount: "10%", description: "Description 1", image: "https://images.pexels.com/photos/12707148/pexels-photo-12707148.jpeg?cs=srgb&dl=pexels-azraq-al-rezoan-3449646-12707148.jpg&fm=jpg" },

        { title: "Title 1", price: "350", discount: "10%", description: "Description 1", image: "https://images.pexels.com/photos/730055/pexels-photo-730055.jpeg?cs=srgb&dl=pexels-nipendhbd-730055.jpg&fm=jpg" },

        { title: "Title 1", price: "1500", discount: "10%", description: "Description 1", image: "https://i.etsystatic.com/7799304/r/il/a945af/1501300791/il_570xN.1501300791_88yl.jpg" },

        { title: "Title 1", price: "800", discount: "10%", description: "Description 1", image: "https://m.media-amazon.com/images/I/615ubkXUmkL._AC_UY1100_.jpg" },

        { title: "Title 1", price: "350", discount: "10%", description: "Description 1", image: "https://assets.ajio.com/medias/sys_master/root/20230602/243q/64793d6042f9e729d70dadc1/-473Wx593H-461655089-yellow-MODEL.jpg" },

        { title: "Title 1", price: "1500", discount: "10%", description: "Description 1", image: "https://fcity.in/images/products/178137199/wk4ie_512.jpg" },

        { title: "Title 1", price: "1500", discount: "10%", description: "Description 1", image: "https://assets.ajio.com/medias/sys_master/root/20240406/XGvL/6610dc8616fd2c6e6aa17b93/-473Wx593H-466845053-yellow-MODEL3.jpg" },

        // Add more objects as needed
    ];

    const kids = [
        { title: "Title 1", price: "650", discount: "10%", description: "Description 1", image: "https://i.pinimg.com/736x/08/9e/e3/089ee3df4b6868942e7eaa8edc9ae936.jpg" },
        { title: "Title 1", price: "650", discount: "10%", description: "Description 1", image: "https://5.imimg.com/data5/ANDROID/Default/2022/9/WR/DV/ZK/120923116/product-jpeg-500x500.jpg" },
        { title: "Title 1", price: "650", discount: "10%", description: "Description 1", image: "https://www.mumkins.in/cdn/shop/collections/Catlog-Girls-Kids-wear.jpg?v=1686807578" },
        { title: "Title 1", price: "650", discount: "10%", description: "Description 1", image: "https://www.nakshatrakids.com/wp-content/uploads/2024/01/IMG_2942.jpeg" },
        { title: "Title 1", price: "650", discount: "10%", description: "Description 1", image: "https://i.pinimg.com/736x/2e/a0/06/2ea0068d88ede73c58db2191fcee8f92.jpg" },
        { title: "Title 1", price: "650", discount: "10%", description: "Description 1", image: "https://i.pinimg.com/736x/49/09/ac/4909ac6a0b330a6065990dde31901b9c.jpg" },

    ]


    return (
        <div>

            <Box sx={{ mt: 8 }}>
                <CarouselFadeExample />
            </Box>

            <Container>
                <Box sx={{ mt: 2 }}>
                    <Box sx={{ mb: 2 }}>
                        <img src='https://www.beyoung.in/api/catalog/homepage-3-10/desktop/strip/strip.jpg' height={"150px"} width={"100%"} />
                    </Box>

                    <Box
                        sx={{
                            marginTop: '60px',
                            display: 'flex',
                            alignItems: 'center',
                            background: 'linear-gradient(90deg, rgba(248, 235, 39, 0) 0%, #f8eb27 48.11%, rgba(248, 235, 39, 0) 100%)',
                            width: '100%',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography>
                            FOR MEN
                        </Typography>
                    </Box>
                    <Box sx={{ mb: 3, p: 2 }}>
                        <SlickSliderComponent images={men} />
                    </Box>

                    <Box sx={{ mb: 2 }}>
                        <img src='https://www.beyoung.in/api/catalog/birthday-2024/Beyoung-birthdat-section-dektop-view.jpg' height={"150px"} width={"100%"} />
                    </Box>

                    <Box
                        sx={{
                            marginTop: '60px',
                            display: 'flex',
                            alignItems: 'center',
                            background: 'linear-gradient(90deg, rgba(248, 235, 39, 0) 0%, #f8eb27 48.11%, rgba(248, 235, 39, 0) 100%)',
                            width: '100%',
                            justifyContent: 'center'
                        }}
                    >
                        <Typography>
                            FOR WOMEN
                        </Typography>
                    </Box>

                    <Box sx={{ mb: 3, p: 2 }}>
                        <SlickSliderComponent images={women} />
                    </Box>
                </Box>




                <Box
                    sx={{
                        marginTop: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        background: 'linear-gradient(90deg, rgba(248, 235, 39, 0) 0%, #f8eb27 48.11%, rgba(248, 235, 39, 0) 100%)',
                        width: '100%',
                        justifyContent: 'center'
                    }}
                >
                    <Typography>
                        FOR  KIDS
                    </Typography>
                </Box>
                <Box sx={{ mb: 3, p: 2 }}>
                    <SlickSliderComponent images={kids} />
                </Box>

                <Typography
                    component="div"
                    sx={{
                        marginTop: '70px',
                        fontSize: '43px',
                        borderBottom: '4px solid #f8eb27',
                        lineHeight: 0,
                        color: '#000000',
                        textAlign: 'center',
                        marginLeft: '15px',
                        marginRight: '15px',
                        marginBottom: '50px',
                    }}
                >
                    <Box
                        component="span"
                        sx={{
                            background: '#fff',
                            padding: '0 10px',
                            letterSpacing: '0.9px',
                            fontSize: '30px',
                            fontWeight: '800',
                        }}
                    >
                        FEATURED ON
                    </Box>
                </Typography>

                <Box sx={{ p: 1 }}>
                    <SliderMove />
                </Box>
            </Container>

        </div>
    )
}

export default HomeDashboard