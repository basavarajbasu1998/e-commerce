




import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Card, Stack, Tab, Typography } from '@mui/material';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';

import { useNavigate } from 'react-router-dom'

const Order = () => {


    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const PAGE_SIZE = 5
    const [selectedInvoiceId, setSelectedInvoiceId] = useState(null);


    const navigate = useNavigate();


    const handleSubmit = () => {
        console.log("on click")
        navigate("/shop/adminaddproduct")
    }


    const handleEditClick = (invoiceId) => {
        setSelectedInvoiceId(invoiceId);
        // setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        // setOpenDialog(false);
        // reset(); // Reset the form when closing the dialog
    };

    const handleViewPdfClick = () => {

    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 80 },
        { field: 'firstName', headerName: 'First name', width: 180 },
        { field: 'lastName', headerName: 'Last name', width: 180 },
        { field: 'mobileNumber', headerName: 'Mobile Number', width: 190 },
        { field: 'email', headerName: 'Email', width: 180 },
        { field: 'pincode', headerName: 'Pin Code', width: 180 },
        { field: 'address', headerName: 'Address', width: 200 },
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    ];


    return (
        <div>



            {/* <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Deliverd" value="1" />
                            <Tab label="Pending" value="2" />
                            <Tab label="Rejacted" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">Item One</TabPanel>
                    <TabPanel value="2">Item Two</TabPanel>
                    <TabPanel value="3">Item Three</TabPanel>
                </TabContext>
            </Box> */}


            <Card sx={{ p: 2 }}>
                <Stack direction={"row"} justifyContent={"space-between"} sx={{ mb: 1 }}>
                    <Typography>Product Detiles</Typography>
                    <Button variant='contained' onClick={handleSubmit}> Add Product</Button>
                </Stack>
                <Box>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={PAGE_SIZE}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
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
        </div>
    )
}

export default Order