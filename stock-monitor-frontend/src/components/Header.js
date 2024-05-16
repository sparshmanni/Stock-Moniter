import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button ,} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        navigate('/login');
    };
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Stock Monitor
                </Typography>
                <Button color="inherit" component={Link} to="/login">Login</Button>
                <Button color="inherit" component={Link} to="/register">Register</Button>
                <Button  color="inherit"onClick={handleLogout}>Logout</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
