import { Box, Button, Card, FormHelperText, Grid, Link, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const FormSubmit = (data) => {
        console.log("dataaaaaaaaaaaaaaaaaaa", data)
    }

    return (
        <div>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={10} md={7}  >
                    <img src='https://www.truid.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftruid-usecases.90d0a50f.gif&w=828&q=75' width={"auto"} height={"725px"} />
                </Grid>

                <Grid item xs={12} md={5}
                    sx={{
                        textAlign: "center", display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: "#017DC5"
                    }}>
                    <Card textAlign={"center"} justifyContent={"center"} sx={{ p: 3, borderRadius: "15px" }}>
                        <Typography variant='h5' sx={{ mb: 2, color: "#017DC5", }}>Login Account </Typography>
                        <Typography variant='subtitle1' textAlign={"left"} sx={{ mb: 1 }}>Plase Enter Your Detalies</Typography>
                        <form onSubmit={handleSubmit(FormSubmit)} style={{ textAlign: "center", justifyContent: "center" }}>
                            <Stack direction={"column"} spacing={1}>
                                <TextField
                                    label="Mobile Number"
                                    name='mobileNumber'
                                    sx={{ mt: 2, width: "450px" }}
                                    {
                                    ...register("mobileNumber", {
                                        required: true,
                                    })
                                    }
                                />
                                {errors.mobileNumber && errors.mobileNumber.type === "required" && (
                                    <FormHelperText sx={{ color: "red" }}>Mobile Number is Required</FormHelperText>
                                )}
                                <TextField
                                    type='password'
                                    label="Password"
                                    {
                                    ...register("password", {
                                        required: true
                                    })
                                    }
                                />
                                {errors.password && errors.password.type === "required" && (
                                    <FormHelperText sx={{ color: "red" }}>Password is required</FormHelperText>
                                )}
                                <Box>
                                    <Button sx={{ mt: 2, mb: 2, bgcolor: "#017DC5", color: "white", width: "350px", borderRadius: "20px" }} type='submit' >Login in</Button>
                                </Box>
                                <Link textAlign={"right"} sx={{ mt: 2 }}>
                                    Forgot Password
                                </Link>
                                <Box>
                                    <Typography>
                                        <img src='https://i0.wp.com/iamdistrict54.com/wp-content/uploads/2020/05/facebook-twitter-instagram-logo-png-5.png?fit=1116%2C432&ssl=1&w=640' height={"50px"} />
                                    </Typography>
                                </Box>
                            </Stack>
                        </form>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Login