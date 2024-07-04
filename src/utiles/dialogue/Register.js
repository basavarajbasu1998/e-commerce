import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormHelperText, Grid, IconButton, Stack, TextField } from '@mui/material';
import Slide from '@mui/material/Slide';
import { Typography } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import CloseIcon from '@mui/icons-material/Close';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const Register = ({ title, open, handleClose, handleDone }) => {
    const { register, handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        handleDone(data.mobileNumber); // Pass the mobile number to the handleDone function
        handleClose();
        // Dispatch the CLEAR_STATE action if needed
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
            fullWidth
        >
            <Box></Box>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ backgroundImage: "https://cdn.crispedge.com/555152.png" }}>

                    <DialogTitle id="alert-dialog-slide-title">
                        <Box sx={{ mb: 1 }}>
                            <img
                                src="https://static.vecteezy.com/system/resources/previews/029/914/001/non_2x/megaphone-label-with-register-now-megaphone-banner-web-design-stock-illustration-vector.jpg" // Replace with your image URL
                                alt="Example"
                                style={{ width: '100%', height: '100px' }} // Set height to 100px and width to 100%
                            />
                        </Box>


                        <Stack direction="row" justifyContent="space-between">
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
                        </Stack>
                    </DialogTitle>
                    <Box>
                        <Typography variant='h5' fontWeight={"bold"} sx={{ ml: 2 }}>{title}</Typography>
                    </Box>
                    <DialogContent>

                        <Box display="flex" justifyContent="center" alignItems="center">

                            <Grid container spacing={2} justifyContent="center" alignItems="center">
                                <Grid item xs={12} md={12}>
                                    <Stack direction={"column"} spacing={2}>
                                        <Stack direction={"row"} justifyContent={"space-between"} spacing={1}>
                                            <Controller
                                                name="firstname"
                                                control={control}
                                                defaultValue=""
                                                rules={{ required: true }}
                                                render={({ field }) =>
                                                    <TextField
                                                        size='small'
                                                        label="First Name"
                                                        {...field}
                                                        error={!!errors.firstname}
                                                        helperText={errors.firstname ? 'First name is required' : ''}
                                                        fullWidth
                                                    />
                                                }
                                            />
                                            <Controller
                                                name="lastname"
                                                control={control}
                                                defaultValue=""
                                                rules={{ required: true }}
                                                render={({ field }) =>
                                                    <TextField
                                                        size='small'
                                                        label="Last Name"
                                                        {...field}
                                                        error={!!errors.lastname}
                                                        helperText={errors.lastname ? 'Last name is required' : ''}
                                                        fullWidth
                                                    />
                                                }
                                            />

                                        </Stack>


                                        <Controller
                                            name="email"
                                            control={control}
                                            defaultValue=""
                                            rules={{ required: true }}
                                            render={({ field }) =>
                                                <TextField
                                                    size='small'
                                                    label="Email"
                                                    {...field}
                                                    error={!!errors.email}
                                                    helperText={errors.email ? 'Email is required' : ''}
                                                    fullWidth
                                                />
                                            }
                                        />

                                        <Controller
                                            name="mobileNumber"
                                            control={control}
                                            defaultValue=""
                                            rules={{ required: true }}
                                            render={({ field }) =>
                                                <TextField
                                                    size='small'
                                                    label="Mobile Number"
                                                    {...field}
                                                    error={!!errors.mobileNumber}
                                                    helperText={errors.mobileNumber ? 'Mobile number is required' : ''}
                                                    fullWidth
                                                />
                                            }
                                        />

                                        <Stack direction={"row"} justifyContent={"space-between"} spacing={1}>
                                            <Controller
                                                name="password"
                                                control={control}
                                                defaultValue=""
                                                rules={{ required: true }}
                                                render={({ field }) =>
                                                    <TextField
                                                        size='small'
                                                        label="Password"
                                                        type="password"
                                                        {...field}
                                                        error={!!errors.password}
                                                        helperText={errors.password ? 'Password is required' : ''}
                                                        fullWidth
                                                    />
                                                }
                                            />

                                            <Controller
                                                name="password"
                                                control={control}
                                                defaultValue=""
                                                rules={{ required: true }}
                                                render={({ field }) =>
                                                    <TextField
                                                        size='small'
                                                        label=" Conform Password"
                                                        type="password"
                                                        {...field}
                                                        error={!!errors.password}
                                                        helperText={errors.password ? 'Password is required' : ''}
                                                        fullWidth
                                                    />
                                                }
                                            />
                                        </Stack>


                                        <Button type='submit' variant='contained' color="primary" sx={{ borderRadius: "15px" }}>
                                            Register
                                        </Button>
                                    </Stack>


                                </Grid>
                            </Grid>
                        </Box>
                    </DialogContent>


                </Box>


            </form>
        </Dialog>
    );
};

export default Register;
