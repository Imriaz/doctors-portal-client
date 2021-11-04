import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert("Your Password didn't match");
            return;
        }
        alert("Congratulation")
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>
                        Registration
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Email"
                            name='email'
                            type='email'
                            onChange={handleOnChange}
                            variant='standard' />
                        <br />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-password-input"
                            label="Password"
                            name='password'
                            onChange={handleOnChange}
                            type="password"
                            autoComplete="current-password"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="outlined-password-input"
                            label="Re Enter Password"
                            name='password2'
                            onChange={handleOnChange}
                            type="password"
                            autoComplete="current-password"
                        />

                        <Button
                            sx={{ width: '75%', m: 1 }}
                            type='submit'
                            variant="contained" >Submit</Button>

                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to='/login'><Button
                                sx={{ width: '75%', m: 1 }}
                                type='submit'
                                variant="text" >Already Registered? Please Login</Button></NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src='https://i.ibb.co/xgps9cP/login.png' alt='Login' />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;