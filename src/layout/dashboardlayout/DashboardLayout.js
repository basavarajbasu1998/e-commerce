import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from '../../homepages/Footer'; // Ensure correct path
import Header from '../../homepages/Header';
import ScrollHideContent from '../../other/ScrollHideNavbar';
import { Box } from '@mui/material';

const DashboardLayout = () => {
    return (
        <>
            {/* <Header /> */}
            {/* <div className="bg-slate-100 min-h-screen"> */}
                <ScrollHideContent />
                <main>
                    <Box sx={{ mt: 9 }}>
                        <Outlet />
                    </Box>
                </main>
            {/* </div> */}
            <Footer />
        </>
    );
};

export default DashboardLayout;
