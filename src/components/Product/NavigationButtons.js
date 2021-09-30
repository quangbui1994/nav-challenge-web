import { Box, Button } from '@mui/material';
import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const NavigationButtons = () => {
    const { pathname } = useLocation();
    const id = Number(pathname.split('/').pop());

    const prevRoute = id - 1 > 0 ? `/products/${id - 1}` : '/';
    const nextRoute = `/products/${id + 1}`;

    return (
        <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link to={prevRoute}><Button variant="outlined">Prev</Button></Link>
            <Link to={nextRoute}><Button variant="outlined">Next</Button></Link>
        </Box>
    );
};

export default NavigationButtons;