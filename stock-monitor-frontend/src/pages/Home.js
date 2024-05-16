import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const Home = () => {
    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                Welcome to Stock Monitor
            </Typography>
            <Button variant="contained" color="primary" component={Link} to="/login">
                Login
            </Button>
            <Button variant="contained" color="secondary" component={Link} to="/register" style={{ marginLeft: '10px' }}>
                Register
            </Button>
        </Container>
    );
};

export default Home;
