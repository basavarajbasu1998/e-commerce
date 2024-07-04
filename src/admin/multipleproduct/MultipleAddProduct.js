import React, { useState } from 'react';
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
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { getSubAddProduct } from '../../redux/auth/product/ProductAction';
import { useNavigate, useParams } from 'react-router-dom';

const MultipleAddProduct = () => {

    const { productId } = useParams();

    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [imagePreviews, setImagePreviews] = useState([]);
    const [images, setImages] = useState([]);

    const handleAllProduct = () => {
        navigate(`/shop/multipleproduct/${productId}`);
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const previews = files.map(file => URL.createObjectURL(file));
        setImagePreviews(previews);
        setImages(files); // Update images state
    };

    const FormSubmit = (data) => {
        const formData = new FormData();
        formData.append('productId', productId);
        formData.append('subproductName', data.subproductName);
        formData.append('description', data.description);
        formData.append('price', data.sellingPrice);
        formData.append('dummyprice', data.buyingPrice);
        formData.append('discount', data.discount);
        // formData.append('minQuantity', data.minQuantity);
        formData.append('category', data.category);
        formData.append('rating', data.rating);
        formData.append('brand', data.brand);
        formData.append('stock', data.stack);
        formData.append('status', data.status);
        formData.append('color', data.color);
        formData.append('size', data.size);

        for (let i = 0; i < images.length; i++) {
            formData.append('image', images[i]);
        }

        // Dispatch the form data
        dispatch(getSubAddProduct(formData));
    };

    return (
        <div>
            <Paper>
                <Stack direction="row" justifyContent="space-between">
                    <Typography sx={{ p: 2 }}>Add Products</Typography>
                    <Button onClick={handleAllProduct}>View</Button>
                </Stack>
                <Container>
                    <form onSubmit={handleSubmit(FormSubmit)}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={6}>
                                <Stack direction="column" spacing={2}>
                                    <TextField
                                        size='small'
                                        label="Product Name"
                                        {...register("subproductName", { required: "Product Name is required" })}
                                    />
                                    {errors.subproductName && (
                                        <FormHelperText sx={{ color: "red" }}>{errors.subproductName.message}</FormHelperText>
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
                                        label="Discount"
                                        {...register("discount", { required: "discount is required" })}
                                    />
                                    {errors.discount && (
                                        <FormHelperText sx={{ color: "red" }}>{errors.discount.message}</FormHelperText>
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
                                            {[1, 2, 3, 4, 5].map((value) => (
                                                <MenuItem key={value} value={value.toString()}>{value}</MenuItem>
                                            ))}
                                        </Select>
                                        {errors.rating && (
                                            <FormHelperText sx={{ color: "red" }}>{errors.rating.message}</FormHelperText>
                                        )}
                                    </FormControl>

                                    <FormControl fullWidth error={!!errors.status}>
                                        <InputLabel id="status-select-label" size='small'>Status</InputLabel>
                                        <Select
                                            size='small'
                                            labelId="status-select-label"
                                            label="Status"
                                            {...register("status", { required: "Please select a status" })}
                                        >
                                            {["Active", "Deactive", "coming soon", "out of stock"].map((value) => (
                                                <MenuItem key={value} value={value.toString()}>{value}</MenuItem>
                                            ))}
                                        </Select>
                                        {errors.status && (
                                            <FormHelperText sx={{ color: "red" }}>{errors.status.message}</FormHelperText>
                                        )}
                                    </FormControl>

                                    <TextField
                                        label="Description"
                                        {...register("description", { required: "Description is required" })}
                                    />
                                    {errors.description && (
                                        <FormHelperText sx={{ color: "red" }}>{errors.description.message}</FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={6}>
                                <Stack direction="column" spacing={2}>
                                    <TextField
                                        type='text'
                                        size='small'
                                        label="Brand"
                                        {...register("brand", { required: "Brand is required" })}
                                    />
                                    {errors.brand && (
                                        <FormHelperText sx={{ color: "red" }}>{errors.brand.message}</FormHelperText>
                                    )}

                                    <TextField
                                        type='number'
                                        size='small'
                                        label="Dummy Price"
                                        {...register("buyingPrice", { required: "Buying Price is required" })}
                                    />
                                    {errors.buyingPrice && (
                                        <FormHelperText sx={{ color: "red" }}>{errors.buyingPrice.message}</FormHelperText>
                                    )}

                                    {/* <TextField
                                        type='number'
                                        size='small'
                                        label="Minimum Quantity"
                                        {...register("minQuantity", { required: "Minimum Quantity is required" })}
                                    />
                                    {errors.minQuantity && (
                                        <FormHelperText sx={{ color: "red" }}>{errors.minQuantity.message}</FormHelperText>
                                    )} */}

                                    <TextField
                                        type='number'
                                        size='small'
                                        label="Stack"
                                        {...register("stack", { required: "Stack is required" })}
                                    />
                                    {errors.stack && (
                                        <FormHelperText sx={{ color: "red" }}>{errors.stack.message}</FormHelperText>
                                    )}

                                    <FormControl fullWidth error={!!errors.color}>
                                        <InputLabel id="color-select-label" size='small'>Color</InputLabel>
                                        <Select
                                            size='small'
                                            labelId="color-select-label"
                                            label="Color"
                                            name='color'
                                            {...register("color", { required: "Please select a color" })}
                                        >
                                            {["red", "blue", "black", "white", "grey"].map((value) => (
                                                <MenuItem key={value} value={value.toString()}>{value}</MenuItem>
                                            ))}
                                        </Select>
                                        {errors.color && (
                                            <FormHelperText sx={{ color: "red" }}>{errors.color.message}</FormHelperText>
                                        )}
                                    </FormControl>

                                    <FormControl fullWidth error={!!errors.size}>
                                        <InputLabel id="size-select-label" size='small'>Size</InputLabel>
                                        <Select
                                            size='small'
                                            labelId="size-select-label"
                                            label="Size"
                                            name='size'
                                            {...register("size", { required: "Please select a size" })}
                                        >
                                            {["S", "M", "L", "XL", "XXL"].map((value) => (
                                                <MenuItem key={value} value={value.toString()}>{value}</MenuItem>
                                            ))}
                                        </Select>
                                        {errors.size && (
                                            <FormHelperText sx={{ color: "red" }}>{errors.size.message}</FormHelperText>
                                        )}
                                    </FormControl>

                                    <Controller
                                        name="image"
                                        control={control}
                                        defaultValue={[]}
                                        rules={{ required: "Image is required" }}
                                        render={({ field }) => (
                                            <TextField
                                                size='small'
                                                type="file"
                                                InputLabelProps={{ shrink: true }}
                                                inputProps={{ accept: "image/*", multiple: true }}
                                                error={!!errors.image}
                                                helperText={errors.image ? errors.image.message : ''}
                                                onChange={(e) => {
                                                    handleImageChange(e);
                                                    field.onChange(e.target.files);
                                                }}
                                                multiple
                                            />
                                        )}
                                    />
                                </Stack>
                            </Grid>
                        </Grid>

                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ mt: 2 }}>
                            <Grid item xs={12}>
                                <Stack direction="row" spacing={2} justifyContent="center">
                                    {imagePreviews.map((src, index) => (
                                        <img key={index} src={src} alt={`preview ${index}`} width={100} height={100} />
                                    ))}
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

export default MultipleAddProduct;












// import React, { useState } from 'react';

// const MultipleAddProduct = () => {
//     const [productId, setProductId] = useState('');
//     const [subproductName, setSubproductName] = useState('');
//     const [description, setDescription] = useState('');
//     const [price, setPrice] = useState(0);
//     const [dummyprice, setDummyPrice] = useState(0);
//     const [discount, setDiscount] = useState(0);
//     const [rating, setRating] = useState(0);
//     const [brand, setBrand] = useState('');
//     const [status, setStatus] = useState('active');
//     const [stock, setStock] = useState(0);
//     const [images, setImages] = useState([]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const formData = new FormData();
//         formData.append('productId', productId);
//         formData.append('subproductName', subproductName);
//         formData.append('description', description);
//         formData.append('price', price);
//         formData.append('dummyprice', dummyprice);
//         formData.append('discount', discount);
//         formData.append('rating', rating);
//         formData.append('brand', brand);
//         formData.append('status', status);
//         formData.append('stock', stock);

// for (let i = 0; i < images.length; i++) {
//     formData.append('image', images[i]);
// }

//         try {
//             const response = await fetch('http://localhost:3000/api/v1/subproducts', {
//                 method: 'POST',
//                 body: formData,
//             });

//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }

//             const data = await response.json();
//             alert('Subproduct uploaded successfully! Subproduct ID: ' + data.subproductId);
//             // Optionally handle success (e.g., reset form fields)
//         } catch (error) {
//             console.error('Error uploading subproduct:', error);
//             // Handle error (e.g., show error message)
//         }
//     };

//     const handleImageChange = (e) => {
//         const files = Array.from(e.target.files);
//         setImages(files);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} placeholder="Product ID" required />
//             <input type="text" value={subproductName} onChange={(e) => setSubproductName(e.target.value)} placeholder="Subproduct Name" required />
//             <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required />
//             <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Price" required />
//             <input type="number" value={dummyprice} onChange={(e) => setDummyPrice(e.target.value)} placeholder="Dummy Price" required />
//             <input type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} placeholder="Discount" required />
//             <input type="number" value={rating} onChange={(e) => setRating(e.target.value)} placeholder="Rating" required />
//             <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="Brand" required />
//             <input type="file" onChange={handleImageChange} multiple required />
//             <select value={status} onChange={(e) => setStatus(e.target.value)} required>
//                 <option value="active">Active</option>
//                 <option value="inactive">Inactive</option>
//             </select>
//             <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Stock" required />
//             <button type="submit">Submit</button>
//         </form>
//     );
// };

// export default MultipleAddProduct;

