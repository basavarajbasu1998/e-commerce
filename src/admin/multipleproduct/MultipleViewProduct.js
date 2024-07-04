

import React, { useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useDispatch, useSelector } from 'react-redux';
import { getSubOneProduct } from '../../redux/auth/product/ProductAction';

const MultipleViewProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productStateData = useSelector((state) => state.product);
  const { getonesubporduct } = productStateData;

  useEffect(() => {
    dispatch(getSubOneProduct(id));
  }, [dispatch, id]);

  const Truncate = (string, number) => {
    if (!string) return null;
    if (string.length <= number) return string;
    return string.slice(0, number) + '...';
  };

  let imageUrls = [];
  if (getonesubporduct && getonesubporduct.images) {
    imageUrls = JSON.parse(getonesubporduct.images);
  }
  console.log("imageUrls imageUrls", imageUrls)

  return (
    <div>
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBackIcon />
      </IconButton>

      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ alignItems: 'center', justifyContent: 'center', padding: 2 }}>
          {imageUrls.length > 0 && imageUrls.map((url, index) => (
            <CardMedia
              key={index}
              component="img"
              sx={{
                height: 'auto',
                width: '25%',
                objectFit: 'cover',
                padding: '8px',
                textAlign: 'center',
                justifyContent: 'center',
              }}
              src={`http://localhost:3000/${url}`}
              alt={`Product Image ${index + 1}`}
            />
          ))}

          <CardContent>
            <Typography variant="subtitle1" sx={{ color: 'blue' }}>
              {getonesubporduct?.subproductName}
            </Typography>
            <Typography variant="body2" align="justify">
              {Truncate(getonesubporduct?.description, 70)}
            </Typography>
            <Typography variant='subtitle1' sx={{ color: `${getonesubporduct?.color}`, fontWeight: 'bold' }}>
              {getonesubporduct?.color}
            </Typography>
            <Typography>
              {getonesubporduct?.category}
            </Typography>
            <Typography>
              {getonesubporduct?.rating}
            </Typography>
            <Typography>
              <span>Stock: {getonesubporduct?.stock}</span>
            </Typography>
            <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
              Dummy Price ₹ {getonesubporduct?.dummyprice}
            </Typography>
            <Typography variant='subtitle1' sx={{ fontWeight: 'bold' }}>
              Selling Price ₹ {getonesubporduct?.price}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default MultipleViewProduct;

