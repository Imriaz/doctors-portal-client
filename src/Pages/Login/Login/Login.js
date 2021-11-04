import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        alert("Hello")
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="h4" gutterBottom>
                        Login
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

                        <Button
                            sx={{ width: '75%', m: 1 }}
                            type='submit'
                            variant="contained" >Submit</Button>

                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to='/register'><Button
                                sx={{ width: '75%', m: 1 }}
                                type='submit'
                                variant="text" >New User? Please Register</Button></NavLink>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src='https://i.ibb.co/xgps9cP/login.png' alt='Login' />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;