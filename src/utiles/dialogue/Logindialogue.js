import React, { useState } from 'react';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, IconButton, Stack, TextField } from '@mui/material';
import Slide from '@mui/material/Slide';
import { green } from '@mui/material/colors';
import { Avatar, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { Controller, useForm } from 'react-hook-form';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

const Logindialogue = ({ title, open, handleClose, handleDone }) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const { register, handleSubmit, control, formState: { errors } } = useForm();


    const FormSubmit = (data) => {

    }

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
            <DialogContent>
                <Box sx={{ mb: 1 }}>
                    <img
                        src="https://static.vecteezy.com/system/resources/previews/029/914/001/non_2x/megaphone-label-with-register-now-megaphone-banner-web-design-stock-illustration-vector.jpg" // Replace with your image URL
                        alt="Example"
                        style={{ width: '100%', height: '100px' }} // Set height to 100px and width to 100%
                    />
                </Box>
                <DialogTitle id="alert-dialog-slide-title">
                    <Stack direction={"row"} justifyContent={"space-between"}>
                        {title}
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

                <form onSubmit={handleSubmit(FormSubmit)}>
                    <Box display="flex" justifyContent="center" alignItems="center">
                        <Grid container spacing={2} justifyContent="center" alignItems="center">
                            <Grid item xs={12} md={12}>
                                <Stack direction={"column"} spacing={2}>
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
                                    <Button type='submit' variant='contained' color="primary" sx={{ borderRadius: "15px" }}>
                                        Login
                                    </Button>
                                    <Stack direction={"row"} justifyContent={"space-between"}>
                                        <Typography>Signin up</Typography>
                                        <Typography fontFamily={'sans-serif'}>forgot password..?</Typography>
                                    </Stack>

                                </Stack>
                            </Grid>
                        </Grid>
                    </Box>


                </form>
            </DialogContent>

        </Dialog>
    );
};

export default Logindialogue;