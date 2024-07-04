import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, Card, Stack, Typography } from '@mui/material';

import { useNavigate } from 'react-router-dom'

const Customer = () => {
    const PAGE_SIZE = 5
    const [selectedInvoiceId, setSelectedInvoiceId] = useState(null);


    const navigate = useNavigate();


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
        { id: 1, firstName: 'Jon', lastName: 'Snow', mobileNumber: '123-456-7890', email: 'jon.snow@example.com', pincode: '12345', address: 'Winterfell', age: 35 },
        { id: 2, firstName: 'Cersei', lastName: 'Lannister', mobileNumber: '123-456-7891', email: 'cersei.lannister@example.com', pincode: '12346', address: 'King\'s Landing', age: 42 },
        { id: 3, firstName: 'Jaime', lastName: 'Lannister', mobileNumber: '123-456-7892', email: 'jaime.lannister@example.com', pincode: '12347', address: 'King\'s Landing', age: 45 },
        { id: 4, firstName: 'Arya', lastName: 'Stark', mobileNumber: '123-456-7893', email: 'arya.stark@example.com', pincode: '12348', address: 'Winterfell', age: 16 },
        { id: 5, firstName: 'Daenerys', lastName: 'Targaryen', mobileNumber: '123-456-7894', email: 'daenerys.targaryen@example.com', pincode: '12349', address: 'Dragonstone', age: null },
        { id: 6, firstName: null, lastName: 'Melisandre', mobileNumber: '123-456-7895', email: 'melisandre@example.com', pincode: '12350', address: 'Asshai', age: 150 },
        { id: 7, firstName: 'Ferrara', lastName: 'Clifford', mobileNumber: '123-456-7896', email: 'ferrara.clifford@example.com', pincode: '12351', address: 'Braavos', age: 44 },
        { id: 8, firstName: 'Rossini', lastName: 'Frances', mobileNumber: '123-456-7897', email: 'rossini.frances@example.com', pincode: '12352', address: 'Volantis', age: 36 },
        { id: 9, firstName: 'Harvey', lastName: 'Roxie', mobileNumber: '123-456-7898', email: 'harvey.roxie@example.com', pincode: '12353', address: 'Meereen', age: 65 },
    ];



    return (
        <div>

            <Card sx={{ p: 2 }}>
                <Stack direction={"row"} justifyContent={"space-between"} sx={{ mb: 1 }}>
                    <Typography>Customer Detiles</Typography>
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

export default Customer

