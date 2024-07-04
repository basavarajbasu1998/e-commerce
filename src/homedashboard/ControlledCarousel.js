import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';
import { Box } from '@mui/material';


function CarouselFadeExample() {
    return (
        <Box sx={{ mt: 4.7 }}>
            <Carousel fade>
                <Carousel.Item>
                    <ExampleCarouselImage
                        imagePath="https://img.freepik.com/free-vector/flat-black-friday-twitter-cover-template_23-2149108777.jpg?w=1380&t=st=1717315482~exp=1717316082~hmac=d1bfd94e95beff1c00db737ee79ef82a5ddaeebea358390bd5d1c6861e91d74e"
                        text="First slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage
                        imagePath="https://img.freepik.com/premium-vector/vector-illustration-concept-ganesh-chaturthi-festival-sale-banner_181203-6933.jpg?w=1380"
                        text="Second slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <ExampleCarouselImage
                        imagePath="https://img.freepik.com/premium-photo/photocomposition-horizontal-shopping-banner-with-woman-big-smartphone_23-2151201773.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1717200000&semt=ais_user"
                        text="Third slide"
                    />
                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Box>
    );
}

export default CarouselFadeExample;
