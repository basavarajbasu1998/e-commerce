import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const ProductCard = ({ item }) => {
  return (
   
        <Card>
          <CardMedia
            component="img"
            height="20"
            image={item.image}
            alt={item.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: ${item.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Category: {item.category}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Rating: {item.rating.rate} ({item.rating.count} reviews)
            </Typography>
          </CardContent>
        </Card>
     
  );
};

export default ProductCard;


