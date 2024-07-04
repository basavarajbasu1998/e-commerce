
import {
    Box,
    Button,
    Container,
    FormControl,
    FormHelperText,
    Grid,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { getAddProduct } from '../../redux/auth/product/ProductAction';
import { useNavigate } from 'react-router-dom';

const AddUpdateProduct = () => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const productstateData = useSelector((state) => state.product);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const FormSubmit = (data) => {
        const formData = new FormData();
        formData.append('brand', data.brand);
        formData.append('buyingPrice', data.buyingPrice);
        formData.append('category', data.category);
        formData.append('description', data.description);
        formData.append('image', data.image[0]);
        formData.append('maxQuantity', data.maxQuantity);
        formData.append('minQuantity', data.minQuantity);
        formData.append('productName', data.productName);
        formData.append('rating', data.rating);
        formData.append('sellingPrice', data.sellingPrice);

        dispatch(getAddProduct(formData));
    };


    const handleAllProdut = () => {
        navigate("/shop/adminproduct")
    }


    return (
        <div>
            <Paper>

                <Stack sx={{ justifyContent: "space-between", p: 1 }} direction={"row"}>
                    <Typography sx={{ p: 1 }}>Add Details</Typography>
                    <Button onClick={handleAllProdut}>View</Button>
                </Stack>



                <Container>
                    <form onSubmit={handleSubmit(FormSubmit)}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <Stack direction={"column"} spacing={2}>
                                    <TextField
                                        size='small'
                                        label="Product Name"
                                        {...register("productName", { required: "Product Name is required" })}
                                    />
                                    {errors.productName && (
                                        <FormHelperText sx={{ color: "red" }}>{errors.productName.message}</FormHelperText>
                                    )}

                                    <TextField
                                        type='number'
                                        size='small'
                                        label="Selling Price"
                                        {...register("sellingPrice", { required: "Selling Price is required" })}
                                    />
                                    {errors.sellingPrice && (
                                        <FormHelperText sx={{ color: "red" }}>{errors.sellingPrice.message}</FormHelperText>
                                    )}

                                    <TextField
                                        type='number'
                                        size='small'
                                        label="Max Quantity"
                                        {...register("maxQuantity", { required: "Max Quantity is required" })}
                                    />
                                    {errors.maxQuantity && (
                                        <FormHelperText sx={{ color: "red" }}>{errors.maxQuantity.message}</FormHelperText>
                                    )}

                                    <FormControl fullWidth error={!!errors.category}>
                                        <InputLabel id="category-select-label" size='small'>Category</InputLabel>
                                        <Select
                                            size='small'
                                            labelId="category-select-label"
                                            label="Category"
                                            {...register("category", { required: "Please select a category" })}
                                        >
                                            <MenuItem value="men">Men</MenuItem>
                                            <MenuItem value="women">Women</MenuItem>
                                            <MenuItem value="kids">Kids</MenuItem>
                                        </Select>
                                        {errors.category && (
                                            <FormHelperText sx={{ color: "red" }}>{errors.category.message}</FormHelperText>
                                        )}
                                    </FormControl>

                                    <FormControl fullWidth error={!!errors.rating}>
                                        <InputLabel id="rating-select-label" size='small'>Rating</InputLabel>
                                        <Select
                                            size='small'
                                            labelId="rating-select-label"
                                            label="Rating"
                                            {...register("rating", { required: "Please select a rating" })}
                                        >
                                            <MenuItem value="1">1</MenuItem>
                                            <MenuItem value="2">2</MenuItem>
                                            <MenuItem value="3">3</MenuItem>
                                            <MenuItem value="4">4</MenuItem>
                                            <MenuItem value="5">5</MenuItem>
                                        </Select>
                                        {errors.rating && (
                                            <FormHelperText sx={{ color: "red" }}>{errors.rating.message}</FormHelperText>
                                        )}
                                    </FormControl>
                                </Stack>
                            </Grid>

                            <Grid item xs={6}>
                                <Stack direction={"column"} spacing={2}>
                                    <FormControl fullWidth error={!!errors.brand}>
                                        <InputLabel id="brand-select-label" size='small'>Brand</InputLabel>
                                        <Select
                                            size='small'
                                            labelId="brand-select-label"
                                            label="Brand"
                                            {...register("brand", { required: "Please select a brand" })}
                                        >
                                            <MenuItem value="puma">Puma</MenuItem>
                                            <MenuItem value="wrong">Wrong</MenuItem>
                                            <MenuItem value="roadStar">Road Star</MenuItem>
                                            <MenuItem value="usPolo">Us Polo</MenuItem>
                                        </Select>
                                        {errors.brand && (
                                            <FormHelperText sx={{ color: "red" }}>{errors.brand.message}</FormHelperText>
                                        )}
                                    </FormControl>

                                    <TextField
                                        type='number'
                                        size='small'
                                        label="Buying Price"
                                        {...register("buyingPrice", { required: "Buying Price is required" })}
                                    />
                                    {errors.buyingPrice && (
                                        <FormHelperText sx={{ color: "red" }}>{errors.buyingPrice.message}</FormHelperText>
                                    )}

                                    <TextField
                                        type='number'
                                        size='small'
                                        label="Minimum Quantity"
                                        {...register("minQuantity", { required: "Minimum Quantity is required" })}
                                    />
                                    {errors.minQuantity && (
                                        <FormHelperText sx={{ color: "red" }}>{errors.minQuantity.message}</FormHelperText>
                                    )}

                                    <Controller
                                        name="image"
                                        control={control}
                                        defaultValue={null}
                                        rules={{ required: "Image is required" }}
                                        render={({ field }) => (
                                            <TextField
                                                size='small'
                                                type="file"
                                                InputLabelProps={{ shrink: true }}
                                                onChange={(e) => field.onChange(e.target.files)}
                                                inputProps={{ accept: "image/*" }}
                                                error={!!errors.image}
                                                helperText={errors.image ? errors.image.message : ''}
                                            />
                                        )}
                                    />

                                    <TextField
                                        label="Description"
                                        {...register("description", { required: "Description is required" })}
                                    />
                                    {errors.description && (
                                        <FormHelperText sx={{ color: "red" }}>{errors.description.message}</FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                        </Grid>

                        <Box sx={{ p: 2, textAlign: "center", justifyContent: "center" }}>
                            <Button type='submit' variant='contained'>Submit</Button>
                        </Box>
                    </form>
                </Container>
            </Paper>
        </div>
    );
}

export default AddUpdateProduct;

