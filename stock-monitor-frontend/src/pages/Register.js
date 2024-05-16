import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import api from '../api'


const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate=useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Register:', { username, password });

        try{
            const response = await api.post('/register/',{
                "username": username,
                "password": password
            });
            if(response.status===201){
                navigate('/login');
            }
        }catch(error){
            console.error('register failed',error);
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Register
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Register
                </Button>
            </form>
        </Container>
    );
};

export default Register;
