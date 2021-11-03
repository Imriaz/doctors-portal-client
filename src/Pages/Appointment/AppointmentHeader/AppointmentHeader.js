import { Container, Grid } from '@mui/material';
import React from 'react';
import Calendar from '../../Home/Shared/Calendar/Calendar';

const AppointmentHeader = ({ date, setDate }) => {

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Calendar date={date} setDate={setDate}></Calendar>
                </Grid>

                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src='https://i.ibb.co/DVrZ2hS/chair.png' alt='' />
                </Grid>
            </Grid>

        </Container>
    );
};

export default AppointmentHeader;