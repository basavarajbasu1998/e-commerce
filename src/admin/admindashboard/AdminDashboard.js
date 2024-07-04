import React from 'react'
import CustomCard from '../../utiles/card/CustomCard'
import { Box, Card, Grid, Typography } from '@mui/material'
import ColumnChart from '../../utiles/charts/ColumnChart'

const AdminDashboard = () => {
    return (
        <div>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 1 }}>
                <Grid item xs={2} sm={4} md={4}>
                    <CustomCard

                        image={"https://t4.ftcdn.net/jpg/04/53/70/41/360_F_453704176_fRLaZTHGmRZmM6BpZZe2PT17DBsjb4md.jpg"}
                        title={"Total Amount"}
                        counter={15000}

                    />
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <CustomCard
                        image={"https://cdn.vectorstock.com/i/500p/83/03/check-list-test-checkmarks-paper-icon-project-vector-45788303.jpg"}
                        title={"Total Orders"}
                        counter={1000}

                    />
                </Grid>
                <Grid item xs={2} sm={4} md={4}>
                    <CustomCard

                        image={"https://static.vecteezy.com/system/resources/previews/021/340/782/non_2x/customer-icon-for-your-website-design-logo-app-ui-free-vector.jpg"}
                        title={"Customers"}
                        counter={500}

                    />
                </Grid>


            </Grid>
            <Box sx={{ mt: 2, mb: 2 }}>
                <Typography variant='h6'>Order Statistics</Typography>
            </Box>

            <Box>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ p: 1 }}>
                    <Grid item xs={2} sm={4} md={4}>
                        <CustomCard
                            image={"https://cdn.vectorstock.com/i/500p/83/03/check-list-test-checkmarks-paper-icon-project-vector-45788303.jpg"}
                            title={"Total Orders"}
                            counter={10000}

                        />

                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <CustomCard
                            image={"https://media.istockphoto.com/id/1371728740/vector/patent-pending-vector-icon.jpg?s=612x612&w=0&k=20&c=9E2EiQ58Br5Zcr5Z_AFSztox-4Vw4J6JaKCc6Mo4DfQ="}
                            title={"Pending Orders"}
                            counter={100}
                        />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <CustomCard
                            image={"https://www.shutterstock.com/image-vector/project-management-icon-check-sign-260nw-1494560450.jpg"}
                            title={"Conform Orders"}
                            counter={150}
                        />
                    </Grid>

                </Grid>



                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={2} sm={4} md={4}>
                        <CustomCard
                            image={"https://t3.ftcdn.net/jpg/04/14/78/90/360_F_414789044_6xD0f4z9YcHfQimfnighWoUCIqgEJ66G.jpg"}
                            title={"On Going Orders"}
                            counter={100}
                        />
                    </Grid>

                    <Grid item xs={2} sm={4} md={4}>
                        <CustomCard
                            image={"https://png.pngtree.com/png-clipart/20210606/original/pngtree-cash-on-delivery-logo-design-png-image_6380000.jpg"}
                            title={"Deliverd Orders"}
                            counter={1000}
                        />

                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <CustomCard
                            image={"https://www.shutterstock.com/image-vector/cancelled-crossed-cart-trolley-icon-600nw-269491592.jpg"}
                            title={"Canceled Orders"}
                            counter={50}
                        />
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <CustomCard
                            image={"https://assets.entrepreneur.com/content/3x2/2000/1670502262-Untitleddesign-2022-12-08T175357551.jpg"}
                            title={"Return Orders"}
                            counter={10}
                        />                    </Grid>
                    <Grid item xs={2} sm={4} md={4}>
                        <CustomCard
                            image={"https://cdn4.iconfinder.com/data/icons/ecommerce-shopping-15/68/69-512.png"}
                            title={"Rejacted Orders"}
                            counter={120}
                        />
                    </Grid>

                </Grid>
                <Card sx={{ p: 2, mt: 2 }}>
                    <ColumnChart />
                </Card>
            </Box>
        </div >
    )
}

export default AdminDashboard