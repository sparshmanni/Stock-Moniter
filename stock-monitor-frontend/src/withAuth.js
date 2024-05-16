import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (Component) => {
    return (props) => {
        const token = localStorage.getItem('accessToken');

        if (!token) {
            return <Navigate to="/login" />;
        }

        return <Component {...props} />;
    };
};

export default withAuth;
