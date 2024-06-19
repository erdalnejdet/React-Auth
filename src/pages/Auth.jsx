import React, { useState } from 'react';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { toast } from 'react-toastify';

function Auth() {
    const [signUp, setSignUp] = useState(true);
    const [authData, setAuthData] = useState({ email: '', password: '' });

    const onChangeFunc = (e) => {
        setAuthData({ ...authData, [e.target.name]: e.target.value });
    };



    const authFunc = async (e) => {
        e.preventDefault();
        if (signUp) {
            // Register
            try {
                const data = await createUserWithEmailAndPassword(auth, authData.email, authData.password);
                const user = data.user;

                if (user) {
                    window.location = "/dashboard";
                }
            } catch (error) {
                toast.error(error.message);
            }
        } else {
            // Login
            try {
                const data = await signInWithEmailAndPassword(auth, authData.email, authData.password);
                const user = data.user;

                if (user) {
                    window.location = "/dashboard";
                }
            } catch (error) {
                toast.error(error.message);
            }
        }
    };

    return (
        <div>
            <Container maxWidth="sm">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: 8,
                    }}
                >
                    <Typography component="h1" variant="h5">
                        {signUp ? "Register" : "Login"}
                    </Typography>
                    <Box component="form" noValidate  sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            value={authData.email}
                            onChange={onChangeFunc}
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            value={authData.password}
                            onChange={onChangeFunc}
                            id="password"
                            autoComplete="current-password"
                        />

                        <Button onClick={authFunc}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {signUp ? "Register" : "Login"}
                        </Button>

                        <div className="kayit-ol">
                            <p onClick={() => setSignUp(!signUp)}>
                                {signUp ? "Already have an account?" : "Sign Up"}
                            </p>
                        </div>
                        <div className='Google'>
                            <svg className='google-svg' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
                                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
                                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                            </svg>
                            <p>
                                Sign in with Google
                            </p>
                        </div>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}

export default Auth;
