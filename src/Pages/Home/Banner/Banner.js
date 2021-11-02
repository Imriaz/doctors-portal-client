import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';

const bannerBg = {
    background: `url('<img src='https://i.ibb.co/R6Nxb5W/bg.png' />)`
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450
}

const Banner = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item style={{ ...verticalCenter, textAlign: 'left' }} xs={12} md={6}>
                    <Box>
                        <Typography sx={{ my: 5 }} variant='h3'>
                            Your New Smile <br />
                            Starts Here
                        </Typography>
                        <Typography variant='h6' sx={{ fontSize: 13, color: 'gray', fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam harum in pariatur sed dolores est aliquam dolore laudantium id praesentium.
                        </Typography>
                        <Button variant='contained' style={{ backgroundColor: '#3DE8DD' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid style={verticalCenter} item xs={12} md={6}>
                    <img style={{ width: '350px' }} src='https://i.ibb.co/DVrZ2hS/chair.png' />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Banner;