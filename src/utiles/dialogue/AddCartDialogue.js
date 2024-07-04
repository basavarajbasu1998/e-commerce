import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function CustomAutoCloseDialog({ open, onClose }) {
    const [visible, setVisible] = useState(open);

    useEffect(() => {
        setVisible(open);
        if (open) {
            const timer = setTimeout(() => {
                setVisible(false);
                onClose();
            }, 3000); // 3000 milliseconds = 3 seconds
            return () => clearTimeout(timer);
        }
    }, [open, onClose]);

    return (
        <Dialog open={visible} onClose={onClose}>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h6" component="div">
                        Added to Cart
                    </Typography>
                    <DialogContent>
                        <DialogContentText>
                            Item has been added to the cart successfully.
                        </DialogContentText>
                    </DialogContent>
                </CardContent>
            </Card>
        </Dialog>
    );
}

export default CustomAutoCloseDialog;
