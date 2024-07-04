import { Box, Breadcrumbs, Typography } from '@mui/material'
import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const KidsProduct = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <div>
            <Box sx={{ mb: 2 }}>
                <img src='https://greenbellonline.com/cdn/shop/collections/Fashion_1703.jpg?v=1617904471' height={"350px"} width={"100%"} />
            </Box>

            <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" to="/">
                    Home
                </Link>
                {pathnames.map((path, index) => {
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    return index === pathnames.length - 1 ? (
                        <Typography key={to} color="textPrimary">
                            {path}
                        </Typography>
                    ) : (
                        <Link key={to} color="inherit" to={to}>
                            {path}
                        </Link>
                    );
                })}
            </Breadcrumbs>
        </div>
    )
}

export default KidsProduct