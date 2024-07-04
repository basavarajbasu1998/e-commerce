import { Avatar, Card, Stack, Typography } from '@mui/material'
import React from 'react'
import CountUp from "react-countup";

const CustomCard = ({ image, title, counter }) => {

    const countUpStyle = {
        fontSize: '25px', // Adjust the font size as needed
        fontWeight: 'bold', // Adjust the font weight as needed
        fontfamily: 'font-family: "Manrope", sans-serif', // Adjust the font weight as needed
        color: '#005EA5', // Adjust the color as needed
    };
    const onComplete = () => {
        console.log('Completed!');
    };

    const onStart = () => {
        console.log('Started!');
    };
    return (
        <div>
            <Card sx={{ p: 2 }}>
                <Stack direction={"row"} spacing={2} >
                    <Avatar
                        alt="Remy Sharp"
                        src={image}
                        sx={{ width: 56, height: 56 }}
                    />

                    <Stack direction={"column"} >
                        <CountUp start={0} end={counter} duration={2} style={countUpStyle}
                            useEasing={true}
                            useGrouping={true}
                            separator=" "
                            onComplete={onComplete}
                            onStart={onStart}
                        />

                        <Typography variant='subtitle1'>{title}</Typography>
                    </Stack>
                </Stack>
            </Card>
        </div>
    )
}

export default CustomCard