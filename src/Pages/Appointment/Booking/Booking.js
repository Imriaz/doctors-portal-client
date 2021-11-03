import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';

const Booking = ({ booking }) => {
    const { name, time, space } = booking;
    return (
        <>
            <Grid item xs={12} sm={6} md={6}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main', mb: 3 }} variant='h5' gutterBottom component='div'>
                        {name}
                    </Typography>
                    <Typography variant='h6' gutterBottom component='div'>
                        {time}
                    </Typography>
                    <Typography variant='caption' gutterBottom component='div'>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button variant='contained'>BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
        </>
    );
};

export default Booking;