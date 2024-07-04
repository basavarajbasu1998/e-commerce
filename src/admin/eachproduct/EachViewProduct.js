// import { Box, IconButton } from '@mui/material';
// import { DataGrid } from '@mui/x-data-grid';
// import React from 'react'
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import CloseIcon from '@mui/icons-material/Close';

// const EachViewProduct = () => {

//     const PAGE_SIZE = 5;
//     const [open, setOpen] = useState(false);

//     const navigate = useNavigate();
//     // const handleChange = (event, newValue) => {
//     //     setValue(newValue);
//     // };

//     const handleAddProduct = () => {
//         // navigate("/shop/adminaddproduct");
//         navigate(`/shop/adminaddproduct`);
//     };

//     const handleViewClick = (productId) => {
//         console.log("View product", productId);
//         navigate(`/shop/eachproductview/${productId}`);
//         //AddEachProduct
//         // Implement view functionality
//     };

//     const handleEditClick = (productId) => {
//         console.log("Edit product", productId);
//         navigate(`/shop/addupdate/${productId}`);
//     };

//     const handleDeleteClick = (productId) => {
//         console.log("Delete product", productId);
//         setOpen(true);
//         // Implement delete functionality
//     };

//     const handleClose = () => {
//         setOpen(false);
//     };

//     const columns = [
//         { field: 'productId', headerName: 'ID', width: 80 },
//         { field: 'firstName', headerName: 'First name', width: 180 },
//         { field: 'lastName', headerName: 'Last name', width: 180 },
//         { field: 'mobileNumber', headerName: 'Mobile Number', width: 190 },
//         { field: 'email', headerName: 'Email', width: 180 },
//         { field: 'pincode', headerName: 'Pin Code', width: 180 },
//         { field: 'address', headerName: 'Address', width: 200 },
//         {
//             field: 'actions',
//             headerName: 'Actions',
//             width: 150,
//             renderCell: (params) => (
//                 <>
//                     <IconButton color="primary" onClick={() => handleViewClick(params.row.productId)}>
//                         <VisibilityIcon />
//                     </IconButton>
//                     <IconButton color="primary" onClick={() => handleEditClick(params.row.productId)}>
//                         <EditIcon />
//                     </IconButton>
//                     <IconButton color="secondary" onClick={() => handleDeleteClick(params.row.productId)}>
//                         <DeleteIcon />
//                     </IconButton>
//                 </>
//             ),
//         },

//     ];

//     const rows = [
//         { productId: 1, firstName: 'Jon', lastName: 'Snow', mobileNumber: '123-456-7890', email: 'jon.snow@example.com', pincode: '12345', address: 'Winterfell', age: 35 },
//         { productId: 2, firstName: 'Cersei', lastName: 'Lannister', mobileNumber: '123-456-7891', email: 'cersei.lannister@example.com', pincode: '12346', address: 'King\'s Landing', age: 42 },
//         { productId: 3, firstName: 'Jaime', lastName: 'Lannister', mobileNumber: '123-456-7892', email: 'jaime.lannister@example.com', pincode: '12347', address: 'King\'s Landing', age: 45 },
//         { productId: 4, firstName: 'Arya', lastName: 'Stark', mobileNumber: '123-456-7893', email: 'arya.stark@example.com', pincode: '12348', address: 'Winterfell', age: 16 },
//         { productId: 5, firstName: 'Daenerys', lastName: 'Targaryen', mobileNumber: '123-456-7894', email: 'daenerys.targaryen@example.com', pincode: '12349', address: 'Dragonstone', age: null },
//         { productId: 6, firstName: null, lastName: 'Melisandre', mobileNumber: '123-456-7895', email: 'melisandre@example.com', pincode: '12350', address: 'Asshai', age: 150 },
//         { productId: 7, firstName: 'Ferrara', lastName: 'Clifford', mobileNumber: '123-456-7896', email: 'ferrara.clifford@example.com', pincode: '12351', address: 'Braavos', age: 44 },
//         { productId: 8, firstName: 'Rossini', lastName: 'Frances', mobileNumber: '123-456-7897', email: 'rossini.frances@example.com', pincode: '12352', address: 'Volantis', age: 36 },
//         { productId: 9, firstName: 'Harvey', lastName: 'Roxie', mobileNumber: '123-456-7898', email: 'harvey.roxie@example.com', pincode: '12353', address: 'Meereen', age: 65 },
//     ];





//     return (
//         <div>


//             <Box>
//                 <DataGrid
//                     rows={rows}
//                     columns={columns}
//                     pageSize={PAGE_SIZE}
//                     getRowId={() => crypto.randomUUID()}
//                     initialState={{
//                         pagination: {
//                             paginationModel: { page: 0, pageSize: 5 },
//                         },
//                     }}
//                     sx={{
//                         "& .MuiDataGrid-columnHeader": {
//                             backgroundColor: "#1B5886",
//                             color: "white",
//                             fontWeight: 700,
//                             cursor: "pointer"
//                         },
//                     }}
//                 />
//             </Box>
//         </div>
//     )
// }

// export default EachViewProduct




import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, Box, Button, Card, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, Tab, Typography } from '@mui/material';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getALLEachProduct, getALLProduct } from '../../redux/auth/product/ProductAction';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CloseIcon from '@mui/icons-material/Close';

const EachViewProduct = () => {

    const { productId } = useParams();

    console.log(productId)

    const [open, setOpen] = useState(false);

    const productStateData = useSelector((state) => state.product);
    const { eachallproduct } = productStateData;

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [value, setValue] = useState('1');
    const PAGE_SIZE = 5;

    useEffect(() => {
        dispatch(getALLEachProduct());
    }, [dispatch]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleAddProduct = () => {
        // navigate("/shop/adminaddproduct");
        navigate(`/shop/eachproduct/${productId}`);
    };

    const handleViewClick = (productId) => {
        console.log("View product", productId);
        navigate(`/shop/eachproductdetiles/${productId}`);
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
                    <Typography> Each Product Details</Typography>
                    <Button variant='contained' onClick={handleAddProduct}>Add Each Product</Button>
                </Stack>
                <Box>
                    <DataGrid
                        rows={eachallproduct || []}
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

export default EachViewProduct;
