import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, Box, Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getALLSubProduct } from '../../redux/auth/product/ProductAction';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';

const MultipleProduct = () => {
    const navigate = useNavigate();
   
    const { productId } = useParams();


    console.log(productId)
    const handleAddProduct = () => {
        console.log("Navigating to add product with ID:", productId);
        navigate(`/shop/multipleaddproduct/${productId}`);
    };


    const [open, setOpen] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);
    const productStateData = useSelector((state) => state.product);
    const { allsubproduct } = productStateData;
    const dispatch = useDispatch();

    const PAGE_SIZE = 5;

    useEffect(() => {
        dispatch(getALLSubProduct());
    }, [dispatch]);



    const handleViewClick = (id) => {
        console.log(id)
        navigate(`/shop/multipleview/${id}`);
    };

    const handleEditClick = (productId) => {
        navigate(`/shop/multipleadd/${productId}`);
    };

    const handleDeleteClick = (productId) => {
        setProductToDelete(productId);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setProductToDelete(null);
    };

    const handleConfirmDelete = () => {
        console.log("Delete product", productToDelete);
        // Perform delete action here, then close the dialog
        setOpen(false);
        setProductToDelete(null);
    };

    const columns = [
        {
            field: 'images',
            headerName: 'Product',
            width: 120,
            renderCell: (params) => {
                let imageUrl = '';
                try {
                    const images = JSON.parse(params.value.replace(/\\/g, ''));
                    imageUrl = images.length > 0 ? `http://localhost:3000/${images[0]}` : '';
                } catch (e) {
                    console.error('Error parsing images', e);
                }
                return (
                    <Avatar
                        src={imageUrl || 'http://localhost:3000/path/to/fallback/image.png'}
                        alt="product image"
                        height="100px"
                        width="100px"
                    />
                );
            }
        },
        { field: 'subproductName', headerName: 'Product Name', width: 190 },
        { field: 'brand', headerName: 'Brand', width: 120 },
        { field: 'description', headerName: 'Description', width: 200 },
        { field: 'price', headerName: 'Price', width: 120 },
        { field: 'discount', headerName: 'Discount', width: 120 },
        { field: 'rating', headerName: 'Rating', width: 90 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 150,
            renderCell: (params) => (
                <>
                    <IconButton color="primary" onClick={() => handleViewClick(params.id)}>
                        <VisibilityIcon />
                    </IconButton>
                    <IconButton color="primary" onClick={() => handleEditClick(params.id)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton color="secondary" onClick={() => handleDeleteClick(params.id)}>
                        <DeleteIcon />
                    </IconButton>
                </>
            ),
        },
    ];

    return (
        <div>
            <Card sx={{ p: 2 }}>
                <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                    <Typography>Sub Product Details</Typography>
                    <Button variant='contained' onClick={() => handleAddProduct()}>Add SUBProduct</Button>
                </Stack>
                <Box>
                    <DataGrid
                        rows={allsubproduct || []}
                        columns={columns}
                        pageSize={PAGE_SIZE}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: PAGE_SIZE },
                            },
                        }}
                        sx={{
                            "& .MuiDataGrid-columnHeader": {
                                backgroundColor: "#1B5886",
                                color: "white",
                                fontWeight: 700,
                                cursor: "pointer"
                            },
                        }}
                    />
                </Box>
            </Card>

            <Dialog open={open} onClose={handleClose} fullWidth>
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    Delete Product
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        Are you sure you want to delete this product?
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleConfirmDelete} sx={{ bgcolor: "red", color: "white" }}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default MultipleProduct;
