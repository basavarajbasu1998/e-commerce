import React, { useEffect, useRef, useState } from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, Box, Paper, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, Button, Menu, MenuItem, Card, CardContent } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';

const ScrollHideContent = () => {
    const [hideContent, setHideContent] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const lastScrollY = useRef(0);

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

    const menuItems = [
        { text: 'Option 1', content: <Card><CardContent>Content for Option 1</CardContent></Card> },
        { text: 'Option 2', content: <Card><CardContent>Content for Option 2</CardContent></Card> },
        { text: 'Option 3', content: <Card><CardContent>Content for Option 3</CardContent></Card> }
    ];

    const [selectedItem, setSelectedItem] = useState(null);

    const handleMenuItemClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                justifyContent="space-around"
                sx={{
                    transition: 'top 0.3s',
                    top: hideContent ? '0' : '64px',
                    zIndex: 1099,
                    backgroundColor: "white"
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
                            <MenuIcon sx={{ textAlign: "left", color: "black" }} />
                        </IconButton>
                    )}
                    {!isMobile && (
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            {menuItems.map((item, index) => (
                                <div key={index}>
                                    <Button color="inherit" onClick={() => handleMenuItemClick(item)} sx={{ color: 'black' }}>
                                        {item.text}
                                    </Button>
                                </div>
                            ))}
                        </Box>
                    )}
                    <Typography>Navbar</Typography>
                    {!isMobile && (
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button color="inherit" href="/contact" sx={{ color: 'black' }}>Contact</Button>
                            <Button color="inherit" href="#" sx={{ color: 'black' }}>Support</Button>
                            <Button color="inherit" href="#" sx={{ color: 'black' }}>Orders</Button>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        {menuItems.map((item, index) => (
                            <ListItem button key={index} onClick={() => handleMenuItemClick(item)}>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>

            {selectedItem && (
                <Box sx={{ paddingTop: '64px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    {selectedItem.content}
                </Box>
            )}
        </Box>
    );
};

export default ScrollHideContent;
