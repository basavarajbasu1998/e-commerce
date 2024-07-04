


// import React, { useEffect, useRef, useState } from 'react';
// import { AppBar, Toolbar, Typography, CssBaseline, Box, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, Button, Grid, Popover, Paper, Grow, ClickAwayListener, MenuList, MenuItem } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import { useTheme } from '@mui/material/styles';
// import Logindialogue from '../utiles/dialogue/Logindialogue';
// import Register from '../utiles/dialogue/Register';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

// const ScrollHideContent = () => {
//     const [hideContent, setHideContent] = useState(false);
//     const [drawerOpen, setDrawerOpen] = useState(false);
//     const lastScrollY = useRef(0);

//     const [dialogOpen, setDialogOpen] = useState(false);
//     const [registerdialogOpen, setRegisterdialogOpen] = useState(false);

//     const [menMenuOpen, setMenMenuOpen] = useState(false);
//     const [womenMenuOpen, setWomenMenuOpen] = useState(false);

//     const handleOpenDialog = () => {
//         setDialogOpen(true);
//         handleCloseMenus();
//     };

//     const handleCloseDialog = () => {
//         setDialogOpen(false);
//     };

//     const handleregisterdialogOpen = () => {
//         setRegisterdialogOpen(true);
//         handleCloseMenus();
//     };

//     const handleRegisterCloseDialog = () => {
//         setRegisterdialogOpen(false);
//     };

//     const handleRegisterDoneAction = () => {
//         console.log("Register Done button clicked");
//         setRegisterdialogOpen(false); // Optionally close the dialog after action
//     };

//     const handleDoneAction = () => {
//         console.log("Login Done button clicked");
//         setDialogOpen(false); // Optionally close the dialog after action
//     };

//     const theme = useTheme();
//     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > lastScrollY.current) {
//                 setHideContent(true);
//             } else {
//                 setHideContent(false);
//             }
//             lastScrollY.current = window.scrollY;
//         };

//         window.addEventListener('scroll', handleScroll);

//         return () => {
//             window.removeEventListener('scroll', handleScroll);
//         };
//     }, []);

//     const toggleDrawer = (open) => (event) => {
//         if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//             return;
//         }
//         setDrawerOpen(open);
//     };

//     const handleMenMenuOpen = (event) => {
//         setMenMenuOpen(true);
//         setAnchorElMen(event.currentTarget);
//     };

//     const handleWomenMenuOpen = (event) => {
//         setWomenMenuOpen(true);
//         setAnchorElWomen(event.currentTarget);
//     };

//     const handleCloseMenus = () => {
//         setMenMenuOpen(false);
//         setWomenMenuOpen(false);
//     };

//     const menuItems = [
//         { text: 'Home', link: '/home' },
//         { text: 'News', link: '/news' },
//         {
//             text: 'Men',
//             onClick: handleMenMenuOpen
//         },
//         {
//             text: 'Women',
//             onClick: handleWomenMenuOpen
//         },
//         { text: 'Products', link: '/products' },
//         { text: 'Contact', link: '/contact' },
//     ];

// const menCategories = [
//     { category: 'Category 1', links: ['Link 1', 'Link 2', 'Link 3'] },
//     { category: 'Category 2', links: ['Link 1', 'Link 2', 'Link 3'] },
//     { category: 'Category 3', links: ['Link 1', 'Link 2', 'Link 3'] },
// ];

// const womenCategories = [
//     { category: 'Category 1', links: ['Link 1', 'Link 2', 'Link 3'] },
//     { category: 'Category 2', links: ['Link 1', 'Link 2', 'Link 3'] },
//     { category: 'Category 3', links: ['Link 1', 'Link 2', 'Link 3'] },
// ];

//     const [anchorElMen, setAnchorElMen] = useState(null);
//     const [anchorElWomen, setAnchorElWomen] = useState(null);

//     const handleCloseMenMenu = () => {
//         setMenMenuOpen(false);
//         setAnchorElMen(null);
//     };

//     const handleCloseWomenMenu = () => {
//         setWomenMenuOpen(false);
//         setAnchorElWomen(null);
//     };

//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <CssBaseline />
//             <AppBar
//                 position="fixed"
//                 sx={{
//                     transition: 'top 0.3s',
//                     top: hideContent ? '0' : '64px',
//                     zIndex: 1099,
//                     backgroundColor: "white"
//                 }}
//             >
//                 <Toolbar sx={{ justifyContent: 'space-around' }}>
//                     {isMobile && (
//                         <IconButton
//                             edge="start"
//                             color="inherit"
//                             aria-label="menu"
//                             onClick={toggleDrawer(true)}
//                         >
//                             <MenuIcon sx={{ textAlign: "center", color: "black" }} />
//                         </IconButton>
//                     )}
//                     {!isMobile && (
//                         <Box sx={{ display: 'flex', gap: 2 }}>
//                             {menuItems.map((item, index) => (
//                                 <React.Fragment key={index}>
//                                     {item.text === 'Men' && (
//                                         <Button
//                                             color="inherit"
//                                             onClick={item.onClick}
//                                             sx={{ color: 'black' }}
//                                         >
//                                             {item.text}
//                                         </Button>
//                                     )}
//                                     {item.text === 'Women' && (
//                                         <Button
//                                             color="inherit"
//                                             onClick={item.onClick}
//                                             sx={{ color: 'black' }}
//                                         >
//                                             {item.text}
//                                         </Button>
//                                     )}
//                                     {item.text !== 'Men' && item.text !== 'Women' && (
//                                         <Button
//                                             color="inherit"
//                                             href={item.link}
//                                             sx={{ color: 'black' }}
//                                         >
//                                             {item.text}
//                                         </Button>
//                                     )}
//                                 </React.Fragment>
//                             ))}
//                         </Box>
//                     )}
//                     <Typography>Navbar</Typography>
//                     <Box sx={{ display: 'flex', gap: 1 }}>
//                         <Button color="inherit" href="#support" sx={{ color: 'black' }}>
//                             <FavoriteBorderIcon />
//                         </Button>
//                         <Button color="inherit" href="/addcart" sx={{ color: 'black' }}>
//                             <ShoppingCartIcon />
//                         </Button>
//                     </Box>
//                 </Toolbar>
//             </AppBar>

//             <Drawer
//                 anchor="left"
//                 open={drawerOpen}
//                 onClose={toggleDrawer(false)}
//             >
//                 <Box
//                     sx={{ width: 250 }}
//                     role="presentation"
//                     onClick={toggleDrawer(false)}
//                     onKeyDown={toggleDrawer(false)}
//                 >
//                     <List>
//                         {menuItems.map((item, index) => (
//                             <ListItem button key={index} component="a" href={item.link}>
//                                 <ListItemText primary={item.text} />
//                             </ListItem>
//                         ))}
//                     </List>
//                 </Box>
//             </Drawer>

//             <Popover
//                 open={menMenuOpen}
//                 anchorEl={anchorElMen}
//                 onClose={handleCloseMenMenu}
//                 anchorOrigin={{
//                     vertical: 'bottom',
//                     horizontal: 'center',
//                 }}
//                 transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'center',
//                 }}
//             >
//                 <Paper sx={{ p: 2 }}>
//                     <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
//                         Mens Categories
//                     </Typography>
//                     <Grid container spacing={2}>
//                         {menCategories.map((category, index) => (
//                             <Grid item xs={4} key={index}>
//                                 <Typography variant="subtitle1" gutterBottom>
//                                     {category.category}
//                                 </Typography>
//                                 {category.links.map((link, linkIndex) => (
//                                     <Typography key={linkIndex}>
//                                         <a href="#">{link}</a>
//                                     </Typography>
//                                 ))}
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </Paper>
//             </Popover>

//             <Popover
//                 open={womenMenuOpen}
//                 anchorEl={anchorElWomen}
//                 onClose={handleCloseWomenMenu}
//                 anchorOrigin={{
//                     vertical: 'bottom',
//                     horizontal: 'center',
//                 }}
//                 transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'center',
//                 }}
//             >
//                 <Paper sx={{ p: 2 }}>
//                     <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
//                         Womens Categories
//                     </Typography>
//                     <Grid container spacing={2}>
//                         {womenCategories.map((category, index) => (
//                             <Grid item xs={4} key={index}>
//                                 <Typography variant="subtitle1" gutterBottom>
//                                     {category.category}
//                                 </Typography>
//                                 {category.links.map((link, linkIndex) => (
//                                     <Typography key={linkIndex}>
//                                         <a href="#">{link}</a>
//                                     </Typography>
//                                 ))}
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </Paper>
//             </Popover>

//             <Toolbar />

//             <Logindialogue
//                 title="Login In"
//                 open={dialogOpen}
//                 handleClose={handleCloseDialog}
//                 handleDone={handleDoneAction}
//             />

//             <Register
//                 title="Register..."
//                 open={registerdialogOpen}
//                 handleClose={handleRegisterCloseDialog}
//                 handleDone={handleRegisterDoneAction}
//             />

//         </Box>
//     );
// };

// export default ScrollHideContent;


import React, { useEffect, useRef, useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    CssBaseline,
    Box,
    Paper,
    IconButton,
    Drawer,
    Popover,
    List,
    ListItem,
    ListItemText,
    useMediaQuery,
    Button,
    Grid,
    Card,
    Container,
    TextField,
    InputAdornment
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Logindialogue from '../utiles/dialogue/Logindialogue';
import Register from '../utiles/dialogue/Register';
import { useTheme } from '@mui/material/styles';
import { Stack } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { useLocation } from 'react-router-dom';

const ScrollHideContent = () => {
    const [hideContent, setHideContent] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const lastScrollY = useRef(0);

    const [dialogOpen, setDialogOpen] = useState(false);
    const [registerdialogOpen, setRegisterdialogOpen] = useState(false);

    const [menMenuOpen, setMenMenuOpen] = useState(false);
    const [womenMenuOpen, setWomenMenuOpen] = useState(false);
    const [anchorElMen, setAnchorElMen] = useState(null);
    const [anchorElWomen, setAnchorElWomen] = useState(null);

    const handleOpenDialog = () => {
        setDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setDialogOpen(false);
    };

    const handleregisterdialogOpen = () => {
        setRegisterdialogOpen(true);
    };

    const handleRegisterCloseDialog = () => {
        setRegisterdialogOpen(false);
    };

    const handleMenMenuOpen = (event) => {
        setMenMenuOpen(true);
        setAnchorElMen(event.currentTarget);
    };

    const handleWomenMenuOpen = (event) => {
        setWomenMenuOpen(true);
        setAnchorElWomen(event.currentTarget);
    };

    const handleCloseMenMenu = () => {
        setMenMenuOpen(false);
        setAnchorElMen(null);
    };

    const handleCloseWomenMenu = () => {
        setWomenMenuOpen(false);
        setAnchorElWomen(null);
    };

    const handleCloseMenus = () => {
        setMenMenuOpen(false);
        setWomenMenuOpen(false);
    };

    const location = useLocation();

    const isActive = (link) => {
        return location.pathname === link;
    }
    const activeButtonStyle = {
        color: 'black',
        position: 'relative',
        fontWeight: 'bold',
        '::after': {
            content: '""',
            position: 'absolute',
            bottom: '-2px', // Adjust gap here
            left: 0,
            width: '100%',
            height: '3px', // Adjust thickness here
            backgroundColor: 'blue',
        },
    };

    const menuItems = [
        { text: 'Home', link: '/home' },
        { text: 'Men', link: '/men' },
        { text: 'Women', link: '/women', },
        { text: 'Kids', link: '/kids' },
        { text: 'Products', link: '/product' },
    ];

    const additionalMenuItems = [
        { text: 'Support', link: '/watchlist', icon: <FavoriteBorderIcon /> },
        { text: 'Add to Cart', link: '/addcart', icon: <ShoppingCartIcon /> },
    ];

    const menCategories = [
        { category: 'Category 1', links: ['Link 1', 'Link 2', 'Link 3'] },
        { category: 'Category 2', links: ['Link 1', 'Link 2', 'Link 3'] },
        { category: 'Category 3', links: ['Link 1', 'Link 2', 'Link 3'] },
    ];

    const womenCategories = [
        { category: 'Category 1', links: ['Link 1', 'Link 2', 'Link 3'] },
        { category: 'Category 2', links: ['Link 1', 'Link 2', 'Link 3'] },
        { category: 'Category 3', links: ['Link 1', 'Link 2', 'Link 3'] },
    ];

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY.current) {
                // Scrolling down
                setHideContent(true);
            } else {
                // Scrolling up
                setHideContent(false);
            }
            lastScrollY.current = window.scrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    transition: 'top 0.3s',
                    top: hideContent ? '0' : '64px',
                    zIndex: 1099,
                    backgroundColor: 'white',
                }}
            >
                <Toolbar sx={{ justifyContent: 'space-around', }}>
                    {isMobile && (
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon sx={{ textAlign: 'center', color: 'black' }} />
                        </IconButton>
                    )}
                    {!isMobile && (
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            {menuItems.map((item, index) => (
                                <Button
                                    key={index}
                                    color="inherit"
                                    onMouseEnter={item.onMouseEnter}
                                    onMouseLeave={item.onMouseLeave}
                                    href={item.link}
                                    // sx={{ color: 'black' }}
                                    sx={isActive(item.link) ? activeButtonStyle : { color: 'black' }}
                                >
                                    {item.text}
                                </Button>
                            ))}
                        </Box>
                    )}

                    {/* <Typography>Navbar</Typography> */}
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        <Typography>
                            <TextField
                                size="small"
                                variant="outlined"
                                fullWidth
                                InputProps={{
                                    style: {
                                        borderRadius: "16px",
                                    },
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <SearchIcon />
                                        </InputAdornment>
                                    ),
                                }}
                            />
                        </Typography>
                        {additionalMenuItems.map((item, index) => (
                            <Button
                                key={index}
                                color="inherit"
                                href={item.link}
                                sx={{
                                    color: 'black',
                                    m: -1 // Add negative margin to counteract default button styles
                                }}
                            >
                                {item.icon}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250 }}>
                    <List>
                        {menuItems.map((item, index) => (
                            <ListItem button key={index} component="a" href={item.link}>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

            {/* Top Layer */}
            <Box
                sx={{
                    position: 'fixed',
                    top: hideContent ? '-64px' : '0',
                    left: 0,
                    right: 0,
                    height: '34px',
                    backgroundColor: '#f0f0f0',
                    transition: 'top 0.3s',
                    zIndex: 1100,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 20px',

                }}
            >
                <Grid container alignItems="center" justifyContent="space-around">
                    <Grid item>
                        <Typography variant="body1" sx={{ textAlign: 'center' }}>
                            New Arrivals - Check Them Out!
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            {/* Middle Layer */}
            <Box
                sx={{
                    position: 'fixed',
                    top: hideContent ? '-34px' : '34px',
                    left: 0,
                    right: 0,
                    height: '34px',
                    backgroundColor: '#6739b7',
                    transition: 'top 0.3s',
                    zIndex: 1101,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 20px',
                    boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Container>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="body1" sx={{ textAlign: 'right', color: 'white' }}>
                                TRACK YOUR ORDER
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Box sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                                <Button onClick={handleOpenDialog} size="small" sx={{ color: 'white' }}>Login</Button>
                                <Typography sx={{ color: 'white' }}>|</Typography>
                                <Button onClick={handleregisterdialogOpen} size="small" sx={{ color: 'white' }}>Signin</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Toolbar />

            {/* Dialogs */}
            <Logindialogue
                title="Login In"
                open={dialogOpen}
                handleClose={handleCloseDialog}
                handleDone={() => console.log('Login Done')}
            />

            <Register
                title="Register..."
                open={registerdialogOpen}
                handleClose={handleRegisterCloseDialog}
                handleDone={() => console.log('Register Done')}
            />

            {/* Women's Categories Popover */}
            <Popover

                sx={{ mt: 15 }}
                open={womenMenuOpen}
                anchorEl={anchorElWomen}
                onClose={handleCloseWomenMenu}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                disableRestoreFocus
                onMouseEnter={() => setWomenMenuOpen(true)}
                onMouseLeave={() => setWomenMenuOpen(false)}
            >
                <Paper
                    sx={{ p: 2 }}
                    onClick={(e) => {
                        // Prevent click events from propagating and closing the popover
                        e.stopPropagation();
                    }}
                >
                    <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
                        Women's Categories
                    </Typography>
                    <Grid container spacing={2}>
                        {womenCategories.map((category, index) => (
                            <Grid item xs={4} key={index}>
                                <Typography variant="subtitle1" gutterBottom>
                                    {category.category}
                                </Typography>
                                {category.links.map((link, linkIndex) => (
                                    <Typography key={linkIndex}>
                                        <a href="#">{link}</a>
                                    </Typography>
                                ))}
                            </Grid>
                        ))}
                    </Grid>
                </Paper>
            </Popover>

            {/* Men's Categories Popover */}
            <Popover
                sx={{ mt: 15 }}
                open={menMenuOpen}
                anchorEl={anchorElMen}
                onClose={handleCloseMenMenu}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                disableRestoreFocus
                onMouseEnter={() => setMenMenuOpen(true)}
                onMouseLeave={() => setMenMenuOpen(false)}
            >
                <Paper
                    sx={{ p: 2 }}
                    onClick={(e) => {
                        // Prevent click events from propagating and closing the popover
                        e.stopPropagation();
                    }}
                >
                    {/* <Typography variant="h6" gutterBottom sx={{ textAlign: 'center' }}>
                        Men's Categories
                    </Typography> */}
                    {/* <Card sx={{ p: 2 }}> */}
                    <Grid container spacing={2}>
                        {menCategories.map((category, index) => (
                            <Grid item xs={8} key={index}>
                                <Stack direction='row'>
                                    <Typography variant="subtitle1" gutterBottom>
                                        {category.category}
                                    </Typography>
                                </Stack>
                                <Stack direction='column'>
                                    {category.links.map((link, linkIndex) => (
                                        <Typography key={linkIndex}>
                                            <a href="#">{link}</a>
                                        </Typography>
                                    ))}
                                </Stack>
                            </Grid>
                        ))}

                    </Grid>
                    {/* </Card> */}
                </Paper>
            </Popover>
        </Box>
    );
};

export default ScrollHideContent;

