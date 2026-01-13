import React from 'react';
import { Navigate } from 'react-router';

const Home = () => {
    return (
        <div>
            <title>Dragon News - Home</title>
            <Navigate to='/category/0'></Navigate>
        </div>
    );
};

export default Home;