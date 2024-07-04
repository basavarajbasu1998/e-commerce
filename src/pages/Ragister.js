import { Box, Button, Card, FormHelperText, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form';

const Ragister = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();


    const FormSubmit = (data) => {
        console.log("dataaaaaaaaaaaaaa", data)
    }



    return (
        <div>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                <Grid item xs={10} md={7}  >
                    <Box justifyContent={"center"} textAlign={"center"}>
                        <img src="https://cdn.dribbble.com/users/2119772/screenshots/9955094/isometric-illustration-website.gif" height={"725px"} width={"100%"} />
                    </Box>
                </Grid>

                <Grid item xs={12} md={5} style={{
                    textAlign: "center", display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "#017DC5"
                }}>


                    <Card textAlign={"center"} justifyContent={"center"} sx={{ p: 3, borderRadius: "15px" }}>
                        <Typography variant='h5' sx={{ mb: 2, color: "#017DC5", }}>Create Account </Typography>
                        <form onSubmit={handleSubmit(FormSubmit)} style={{ textAlign: "center", justifyContent: "center" }}>

                            <Stack direction={"column"} spacing={1}>
                                <TextField
                                    fullWidth
                                    name='userName'
                                    type='text'
                                    label="FirstName"
                                    {
                                    ...register(
                                        "userName", {
                                        required: true,
                                    }
                                    )
                                    }
                                />
                                {errors.userName && errors.userName.type === "required" && (
                                    <FormHelperText sx={{ color: "red" }}>UserName required</FormHelperText>
                                )}
                                <TextField
                                    fullWidth
                                    label="Password"
                                    sx={{ mt: 2, width: "450px" }}
                                    name='password'
                                    {...register("password", {
                                        required: true
                                    }
                                    )}
                                />
                                {errors.password && errors.password.type === "required" && (
                                    <FormHelperText sx={{ color: "red" }}>password is required</FormHelperText>
                                )}
                                <TextField
                                    label="Email"

                                    name='email'
                                    type='text'
                                    {...register("email", {
                                        required: true
                                    })}
                                />
                                {errors.email && errors.email.type === "required" && (
                                    <FormHelperText sx={{ color: "red" }}>email is required</FormHelperText>
                                )}
                                <TextField

                                    label="Mobile Number"
                                    name='mobileNumber'
                                    {...register("mobileNumber", {
                                        required: true
                                    })}
                                />
                                {errors.mobileNumber && errors.mobileNumber.type === "required" && (
                                    <FormHelperText sx={{ color: "red" }}>mobileNumber is required</FormHelperText>
                                )}
                                <TextField

                                    label="Address"
                                    name='address'
                                    {...register("address", {
                                        required: true,
                                    })}
                                />
                                {errors.address && errors.address.type === "required" && (
                                    <FormHelperText sx={{ color: "red" }}>address is required</FormHelperText>
                                )}
                                <TextField
                                    label="Pincode"
                                    name='pincode'
                                    {...register("pincode", {
                                        required: true,
                                    })}
                                />
                                {errors.pincode && errors.pincode.type === "required" && (
                                    <FormHelperText sx={{ color: "red" }}>pincode is required</FormHelperText>
                                )}


                                <Box>
                                    <Button sx={{ mt: 2, mb: 2, bgcolor: "#017DC5", color: "white", width: "350px" }} type='submit' >Sigin in</Button>
                                </Box>
                            </Stack>


                        </form>
                    </Card>

                </Grid>
            </Grid>


        </div >
    )
}

export default Ragister