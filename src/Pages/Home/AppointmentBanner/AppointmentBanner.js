import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { SportsRugbySharp } from '@mui/icons-material';
import { Button } from '@mui/material';

const appointmentBanner = {
    background: `url('https://i.ibb.co/k6Nrs3b/appointment-bg.png')`,
    backgroundColor: 'rgba(45, 58, 74, 0.9',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 175
}

const AppointmentBanner = () => {
    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img
                        style={{ width: 400, marginTop: '-110px' }}
                        src="https://i.ibb.co/xhvpMmn/doctor.png" atl="" />
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItem: 'center' }}>
                    <Box>
                        <Typography variant='h4' sx={{ mb: 5 }} style={{ color: '#3DE8DD' }}>
                            Appointment
                        </Typography>
                        <Typography sx={{ my: 5 }} variant='h5' style={{ color: 'white' }}>
                            Make an Appointment Today
                        </Typography>
                        <Typography variant='h6' sx={{ mb: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus voluptatibus mollitia, ab explicabo at corrupti nulla repellat labore, in voluptas totam sit quos tempore repellendus unde veritatis quae eaque aliquid.
                        </Typography>
                        <Button style={{ backgroundColor: '#3DE8DD' }} variant="contained">Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;