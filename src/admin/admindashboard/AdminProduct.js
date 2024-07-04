import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, Box, Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, Tab, Typography } from '@mui/material';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getALLProduct } from '../../redux/auth/product/ProductAction';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';

const AdminProduct = () => {


    const [open, setOpen] = useState(false);

    const productStateData = useSelector((state) => state.product);
    const { getproduct } = productStateData;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [value, setValue] = useState('1');
    const PAGE_SIZE = 5;

    useEffect(() => {
        dispatch(getALLProduct());
    }, [dispatch]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleAddProduct = () => {
        // navigate("/shop/adminaddproduct");
        navigate(`/shop/adminaddproduct`);
    };

    const handleViewClick = (productId) => {
        console.log("View product", productId);
        navigate(`/shop/viewproduct/${productId}`);
        //AddEachProduct
        // Implement view functionality
    };

    const handleEditClick = (productId) => {
        console.log("Edit product", productId);
        navigate(`/shop/addupdate/${productId}`);
    };

    const handleDeleteClick = (productId) => {
        console.log("Delete product", productId);
        setOpen(true);
        // Implement delete functionality
    };

    const handleClose = () => {
        setOpen(false);
    };

    const columns = [
        {
            field: 'image',
            headerName: 'Product',
            width: 120,
            renderCell: (params) => (
                <Avatar src={`http://localhost:3000/${params.value}`} alt="product image" height="100px" width="100px" />
            )
        },
        { field: 'productName', headerName: 'Product Name', width: 190 },
        { field: 'brand', headerName: 'Brand', width: 120 },
        { field: 'category', headerName: 'Category', width: 120 },
        { field: 'maxQuantity', headerName: 'Max Quantity', width: 120 },
        { field: 'minQuantity', headerName: 'Min Quantity', width: 120 },
        { field: 'rating', headerName: 'Rating', width: 90 },
        { field: 'sellingPrice', headerName: 'Selling Price', width: 160 },
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
            {/* <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Men" value="1" />
                            <Tab label="Women" value="2" />
                            <Tab label="Others" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">Item One</TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </Box> */}

            <Card sx={{ p: 2 }}>
                <Stack direction="row" justifyContent="space-between" sx={{ mb: 1 }}>
                    <Typography>Main Product Details</Typography>
                    <Button variant='contained' onClick={handleAddProduct}>Add Main Product</Button>
                </Stack>
                <Box>
                    <DataGrid
                        rows={getproduct || []}
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
                        Are You sure  Do u want delete Product
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} sx={{ bgcolor: "red", color: "white" }}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default AdminProduct;
